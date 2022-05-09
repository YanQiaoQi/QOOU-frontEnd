import { combineClassNames } from '../../utils/common';
import styles from './Divider.less';

function Divider({
  children,
  direction = 'row',
  titleOrientation = 'center',
  className,
  style,
}) {
  let hasTitle = false;
  if (children !== undefined) {
    hasTitle = true;
  }

  let basicClassName = 'myDesign-divider';
  let dividerClassName = combineClassNames(
    styles[basicClassName],
    styles[`${basicClassName}-${direction}`],
  );
  if (hasTitle) {
    dividerClassName = combineClassNames(
      dividerClassName,
      styles[`${basicClassName}-has-title`],
      styles[`${basicClassName}-has-title-${titleOrientation}`],
    );
  }
  if (className !== undefined) {
    dividerClassName = combineClassNames(dividerClassName, className);
  }

  return (
    <div className={dividerClassName} style={style}>
      {hasTitle ? (
        <span className={styles[`${basicClassName}-title`]}>{children}</span>
      ) : null}
    </div>
  );
}

export default Divider;
