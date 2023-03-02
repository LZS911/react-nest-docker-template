import { useBoolean } from 'ahooks';
import { IOptionsProps } from '.';
import usePropsValue from '../../hooks/usePropsValue';
import Popover from './Popover';

const Options: <ValueType>(
  props: IOptionsProps<ValueType>
) => React.ReactElement = ({
  children,
  list,
  value,
  onChange,
  defaultValue,
  className = '',
  ...props
}) => {
  const [internalValue, setInternalValue] = usePropsValue({
    defaultValue,
    value,
    onChange,
  });
  const [visible, { setFalse: closePopover, setTrue: openPopover }] =
    useBoolean();

  const onVisibleChange = (visible: boolean) => {
    if (visible) {
      openPopover();
    } else {
      closePopover();
    }
  };

  return (
    <Popover
      {...props}
      className={`rounded-lg theme-options ${className}`}
      trigger="click"
      placement="bottom"
      onVisibleChange={onVisibleChange}
      visible={visible}
      content={list.map((v) => {
        return (
          <div
            onClick={() => {
              setInternalValue(v.value);
              v.onClick?.();
              closePopover();
            }}
            key={v.key}
            className={`w-48 cursor-pointer rounded-sm py-2 px-4 transition-[background] hover:bg-slate-200 dark:text-white dark:hover:bg-slate-500 ${
              internalValue === v.value
                ? 'options-selected-item bg-secondary hover:!bg-secondary'
                : ''
            }`}
          >
            <span className="leading-6">{v.text}</span>
          </div>
        );
      })}
    >
      <div onClick={openPopover}>{children}</div>
    </Popover>
  );
};

export default Options;
