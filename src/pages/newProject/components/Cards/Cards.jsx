import Space from '../../../../components/Space/Space';
import styles from './Cards.less';

function Card({ type, title }) {
  switch (type) {
    case 'clone': {
      break;
    }
    case 'clone': {
      break;
    }
    default:
      break;
  }
  return (
    <div className={styles.card_container}>
      <div className={styles.card_title}>{title}</div>
      <div></div>
    </div>
  );
}

function Cards({ ui }) {

  return <Space>
      Card
  </Space>;
}
