import { combineClassNames } from '../../../../utils/common';
import styles from './Sider.less';

function Sider({ children, type = 'common', className, style }) {
  let basicClassName = 'myDesign-layout-sider';
  let siderClassName = combineClassNames(
    styles[basicClassName],
    styles[`${basicClassName}-${type}`],
  );
  if (className) {
    siderClassName = combineClassNames(siderClassName, className);
  }
  return (
    <aside className={siderClassName} style={style}>
      {children}
    </aside>
  );
}

export default Sider;
