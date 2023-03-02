import { Tabs as TabsAntd } from 'antd';
import { ITabsProps } from '.';

const Tabs: React.FC<ITabsProps> = ({ className = '', ...props }) => {
  return <TabsAntd className={`dark:text-white ${className}`} {...props} />;
};

const { TabPane } = TabsAntd;

export { Tabs, TabPane };
