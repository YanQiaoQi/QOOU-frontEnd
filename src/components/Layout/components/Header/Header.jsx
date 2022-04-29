import React from 'react';
import styles from './Header.less';

function Header({ type = 'common', children, style }) {
  return (
    <header
      className={styles['header_wrapper_' + type + '_container']}
      style={style}
    >
      <div className={styles.header_container}>{children}</div>
    </header>
  );
}

export default Header;
