import { combineClassNames } from '../../../../utils/common';
import styles from './TabPane.less';

function TabPane({ children, value, activeKey, setActiveKey }) {
  let style = {};
  let basicClassName = 'myDesign-tab-tabphane';
  let tabPhaneClassName = styles[basicClassName];
  let isActive = false;
  if (value === activeKey) {
    isActive = true;
  }
  if (isActive) {
    tabPhaneClassName = combineClassNames(
      tabPhaneClassName,
      styles[`${basicClassName}-active`],
    );
  } else {
    style.display = 'none';
  }
  return <div style={style}>{children}</div>;
}

export default TabPane;
