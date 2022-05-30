import { combineClassNames } from '../../../utils/common';
import styles from './Text.less';

function Text({ children, className, style }) {
  let textClassName = styles['myDesign-text'];
  if (className) {
    textClassName = combineClassNames(textClassName, className);
  }
  return (
    <span className={textClassName} style={style}>
      {children}
    </span>
  );
}

export default Text;
