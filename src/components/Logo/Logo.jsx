import styles from './Logo.less';
import Space from '../Space/Space';

/**
 *
 * @param {string} type
 *    'common'
 * @param {number} info
 *     radius
 * @returns
 */
function Logo({ type, info = '17px' }) {
  let logo;
  switch (type) {
    case 'IMG': {
      break;
    }
    case 'simple': {
      logo = (
        <div className={styles.simpleLogo} style={{ '--radius': info }}></div>
      );
      return logo;
    }
    case 'personalIcon': {
      logo = (
        <div className={styles.personalIcon} style={{ '--radius': info }}></div>
      );
      return logo;
    }
    default:
      let radius = 17;
      logo = (
        <>
          <svg style={{ width: 2 * radius }}>
            <circle cx={radius} cy={4.5 * radius} r={radius} />
          </svg>
          <div className={styles.title}>QOOU</div>
        </>
      );
      return <Space size={5}>{logo}</Space>;
  }
}

export default Logo;
