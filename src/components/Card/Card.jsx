import styles from './Card.less';

/**
 *
 * @param {String} type
 *      common default
 * @param {String} title
 *      common default
 * @returns
 */
function Card({ type = 'common', title, children = null, style, headStyle }) {
  return (
    <div className={styles[type + '_card_container']} style={style}>
      <div className={styles.card_title} style={headStyle}>
        {title}
      </div>
      {children}
    </div>
  );
}

export default Card;
