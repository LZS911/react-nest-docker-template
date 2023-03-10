export type OpenApiType = {
  openapi: string;
  paths: OpenApiPathType;
  components: OpenApiComponentType;
};

export type OpenApiPathType = {
  [url in string]: OpenApiPathMethodType;
};

export type OpenApiPathMethodType = {
  post?: OpenApiPathMethodInfoType;
  get?: OpenApiPathMethodInfoType;
  patch?: OpenApiPathMethodInfoType;
  delete?: OpenApiPathMethodInfoType;
};

export type OpenApiPathMethodInfoType = {
  operationId: string;
  summary: string;
  parameters: OpenApiParameterType[];
  requestBody: OpenApiParameterType;
};

export type OpenApiParameterType = {
  name: string;
  required: boolean;
  in: string;
  schema: SchemaType;
};

export type OpenApiRequestBodyType = {
  required: boolean;
  content: any;
};

export type OpenApiResponsesType = {
  200: OpenApiSuccessResponsesType;
};
export type OpenApiSuccessResponsesType = {
  description: string;
  content: OpenApiSuccessResponsesContentType;
};

export type OpenApiSuccessResponsesContentType = {
  'application/json': {
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

export type AllTypeString = 'object' | 'string' | 'array';
