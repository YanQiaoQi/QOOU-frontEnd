import { combineClassNames } from '../../../../utils/common';
import styles from './Sider.less';

function Sider({ children, type = 'common', className, style }) {
  let basicClassName = 'myDesign-layout-sider';
  let siderClassName = combineClassNames(
    styles[basicClassName],
    styles[`${basicClassName}-${type}`],
  );
  if (className !== undefined) {
    siderClassName = combineClassNames(siderClassName, className);
  }
  return (
    <aside className={styles[type + '_sider_container']} style={style}>
      {children}
    </aside>
  );
}

export default Sider;
