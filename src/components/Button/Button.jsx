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
} = defaultSettings) {
  let basicBtnClassName = 'myDesign-btn';
  let btnClassName = combineClassNames(
    styles[basicBtnClassName],
    styles[`${basicBtnClassName}-${type}`],
    styles[`${basicBtnClassName}-${size}`],
    styles[`${basicBtnClassName}-${shape}`],
  );
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

  if (href !== undefined) {
    return (
      <a
        href={href}
        target={target}
        className={btnClassName}
        style={style}
        onClick={onClick}
      >
        <span>{children}</span>
      </a>
    );
  }
  if (icon !== undefined) {
    return (
      <button
        type={htmlType}
        className={btnClassName}
        style={style}
        onClick={onClick}
      >
        <span>{children}</span>
      </button>
    );
  }
  if (disabled === true) {
    return (
      <button disabled type={htmlType} className={btnClassName}>
        <span>{children}</span>
      </button>
    );
  }
  return (
    <button
      type={htmlType}
      className={btnClassName}
      style={style}
      onClick={onClick}
    >
      <span>{children}</span>
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
