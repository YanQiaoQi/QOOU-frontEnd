import styles from './FrameworkCard.less';

function FrameworkCard({ title, imgURL }) {
  return (
    <div className={styles.FrameworkCard_container}>
      <div
        className={styles.FrameworkCard_image}
        style={{ '--imgURL': ' url(~@publicPath/go.jpg)' }}
      ></div>
      <div className={styles.FrameworkCard_title}>{title}</div>
    </div>
  );
}

export default FrameworkCard;
