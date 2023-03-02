import { ButtonProps } from 'antd';
import { useMemo } from 'react';
import { IButtonProps } from '..';

const useRenderButton = ({
  type,
  className,
  danger,
}: Pick<IButtonProps, 'type' | 'className' | 'danger'>) => {
  const realType = useMemo((): ButtonProps['type'] => {
    if (type === 'secondary') {
      return undefined;
    }
    return type;
  }, [type]);
  const classNameList = useMemo((): Array<string | undefined> => {
    if (type === 'primary') {
      return [
        `${className ?? ''} ${
          danger
            ? ''
            : 'border-primary focus:border-primary hover:border-primary'
        } !bg-primary`,
        danger ? undefined : '!text-white',
      ];
    }

    if (type === 'secondary') {
      return [
        `${className ?? ''} ${
          danger
            ? ''
            : 'border-secondary focus:border-secondary hover:border-secondary'
        } !bg-secondary`,
        danger ? undefined : '!text-black dark:!text-white',
      ];
    }

    if (type === 'link') {
      return [
        className,
        danger ? '' : `text-xs, text-gray-500, opacity-90, hover:text-sky-500`,
      ];
    }

    return [
      `${className ?? ''} dark:bg-darkMode ${
        danger
          ? ''
          : 'focus:border-primary hover:border-primary focus:!text-primary hover:!text-primary'
      }`,
      danger
        ? undefined
        : `dark:text-white hover:!text-primary focus:!text-primary`,
    ];
  }, [type, className, danger]);
  return {
    realType,
    classNameList,
  };
};

export default useRenderButton;
