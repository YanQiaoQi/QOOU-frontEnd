import { Space, Spacer } from '../../../../components/Space/Space';
import Text from '../../../../components/Text/Text';
import { Link } from 'umi';
import styles from './FrameworkCard.less';
let description = {
  go: 'A Nuxt.js app, bootstrapped with create-nuxt-app.',
};

function FrameworkCard({ type = 'new', title, action }) {
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
          <Spacer size={24} />
          <Text className={styles.clone_FrameworkCard_title}>{title}</Text>
          <Spacer size={8} />
          <Text className={styles.clone_FrameworkCard_description}>
            {description[title]}
          </Text>
        </div>
      );
    }
    default:
      break;
  }
}

export default FrameworkCard;
