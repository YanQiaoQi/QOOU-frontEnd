import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import styles from './Layout.less';

function Layout({ children }) {
  return <div className={styles.layout_container}>{children}</div>;
}
Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;
