import { IButtonProps } from '..';
import { Button as ButtonAnt } from 'antd';
import useRenderButton from './useRenderButton';

const Button: React.FC<IButtonProps> = ({
  children,
  className,
  danger,
  type,
  ...props
}) => {
  const { realType, classNameList } = useRenderButton({
    type,
    className,
    danger,
  });
  return (
    <ButtonAnt
      {...props}
      danger={danger}
      type={realType}
      className={classNameList[0]}
    >
      <span className={classNameList[1]}>{children}</span>
    </ButtonAnt>
  );
};

export default Button;
