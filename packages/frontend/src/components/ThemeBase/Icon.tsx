import { Badge, Tooltip } from 'antd';
import { IIconProps } from '.';
import useTheme, {
  getCurrentColorSchemeStrings,
} from '../../customHooks/useTheme';

const Icon: React.FC<IIconProps> = ({
  icon,
  className = '',
  hidden = false,
  isHoverCls = true,
  isWaterWaveCls = true,
  badge,
  tooltip,
  ...props
}) => {
  const { isDark, currentColorScheme } = useTheme();

  let cls =
    'relative flex cursor-pointer items-center justify-center bg-transparent rounded-md transparent p-2 transition-colors dark:text-white';

  if (isHoverCls) {
    cls += ' hover:bg-slate-200 dark:hover:bg-slate-400';
  }

  if (isWaterWaveCls) {
    cls += ' after:water-wave-hide active:after:water-wave-show';
  }

  const genBadge = (el: JSX.Element) => {
    return badge ? (
      <Badge
        {...badge}
        size="small"
        offset={[0, 2]}
        color={getCurrentColorSchemeStrings(isDark, currentColorScheme)[0]}
        className="leading-[0.875rem]"
      >
        <span className="dark:text-white">{el}</span>
      </Badge>
    ) : (
      el
    );
  };

  const genToolTip = (el: JSX.Element) => {
    return tooltip ? <Tooltip {...tooltip}>{el}</Tooltip> : el;
  };

  return genToolTip(
    <div {...props} hidden={hidden} className={`${cls} ${className}`}>
      {genBadge(icon)}
    </div>
  );
};

export default Icon;
