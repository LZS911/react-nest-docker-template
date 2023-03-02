import { IPopoverProps } from '.';
import { Popover as PopoverAntd } from 'antd';

const Popover: React.FC<IPopoverProps> = ({ className = '', ...props }) => {
  return (
    <PopoverAntd
      {...props}
      overlayClassName={`dark:bg-darkMode theme-popover ${className}`}
    />
  );
};

export default Popover;
