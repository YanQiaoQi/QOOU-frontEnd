import { useState } from 'react';
import Button from './components/Button/Button';
import Group from './components/Group/Group';
import styles from './Radio.less';

function Radio({
  children,
  checked = false,
  defaultChecked = false,
  value,
  disabled = false,
}) {
  const [isChecked, setisChecked] = useState(checked || defaultChecked);
  const curySetisChecked = (state) => () => {
    setisChecked(state);
  };

  let basicWrapperClassName = 'myDesign-radio-wrapper';
  let basicRadioClassName = 'myDesign-radio';
  let wrapperClassName = styles[basicWrapperClassName];
  let radioClassName = styles[basicRadioClassName];

  return (
    <label className={wrapperClassName} onClick={curySetisChecked(!isChecked)}>
      <div className={radioClassName}>
        <div className={styles[`${basicRadioClassName}-outer`]}>
          {isChecked ? (
            <div className={styles[`${basicRadioClassName}-inner`]}>
              <svg viewBox="0 0 20 20" height="16" width="16" fill="none">
                <path
                  d="M14 7L8.5 12.5L6 10"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          ) : null}
        </div>
      </div>
      <span>{children}</span>
    </label>
  );
}
Radio.Button = Button;
Radio.Group = Group;

export default Radio;
