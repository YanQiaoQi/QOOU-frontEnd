import { combineClassNames } from '../../../utils/common';
import styles from './Title.less';

function Title({ children, level = 1, className, style }) {
  let basicClassName = 'myDesign-typography-title';
  let titleClassName = styles[`${basicClassName}-h${level}`];
  if (className) {
    titleClassName = combineClassNames(titleClassName, className);
  }

  switch (level) {
    case 1: {
      return (
        <h1 className={titleClassName} style={style}>
          {children}
        </h1>
      );
    }
    case 2: {
      return (
        <h2 className={titleClassName} style={style}>
          {children}
        </h2>
      );
    }
    case 3: {
      return (
        <h3 className={titleClassName} style={style}>
          {children}
        </h3>
      );
    }
    case 4: {
      return (
        <h4 className={titleClassName} style={style}>
          {children}
        </h4>
      );
    }
    case 5: {
      return (
        <h5 className={titleClassName} style={style}>
          {children}
        </h5>
      );
    }
    default:
      return (
        <h1 className={titleClassName} style={style}>
          {children}
        </h1>
      );
  }
}

export default Title;
