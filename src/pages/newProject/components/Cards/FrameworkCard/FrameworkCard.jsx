import styles from './FrameworkCard.less';

function FrameworkCard({ title, action}) {
  return (
    <div className={styles.FrameworkCard_container} onClick={action}>
      <div className={styles['FrameworkCard_image_' + title]}></div>
      <div className={styles.FrameworkCard_title}>{title}</div>
    </div>
  );
}

export default FrameworkCard;
