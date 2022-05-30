import { combineClassNames } from '../../../utils/common';
import styles from './Paragraph.less';

function Paragraph({ children, className, style }) {
  let paraClassName = styles[`myDesign-typograph-paragraph`];
  if (className) {
    paraClassName = combineClassNames(paraClassName, className);
  }
  return (
    <div className={paraClassName} style={style}>
      {children}
    </div>
  );
}

export default Paragraph;
