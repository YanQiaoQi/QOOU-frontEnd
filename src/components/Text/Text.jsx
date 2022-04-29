import styles from './Text.less';

/**
 *
 * @param {*} children 文字内容  
 * @param {*} className 自己设定的类  
 * @param {*} style 自己设定的样式  
 *
 * @returns
 */
function Text({ children, className, style }) {
  return (
    <div className={className ? className : styles.Text} style={style}>
      {children}
    </div>
  );
}

export default Text;
