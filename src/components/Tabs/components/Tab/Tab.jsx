import { combineClassNames } from '../../../../utils/common';
import styles from './Tab.less';

function Tab({ children, value, activeKey, setActiveKey, onClick }) {
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
    onClick();
  };
  return (
    <div className={tabClassName} onClick={clickHandler}>
      <div className={styles[`${basicClassName}-btn`]}>{children}</div>
    </div>
  );
}

export default Tab;
