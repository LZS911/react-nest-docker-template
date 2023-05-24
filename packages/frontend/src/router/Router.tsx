import { Suspense, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import HeaderProgress from '../components/HeaderProgress';
import useUserConfig from '../customHooks/useUserConfig';
import Layout from '../pages/Layout';
import { unAuthRouter, routerConfig } from './router.config';

const RouterComponent: React.FC = () => {
  const { isLogin, token, getUserConfig, getUserInfoLoading } = useUserConfig();
  useEffect(() => {
    getUserConfig();
  }, [getUserConfig]);

  const elements = useRoutes(isLogin ? routerConfig : unAuthRouter);

  console.log(window.location.href);
  const renderDocument = () => {
    const validLoginStatus = isLogin || token;
    if (getUserInfoLoading) {
      return <HeaderProgress />;
    }

    if (!validLoginStatus) {
      return <Suspense fallback={<HeaderProgress />}>{elements}</Suspense>;
    }

    return (
      <Suspense fallback={<HeaderProgress />}>
        <Layout>{elements}</Layout>
      </Suspense>
    );
  };

  return renderDocument();
};

export default RouterComponent;
