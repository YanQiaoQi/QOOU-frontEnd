import React from 'react';
import { getCSSValueFromData, combineClassNames } from '../../utils/common';
import styles from './Space.less';

let spaceSizeObj = {
  small: '8px',
  middle: '16px',
  large: '24px',
};

function Space({
  children,
  direction = 'row',
  align = 'center',
  justify,
  wrap = false,
  size = 'middle',
  split,
  className,
  style,
}) {
  let basicClassName = 'myDesign-space';
  let spaceClassName = combineClassNames(
    styles[`${basicClassName}`],
    styles[`${basicClassName}-${direction}`],
  );
  let spaceStyle = { gap: getCSSValueFromData(size, spaceSizeObj) };
  if (style) {
    Object.assign(spaceStyle, style);
  }
  if (wrap === true) {
    spaceStyle.flexWrap = 'wrap';
  }

  if (className) {
    spaceClassName = combineClassNames(spaceClassName, className);
  }
  if (align) {
    spaceClassName = combineClassNames(
      spaceClassName,
      styles[`${basicClassName}-align-${align}`],
    );
  }
  if (justify) {
    spaceClassName = combineClassNames(
      spaceClassName,
      styles[`${basicClassName}-justify-${justify}`],
    );
  }
  if (split) {
  }
  return (
    <div className={spaceClassName} style={spaceStyle}>
      {children}
    </div>
  );
}

function Spacer({ size = 16 }) {
  return (
    <span
      className={styles['myDesign-spacer']}
      style={{ '--size': `${size}px` }}
    ></span>
  );
}

function Wrapper({ children, full, className }) {
  let basicClassName = 'myDesign-wrapper';
  let wrapperClassName = styles[basicClassName];
  if (full === true) {
    wrapperClassName = combineClassNames(
      wrapperClassName,
      styles[`${basicClassName}-full`],
    );
  }
  if (className) {
    wrapperClassName = combineClassNames(wrapperClassName, className);
  }
  return <div className={wrapperClassName}>{children}</div>;
}
export default Space;
export { Spacer, Space, Wrapper };
