import { t } from '../../../locale';
import { TableColumn } from '../../../typing/common.type';
export const tableHeader: () => TableColumn<any> = () => {
  return [
    {
      dataIndex: 'name',
      title: t('user.list.column.name'),
    },
    {
      dataIndex: 'email',
      title: t('user.list.column.email'),
    },
  ];
};
