import {
  CodeSandboxOutlined,
  DashboardOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouterConfigItem } from '.';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Input = lazy(() => import('../pages/Component/Input'));
const Table = lazy(() => import('../pages/Component/Table'));
const User = lazy(() => import('../pages/User'));

const NotFound = lazy(() => import('../pages/Anomaly/NotFound'));
const Login = lazy(() => import('../pages/Login'));

export const routerConfig: RouterConfigItem[] = [
  {
    key: 'dashboard',
    path: '/dashboard',
    label: 'router.title.dashboard',
    element: <Dashboard />,
    icon: <DashboardOutlined />,
    menuType: 'Other',
  },
  {
    path: '/component',
    key: 'component',
    icon: <CodeSandboxOutlined />,
    label: 'router.title.component',
    menuType: 'Other',
    children: [
      {
        path: '/component/input',
        element: <Input />,
        key: 'input',
        label: 'router.title.input',
      },
      {
        path: '/component/table',
        element: <Table />,
        key: 'table',
        label: 'router.title.table',
      },
    ],
  },
  {
    key: 'user',
    path: '/user',
    label: 'router.title.user',
    element: <User />,
    icon: <UserOutlined />,
    menuType: 'Other',
  },
  {
    path: '/404',
    key: 'not_found',
    element: <NotFound />,
    menuType: 'Hidden',
  },
  {
    path: '*',
    hideInMenu: true,
    key: 'null',
    element: <Navigate to="/dashboard" />,
    menuType: 'Hidden',
  },
];
export const unAuthRouter: RouterConfigItem[] = [
  {
    path: '/login',
    key: 'login',
    element: <Login />,
    menuType: 'Authentication',
  },
  {
    path: '*',
    hideInMenu: true,
    key: 'null',
    element: <Navigate to="/login" />,
    menuType: 'Hidden',
  },
];
