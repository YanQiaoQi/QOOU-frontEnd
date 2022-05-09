import { useState } from 'react';
import { combineClassNames } from '../../../../utils/common';
import styles from './Button.less';

function Button({
  children,
  value,
  checkedValue,
  setCheckedValue,
  disabled = false,
}) {
  let clickHandler = () => {
    setCheckedValue(value);
  };
  let isChecked = checkedValue === value ? true : false;

  let basicClassName = 'myDesign-radio-button-wrapper';
  let radioButtonClassName = styles[basicClassName];
  if (isChecked === true) {
    radioButtonClassName = combineClassNames(
      radioButtonClassName,
      styles[`${basicClassName}-checked`],
    );
  }

  return (
    <label className={radioButtonClassName} onClick={clickHandler}>
      <span>{children}</span>
    </label>
  );
}

export default Button;
