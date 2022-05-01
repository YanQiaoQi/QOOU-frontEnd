import React from 'react';
import Space from '../Space/Space';
import { combineClassNames } from '../../utils/common';
import styles from './Button.less';

let defaultSettings = {
  title: '按钮',
  action: function () {},
  type: 'common',
};

/**
 *
 * @param {object} settings
 *  @property {string} title  按钮显示的字符
 *  @property {function} action 点击按钮触发的事件
 *  @property {string} width 按钮的宽度
 *  @property {string} type 按钮自己定义自己的风格，在没有设置按钮自有风格时，按按钮整体风格来
 *          common
 *          signUp
 *          main
 * @returns
 */
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
  shape = 'default',
  icon,
  href,
  target,
  onClick,
  className,
  style,
} = defaultSettings) {
  let buttonClassName = combineClassNames(
    styles['myDesign_btn_' + type],
    styles['myDesign_btn_' + size],
  );
  if (className !== undefined) {
    buttonClassName = combineClassNames(buttonClassName, className);
  }
  if (href !== undefined) {
    return (
      <a
        href={href}
        target={target}
        className={buttonClassName}
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
        className={buttonClassName}
        style={style}
        onClick={onClick}
      >
        <span>{children}</span>
      </button>
    );
  }
  return (
    <button
      type={htmlType}
      className={buttonClassName}
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

  //   return <button className={styles.ButtonList_container}>{ButtonList}</button>;
  return <Space size="large">{ButtonList}</Space>;
}

export default Button;
export { Button, ButtonList };
