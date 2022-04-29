import styles from './Footer.less';

function Footer({ children }) {
  return <footer className={styles.footer_container}>{children}</footer>;
}

export default Footer;
