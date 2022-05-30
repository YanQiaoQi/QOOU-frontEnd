import Space from '../Space/Space';
import styles from './Card.less';

function Card({
  children,
  type = 'common',
  title,
  extra,
  style,
  headStyle,
  bodyStyle,
}) {
  let hasExtra = false;
  if (extra) {
    hasExtra = true;
  }

  let basicClassName = 'myDesign-card';
  return (
    <div className={styles[`${basicClassName}-${type}`]} style={style}>
      <div
        className={styles[`${basicClassName}-head-container`]}
        style={headStyle}
      >
        <div className={styles[`${basicClassName}-title`]}>{title}</div>
        {hasExtra ? <Space>{extra}</Space> : null}
      </div>
      <div style={bodyStyle}>{children}</div>
    </div>
  );
}

export default Card;
