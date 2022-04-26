import Space from '../../../../components/Space/Space';
import styles from './Cards.less';

function Card({ type, title, buttonTitle, children = null }) {
  return (
    <div className={styles[type + '_card_container']}>
      <div className={styles.card_title}>{title}</div>
      <Space type="spacer" size="20px" />
      <div className={styles.card_content}>{children}</div>
      <div className={styles.card_buttonTitle}>{buttonTitle}</div>
    </div>
  );
}

export default Card;
