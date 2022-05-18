import { combineClassNames } from '../../utils/common';
import styles from './Text.less';

function Text({ children, className, style }) {
  let textClassName = styles['myDesign-text'];
  if (className !== undefined) {
    textClassName = combineClassNames(textClassName, className);
  }
  return (
    <p className={textClassName} style={style}>
      {children}
    </p>
  );
}

export default Text;
