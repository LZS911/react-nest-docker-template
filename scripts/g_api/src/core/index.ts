import { OpenApiType } from '../type';
import { baseTypeMatch } from 'rust-like-match';
import * as path from 'path';
import write from '../write';
import { complexServiceBaseTemplate } from '../template/Service.base';

export const generateApi = (
  json: OpenApiType,
  targetPath = path.join(__dirname, '../../../../packages/frontend/api/src')
) => {
  console.time('g_api');
  console.timeLog('g_api');

  const base_service_path = path.join(targetPath, './Service.base.ts');

  const write_base_service = () => {
    write.writeFile(base_service_path, complexServiceBaseTemplate());
  };
  time_log('write base service', write_base_service);

  console.timeEnd('g_api');
};

const time_log = (label: string, fn: () => void) => {
  console.time(label);
  console.timeLog(label);
  fn();
  console.timeEnd(label);
};
