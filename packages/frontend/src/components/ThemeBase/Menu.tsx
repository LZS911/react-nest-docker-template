import { IMenuProps } from '.';
import { Menu as MenuAntd } from 'antd';

const Menu: React.FC<IMenuProps> = ({ className = '', ...props }) => {
  return <MenuAntd {...props} className={`theme-menu ${className}`} />;
};

export default Menu;
