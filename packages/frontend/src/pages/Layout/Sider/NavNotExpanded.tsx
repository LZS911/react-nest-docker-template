import { QuestionOutlined } from '@ant-design/icons';
import { isArray } from 'lodash-es';
import { useLocation, useNavigate } from 'react-router-dom';
import ThemeBase from '../../../components/ThemeBase';
import { genNavIconList } from './index.data';

const NavNotExpanded: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('dashboard');
  };

  const location = useLocation();

  const isActiveIconCls = (path: string | string[]) => {
    const activeCls = '!bg-secondary text-primary dark:text-primary';
    if (typeof path === 'string' && location.pathname === path) {
      return activeCls;
    }

    if (isArray(path) && path.includes(location.pathname)) {
      return activeCls;
    }

    return '';
  };

  const subIsActiveCls = (path: string) => {
    const activeCls = '!text-primary';
    if (location.pathname === path) {
      return activeCls;
    }

    return '';
  };

  const genNavIcon = () => {
    return genNavIconList(navigate).map((nav) => {
      if (!nav) {
        return null;
      }
      return (
        <div key={nav.name} className={`p-3`}>
          {nav.children ? (
            <ThemeBase.Popover
              placement="rightTop"
              overlayClassName={`dark:bg-darkMode`}
              trigger="click"
              content={
                <ThemeBase.Paper className="py-2 pl-2 pr-8">
                  {nav.children.map((v) => (
                    <ThemeBase.Icon
                      data-testid={v.name}
                      isHoverCls={false}
                      className={`mb-1 py-1 dark:bg-transparent  ${subIsActiveCls(
                        v.path
                      )}`}
                      icon={<span>{v.name}</span>}
                      key={v.name}
                      onClick={v.onClick}
                    />
                  ))}
                </ThemeBase.Paper>
              }
            >
              <ThemeBase.Icon
                data-testid={nav.name}
                className={`text-xl dark:bg-darkMode ${isActiveIconCls(
                  nav.children.map((v) => v.path)
                )}`}
                icon={nav.icon ?? <QuestionOutlined />}
                onClick={nav.onClick}
              />
            </ThemeBase.Popover>
          ) : (
            <ThemeBase.Icon
              data-testid={nav.name}
              className={`text-xl dark:bg-darkMode ${isActiveIconCls(
                nav.path
              )}`}
              icon={nav.icon ?? <QuestionOutlined />}
              onClick={nav.onClick}
            />
          )}
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col">
      <img
        data-testid="logo-img"
        src="/static/images/logo.svg"
        className="my-2 mx-auto h-10 w-10 cursor-pointer"
        onClick={handleLogoClick}
      />
      {genNavIcon()}
    </div>
  );
};

export default NavNotExpanded;
