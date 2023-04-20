export type MethodsType = 'post' | 'get' | 'patch' | 'delete';
export type ResponsesBodyType = 'application/json';

export type OpenApiType = {
  openapi: string;
  paths: OpenApiPathType;
  components: OpenApiComponentType;
};

export type OpenApiPathType = {
  [url in string]: OpenApiPathMethodType;
};

export type OpenApiPathMethodType = Record<
  MethodsType,
  OpenApiPathMethodInfoType
>;

export type OpenApiPathMethodInfoType = {
  operationId: string;
  summary: string;
  parameters: OpenApiParameterType[];
  requestBody?: OpenApiRequestBodyType;
  responses: OpenApiResponsesType;
  tags: string[];
};

export type OpenApiParameterType = {
  name: string;
  required: boolean;
  in: string;
  schema: { type: AllTypeString };
};

export type OpenApiRequestBodyType = {
  required: boolean;
  content: OpenApiSuccessResponsesContentType;
};

export type OpenApiResponsesType = {
  200: OpenApiSuccessResponsesType;
};
export type OpenApiSuccessResponsesType = {
  description: string;
  content: OpenApiSuccessResponsesContentType;
};

export type OpenApiSuccessResponsesContentType = {
  [key in ResponsesBodyType]: {
    schema: SchemaType;
  };
};

export type SchemaType = {
  $ref: string;
};

export type OpenApiComponentType = {
  schemas: OpenApiComponentSchemaType;
};

export type OpenApiComponentSchemaType = Record<
  string,
  OpenApiComponentSchemaInfoType
>;

export type OpenApiComponentSchemaInfoType = {
  type: AllTypeString;
  properties: Record<string, OpenApiComponentSchemaPropertyType>;
};

export type OpenApiComponentSchemaPropertyType = {
  type: AllTypeString;
  example: string;
  description: string;
};

export type AllTypeString = 'object' | 'string' | 'array' | 'number';
