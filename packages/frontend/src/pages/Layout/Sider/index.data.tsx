import { NavigateFunction } from 'react-router-dom';
import { RouterConfigItem } from '../../../router';
import { routerConfig } from '../../../router/router.config';
import { INavIconList } from './index';

export const genNavIconList: (
  navigate: NavigateFunction
) => Array<INavIconList | null> = (navigate) => {
  return routerConfig.map((v) => {
    if (v.menuType === 'Hidden') {
      return null;
    }
    if (!v.children) {
      return {
        name: v.key,
        title: v.label,
        path: v.path,
        icon: v.icon,
        onClick: () => {
          navigate(v.path);
        },
      };
    }

    return {
      name: v.key,
      path: v.path,
      title: v.label,
      icon: v.icon,
      children: v.children.map((c: RouterConfigItem) => {
        return {
          name: c.key,
          path: c.path,
          title: c.label,
          onClick: () => {
            navigate(c.path);
          },
        };
      }),
    };
  });
};
