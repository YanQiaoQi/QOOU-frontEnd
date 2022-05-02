import { combineClassNames } from '../../../../utils/common';
import styles from './Footer.less';

function Footer({ children, className, style }) {
  let basicClassName = 'myDesign-layout-footer';
  let footerClassName = styles[basicClassName];
  if (className !== undefined) {
    footerClassName = combineClassNames(footerClassName, className);
  }
  return (
    <footer className={footerClassName} style={style}>
      {children}
    </footer>
  );
}

export default Footer;
