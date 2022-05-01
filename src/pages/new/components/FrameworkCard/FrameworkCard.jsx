import Space from '../../../../components/Space/Space';
import Text from '../../../../components/Text/Text';
import { Link } from 'umi';
import styles from './FrameworkCard.less';

function FrameworkCard({ type = 'new', title, action, description }) {
  switch (type) {
    case 'new': {
      return (
        <div className={styles.new_FrameworkCard_container} onClick={action}>
          <Link to={`/new/clone?template=${title}`}>
            <div className={styles['new_FrameworkCard_image_' + title]}></div>
            <div className={styles.FrameworkCard_title}>{title}</div>
          </Link>
        </div>
      );
    }
    case 'clone': {
      return (
        <div className={styles.clone_FrameworkCard_container} onClick={action}>
          <div className={styles['clone_FrameworkCard_image_' + title]}></div>
          <Space type="spacer" size={24} />
          <Text className={styles.clone_FrameworkCard_title}>{title}</Text>
          <Space type="spacer" size={8} />
          <Text className={styles.clone_FrameworkCard_description}>
            {description}
          </Text>
        </div>
      );
    }
    default:
      break;
  }
}

export default FrameworkCard;
