import React from 'react';
import { combineClassNames } from '../../../../utils/common';
import styles from './Header.less';

function Header({ children, type = 'common', className, style }) {
  let basicClassName = 'myDesign-layout-header';
  let headerClassName = combineClassNames(
    styles[basicClassName],
    styles[`${basicClassName}-${type}`],
  );
  if (className) {
    headerClassName = combineClassNames(headerClassName, className);
  }

  return (
    <header className={headerClassName} style={style}>
      {children}
    </header>
  );
}

export default Header;
