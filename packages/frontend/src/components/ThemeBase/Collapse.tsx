import { ICollapsePanelProps, ICollapseProps } from '.';
import { Collapse as CollapseAntd } from 'antd';

const CollapsePanelAntd = CollapseAntd.Panel;

export const Collapse: React.FC<ICollapseProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <CollapseAntd {...props} className={`theme-collapse ${className}`}>
      {children}
    </CollapseAntd>
  );
};
export const CollapsePanel: React.FC<ICollapsePanelProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <CollapsePanelAntd
      {...props}
      className={`theme-collapse-panel ${className}`}
    >
      {children}
    </CollapsePanelAntd>
  );
};
