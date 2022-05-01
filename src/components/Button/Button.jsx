import React from 'react';
import Space from '../Space/Space';
import { combineClassNames } from '../../utils/common';
import styles from './css/index.less';

function Button({
  children,
  type = 'common',
  htmlType = 'button',
  disabled = false,
  ghost = false,
  danger = false,
  loading = false,
  block = false,
  size = 'middle',
  shape = 'square',
  icon,
  href,
  target,
  onClick,
  className,
  style,
}) {
  let isLink = false;
  let hasIcon = false;
  let hasChildren = false;
  let isOnlyIcon = false;
  let isDisabled = false;
  if (href !== undefined) {
    isLink = true;
  }
  if (children !== undefined) {
    hasChildren = true;
  }
  if (icon !== undefined) {
    hasIcon = true;
    isOnlyIcon = hasIcon && !hasChildren;
  }
  if (disabled === true) {
    isDisabled = true;
  }

  let basicBtnClassName = 'myDesign-btn';
  let btnClassName = combineClassNames(
    styles[basicBtnClassName],
    styles[`${basicBtnClassName}-${type}`],
    styles[`${basicBtnClassName}-${size}`],
    styles[`${basicBtnClassName}-${shape}`],
  );
  if (isOnlyIcon) {
    btnClassName = combineClassNames(
      btnClassName,
      styles[`${basicBtnClassName}-icon-only`],
    );
  }
  if (className !== undefined) {
    btnClassName = combineClassNames(btnClassName, className);
  }
  if (block === true) {
    btnClassName = combineClassNames(
      btnClassName,
      styles[`${basicBtnClassName}-block`],
    );
  }
  if (ghost === true) {
    btnClassName = combineClassNames(
      btnClassName,
      styles[`${basicBtnClassName}-ghost`],
    );
  }
  if (danger === true) {
    btnClassName = combineClassNames(
      btnClassName,
      styles[`${basicBtnClassName}-danger`],
    );
  }
  if (loading === true) {
    btnClassName = combineClassNames(
      btnClassName,
      styles[`${basicBtnClassName}-loading`],
    );
  }

  return isLink ? (
    <a
      href={href}
      target={target}
      className={btnClassName}
      style={!isDisabled ? style : null}
    >
      {hasIcon ? icon : null}
      {hasChildren ? <span>{children}</span> : null}
    </a>
  ) : (
    <button
      type={htmlType}
      className={btnClassName}
      style={!isDisabled ? style : null}
      onClick={!isDisabled ? onClick : null}
    >
      {hasIcon ? icon : null}
      {hasChildren ? <span>{children}</span> : null}
    </button>
  );
}

function ButtonList({ ui }) {
  let ButtonList = ui.map((item) => {
    return (
      <Button key={item.title} {...item}>
        {item.title}
      </Button>
    );
  });

  //   return <button className={styles.ButtonList-container}>{ButtonList}</button>;
  return <Space size="large">{ButtonList}</Space>;
}

export default Button;
export { Button, ButtonList };
