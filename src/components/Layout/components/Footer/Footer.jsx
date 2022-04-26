import styles from './Footer.less';

function Footer({ children }) {
  return <div className={styles.footer_container}>{children}</div>;
}

export default Footer;
