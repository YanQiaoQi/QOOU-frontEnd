import styles from './Divider.less';

function Divider({ style, className }) {
  let dividerClassName = className ? className : styles.divider;
  return <hr className={dividerClassName} style={style} />;
}

export default Divider;
