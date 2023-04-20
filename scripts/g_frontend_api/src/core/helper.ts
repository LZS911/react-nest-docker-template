import {
  MethodsType,
  OpenApiParameterType,
  OpenApiPathMethodInfoType,
  OpenApiPathType,
} from './type';

export type HelperGetApiPathInfoReturn = {
  id: string;
  url: string;
  method: MethodsType;
  parameters: OpenApiParameterType[];
  req_ref_id?: string;
  res_ref_id: string;
};

export class Helper {
  public static g_type_name(type_name?: string) {
    if (!type_name) {
      return undefined;
    }
    return `I${this.first_upper_case(type_name)}`;
  }

  public static g_type_name_with_parameters(id: string) {
    return `${this.g_type_name(id)}Parameters`;
  }

  public static g_type_with_parameters(parameters: OpenApiParameterType[]) {
    const res = parameters
      .map((v) => {
        const required = v.required ? ':' : '?:';
        return `${v.name}${required} ${v.schema.type}`;
      })
      .join(';');

    return `{${res}}`;
  }

  public static get_api_path_info(
    api_path: OpenApiPathType
  ): HelperGetApiPathInfoReturn[] {
    const url = Object.keys(api_path)[0];

    if (!url) {
      throw new Error('get_request_body_ref_ids : unknown url in paths');
    }

    const request_body_ref_info = Object.keys(api_path[url]).map((_key) => {
      const method = _key as MethodsType;

      const info: OpenApiPathMethodInfoType = api_path[url][method];

      const req_ref_id = this.g_type_name(
        info.requestBody?.content['application/json'].schema.$ref.split('/')[3]
      );

      if (
        !info.responses[200].content['application/json'].schema.$ref.split(
          '/'
        )[3]
      ) {
        throw new Error('get_request_body_ref_ids: unknown response');
      }
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const res_ref_id = this.g_type_name(
        info.responses[200].content['application/json'].schema.$ref.split(
          '/'
        )[3]
      )!;

      return {
        id: info.operationId,
        url,
        method,
        req_ref_id,
        res_ref_id,
        parameters: info.parameters,
      };
    });

    return request_body_ref_info;
  }

  public static first_upper_case(str: string) {
    return str.replace(/( |^)[a-z]/g, (v) => v.toUpperCase());
  }

  public static first_lower_case(str: string) {
    return str.replace(/( |^)[A-Z]/g, (v) => v.toLowerCase());
  }
}
