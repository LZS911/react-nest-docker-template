import { SyncOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Card, Space, Table } from 'antd';
import { useTranslation } from 'react-i18next';
import ThemeBase from '../../../components/ThemeBase';
import ApiBase from '../../../utils/api';
import { tableHeader } from './column';
const getUsers = () => {
  return ApiBase.get('/v1/users');
};
const UserList: React.FC = () => {
  const { t } = useTranslation();
  const { data, refresh, loading } = useRequest(() =>
    getUsers().then((res) => {
      return res.data.data.payload;
    })
  );
  console.log(data);
  return (
    <>
      <h2 className="mb-4 font-semibold dark:text-white">
        {t('user.pageTitle')}
      </h2>

      <Card
        title={
          <Space>
            {t('user.list.title')}
            <ThemeBase.Icon icon={<SyncOutlined />} onClick={refresh} />
          </Space>
        }
      >
        <Table columns={tableHeader()} dataSource={data} loading={loading} />
      </Card>
    </>
  );
};
export default UserList;
