import { useState } from 'react';
import styles from './Radio.less';

function Radio({ children, checked = true }) {
  const [isChecked, setisChecked] = useState(checked);
  const curySetisChecked = (state) => () => {
    setisChecked(state);
  };
  return (
    <label
      className={styles.radio_container}
      onClick={curySetisChecked(!isChecked)}
    >
      <div className={styles.checkbox_container}>
        <div className={styles.checkbox_border}>
          {isChecked ? (
            <div className={styles.checkbox_icon}>
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
      <span className={styles.title_container}>{children}</span>
    </label>
  );
}

export default Radio;
