import React from 'react';
import { combineClassNames } from '../../../../utils/common';
import styles from './Content.less';

function Content({ children, className, style }) {
  let basicClassName = 'myDesign-layout-content';
  let contentClassName = styles[basicClassName];
  if (className !== undefined) {
    contentClassName = combineClassNames(contentClassName, className);
  }
  return (
    <main className={contentClassName} style={style}>
      {children}
    </main>
  );
}

export default Content;
