import * as path from 'path';

export class SupportPath {
  public static target_path = path.join(
    __dirname,
    '../../../../packages/frontend/src/api'
  );

  public static base_service_path = path.join(
    this.target_path,
    './Service.base.ts'
  );

  public static tag_dir_path = (tag: string) =>
    path.join(this.target_path, tag);

  public static tag_dir_index_path = (tag: string) => {
    return path.join(this.tag_dir_path(tag), 'index.ts');
  };

  public static tag_dir_index_type_path = (tag: string) => {
    return path.join(this.tag_dir_path(tag), 'index.type.ts');
  };

  public static common_type_path = () => {
    return path.join(this.target_path, 'common.type.ts');
  };
}
