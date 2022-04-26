import Space from '../../../../components/Space/Space';
import styles from './Cards.less';

function Card({ type, title, buttonTitle }) {
  let content = null;
  return (
    <div className={styles[type + '_card_container']}>
      <div className={styles.card_title}>{title}</div>
      <div className={styles.card_content}>{content}</div>
      <div className={styles.card_buttonTitle}>{buttonTitle}</div>
    </div>
  );
}

function Cards({ ui = [] }) {
  let cards = ui.map((item) => {
    return <Card {...item} key={item.title} />;
  });
  return <Space size={48}>{cards}</Space>;
}

export default Cards;
