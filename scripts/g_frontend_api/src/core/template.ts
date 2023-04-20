import { Helper, HelperGetApiPathInfoReturn } from './helper';

export class Template {
  private static params_name = 'params';
  private static options_name = 'options';
  private static axios_request_config = 'AxiosRequestConfig';
  public static service_base_import_statement = `import ServiceBase from '../Service.base';`;
  public static axios_request_config_import_statement = `import { ${this.axios_request_config} } from 'axios';`;

  public static g_complex_service() {
    return `
    import { AxiosRequestConfig } from 'axios';
    import { cloneDeep } from 'lodash-es';
    import ApiBase from '../utils/Api';
  
    class ServiceBase {
      protected get<T>(url: string, data: any = {}, options?: AxiosRequestConfig) {
        return ApiBase.get<T>(url, {
          params: data,
          ...options,
        });
      }
  
      protected post<T>(url: string, data: any = {}, options?: AxiosRequestConfig) {
        return ApiBase.post<T>(url, data, options);
      }
  
      protected delete<T>(
        url: string,
        data: any = {},
        options?: AxiosRequestConfig
      ) {
        return ApiBase.delete<T>(url, {
          params: data,
          ...options,
        });
      }
  
      protected put<T>(url: string, data: any = {}, options?: AxiosRequestConfig) {
        return ApiBase.put<T>(url, data, options);
      }
  
      protected patch<T>(
        url: string,
        data: any = {},
        options?: AxiosRequestConfig
      ) {
        return ApiBase.patch<T>(url, data, options);
      }
  
      protected cloneDeep(data: any = {}) {
        return cloneDeep(data);
      }
    }
  
    export default ServiceBase;
    `;
  }

  public static g_import_statement(ids: Set<string>) {
    return `import { ${[...ids].toString()} } from './index.type'`;
  }

  public static g_class_wrapper(body: string, tag: string) {
    const service_name = `${Helper.first_upper_case(tag)}Service`;
    return `class ${service_name} extends ServiceBase {
      ${body}
     };
     export default new ${service_name}();
    `;
  }

  public static g_func_wrapper({
    body,
    id,
    parameters,
    req_ref_id,
  }: HelperGetApiPathInfoReturn & { body: string }) {
    let args = '';
    if (parameters.length > 0) {
      const param_in_path = parameters
        .map((v) => {
          return v.name;
        })
        .join(', ');

      args = req_ref_id
        ? `
       {  ${param_in_path}, ...${
            this.params_name
          }}: ${req_ref_id} & ${Helper.g_type_name_with_parameters(id)}, ${
            this.options_name
          }?: ${this.axios_request_config}
      `
        : `{${param_in_path}}:${Helper.g_type_name_with_parameters(id)} , ${
            this.options_name
          }?: ${this.axios_request_config}`;
    } else {
      args = req_ref_id
        ? `${this.params_name}: ${req_ref_id}, ${this.options_name}?: ${this.axios_request_config}`
        : `${this.options_name}?: ${this.axios_request_config}`;
    }

    return `public ${Helper.first_lower_case(id)}(${args}
    ){
      ${body}
    }`;
  }

  public static g_func_body({
    method,
    parameters,
    res_ref_id,
    url,
    req_ref_id,
  }: HelperGetApiPathInfoReturn) {
    if (parameters.length > 0) {
      parameters.forEach((v) => {
        if (v.in === 'path' && url.includes(`{${v.name}}`)) {
          url = url.replace(`{${v.name}}`, '${' + `${v.name}` + '}');
        }
      });
      const args = req_ref_id
        ? `${this.params_name}, ${this.options_name}`
        : this.options_name;

      return `
        return this.${method}<${res_ref_id}>('${url}', ${args})
      `.replace(/'/g, '`');
    }

    const args = req_ref_id
      ? `${this.params_name}, ${this.options_name}`
      : this.options_name;

    return `return this.${method}<${res_ref_id}>('${url}', ${args})`;
  }
}
