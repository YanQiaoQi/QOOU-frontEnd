import styles from './Sider.less';

/**
 *
 * @param {String} width
 * @returns
 */
function Sider({ type = 'common', children, width, style }) {
  return (
    <aside
      className={styles[type + '_sider_container']}
      style={{ ...style, '--width': width }}
    >
      {children}
    </aside>
  );
}

export default Sider;
