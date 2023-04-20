import {
  MethodsType,
  OpenApiComponentType,
  OpenApiPathType,
  OpenApiType,
} from './type';
import { baseTypeMatch } from 'rust-like-match';
import write from '../write';
import { Helper, HelperGetApiPathInfoReturn } from './helper';
import { Template } from './template';
import { SupportPath } from './path';

export const g_api = (json: OpenApiType) => {
  console.time('g_api');
  console.timeLog('g_api');

  /**
   * 通过模板内容生成 Service.base.ts 文件
   */
  const g_service_base_with_template = () => {
    write.writeFile(
      SupportPath.base_service_path,
      Template.g_complex_service()
    );
  };

  time_log('write base service', g_service_base_with_template);

  const tag_name_correspond_api_path = new Map<string, OpenApiPathType[]>();
  /**
   * 根据每个 url 下的 tags 属性进行分组, 将值相同的放到一块
   */
  const group_by_with_tags = () => {
    Object.keys(json.paths).forEach((url) => {
      const current_api = json.paths[url];
      for (const _key in current_api) {
        const method = _key as MethodsType;
        if (!current_api[method].tags || !current_api[method].tags[0]) {
          throw new Error(
            `group_by_with_tags: there are no tags in api ${url}:${current_api}:${method}`
          );
        }
        const tag = current_api[method].tags[0];

        baseTypeMatch(tag_name_correspond_api_path.has(tag), {
          true: () => {
            tag_name_correspond_api_path.set(tag, [
              ...(tag_name_correspond_api_path.get(tag) ?? []),
              { [url]: json.paths[url] },
            ]);
          },
          false: () => {
            tag_name_correspond_api_path.set(tag, [{ [url]: json.paths[url] }]);
          },
        });

        break;
      }
    });
  };
  time_log('group by with tags', group_by_with_tags);

  const g_tag_dir = (api_paths: OpenApiPathType[], tag: string) => {
    const api_path_info = api_paths.reduce<HelperGetApiPathInfoReturn[]>(
      (acc, cur) => [...acc, ...Helper.get_api_path_info(cur)],
      []
    );

    const all_ref_ids = new Set(
      api_path_info
        .reduce<string[]>((acc, cur) => {
          const arr = [...acc, cur.req_ref_id ?? '', cur.res_ref_id ?? ''];

          if (cur.parameters.length > 0) {
            arr.push(Helper.g_type_name_with_parameters(cur.id));
          }

          return arr;
        }, [])
        .filter((v) => !!v)
    );

    const g_index_file = () => {
      const current_import_statement = Template.g_import_statement(all_ref_ids);

      const all_function_statement = api_path_info
        .map((v) => {
          return Template.g_func_wrapper({
            body: Template.g_func_body(v),
            ...v,
          });
        })
        .join('\n');

      write.writeFile(
        SupportPath.tag_dir_index_path(tag),
        `${Template.service_base_import_statement}
          ${Template.axios_request_config_import_statement}
          ${current_import_statement}

          ${Template.g_class_wrapper(all_function_statement, tag)}
        `
      );
    };
    const g_index_type_file = () => {
      const init_code = '';
    };

    g_index_file();

    g_index_type_file();
  };

  const g_common_type_file = (components: OpenApiComponentType) => {
    write.writeFile(SupportPath.common_type_path(), ` `);
  };

  tag_name_correspond_api_path.forEach((value, tag) => {
    time_log(`generate dir with tag ${tag}`, () => g_tag_dir(value, tag));
  });

  time_log(`generate common type: `, () => g_common_type_file(json.components));

  console.timeEnd('g_api');
};

const time_log = (label: string, fn: () => void) => {
  console.time(label);
  console.timeLog(label);
  fn();
  console.timeEnd(label);
};
