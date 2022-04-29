import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Sider from './components/Sider/Sider';
import Footer from './components/Footer/Footer';
import styles from './Layout.less';

function Layout({ children, style }) {
  let hasSider = false;
  children.forEach((element) => {
    let elementType = element.type;
    if (elementType === Sider) {
      hasSider = true;
    }
  });
  let containerClassName = hasSider
    ? styles.layout_container_has_sider
    : styles.layout_container;

  return <section className={containerClassName} style={style}>{children}</section>;
}
Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Sider = Sider;

export default Layout;
