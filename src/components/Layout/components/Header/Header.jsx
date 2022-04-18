import React from 'react';
import styles from './Header.less';

function Header({ type = 'common', children }) {
  return (
    <div className={styles['header_wrapper_' + type + '_container']}>
      <header className={styles.header_container}>{children}</header>
    </div>
  );
}

export default Header;
