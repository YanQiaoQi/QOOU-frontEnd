import React from 'react';
import { combineClassNames } from '../../../../utils/common';
import styles from './Header.less';

function Header({ type = 'common', children, className, style }) {
  let basicClassName = 'myDesign-layout-header';
  let headerClassName = styles[`${basicClassName}-${type}`];
  if (className !== undefined) {
    headerClassName = combineClassNames(headerClassName, className);
  }
  
  return (
    <header className={headerClassName} style={style}>
      {children}
    </header>
  );
}

export default Header;
