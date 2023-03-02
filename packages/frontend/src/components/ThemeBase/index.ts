import {
  ButtonProps,
  CollapseProps,
  MenuProps,
  PopoverProps,
  CollapsePanelProps,
  BadgeProps,
  TooltipProps,
  TabsProps,
  TabPaneProps,
} from 'antd';
import React, { MouseEventHandler } from 'react';
import Button from './Button/Button';
import Paper from './Paper';
import Icon from './Icon';
import Popover from './Popover';
import Menu from './Menu';
import Options from './Options';
import { Collapse, CollapsePanel } from './Collapse';
import { TabPane, Tabs } from './Tabs';
export interface IThemeBaseProps {
  children?: React.ReactNode;
  className?: string;
  hidden?: boolean;
  'data-testid'?: string;
}
export type IPaperProps = IThemeBaseProps;
export interface IIconProps extends IThemeBaseProps {
  icon: JSX.Element;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  isHoverCls?: boolean;
  badge?: BadgeProps;
  tooltip?: TooltipProps;
  isWaterWaveCls?: boolean;
}
export interface IButtonProps extends Omit<ButtonProps, 'type'> {
  type?: ButtonProps['type'] | 'secondary';
}
export interface IOptionsProps<T>
  extends Omit<PopoverProps, 'trigger' | 'content'> {
  list: Array<{
    key: string;
    value: T;
    text: string;
    onClick?: () => void;
  }>;
  defaultValue?: T;
  value?: T;
  onChange?: (val?: T) => void;
}
export type IPopoverProps = PopoverProps;
export type IMenuProps = MenuProps;

export interface ICollapseProps extends CollapseProps, IThemeBaseProps {}
export interface ICollapsePanelProps
  extends CollapsePanelProps,
    IThemeBaseProps {}

export type ITabsProps = TabsProps;
export type ITabPaneProps = TabPaneProps;

const ThemeBase = {
  Paper,
  Button,
  Icon,
  Popover,
  Menu,
  Options,
  Collapse,
  CollapsePanel,
  Tabs,
  TabPane,
};
export default ThemeBase;
