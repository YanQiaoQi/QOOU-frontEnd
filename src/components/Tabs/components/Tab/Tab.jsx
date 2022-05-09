import { combineClassNames } from '../../../../utils/common';
import styles from './Tab.less';

function Tab({ children, value, activeKey, setActiveKey }) {
  let basicClassName = 'myDesign-tabs-tab';
  let tabClassName = styles[basicClassName];
  let isActive = false;
  if (value === activeKey) {
    isActive = true;
  }
  if (isActive) {
    tabClassName = combineClassNames(
      tabClassName,
      styles[`${basicClassName}-active`],
    );
  }

  let clickHandler = () => {
    setActiveKey(value);
  };
  return (
    <div className={tabClassName} onClick={clickHandler}>
      <div className={styles[`${basicClassName}-btn`]}>{children}</div>
    </div>
  );
}

export default Tab;
