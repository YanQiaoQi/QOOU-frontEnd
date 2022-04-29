import React from 'react';
import styles from './Content.less';

function Content({ children, style }) {
  return (
    <main className={styles.content_container} style={style}>
      {children}
    </main>
  );
}

export default Content;
