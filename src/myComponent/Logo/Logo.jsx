import styles from './Logo.less';
import Space from '../../components/Space/Space';

function Logo({ type, info = '17px', action = null }) {
  let logo;
  switch (type) {
    case 'personalIcon': {
      logo = (
        <div
          className={styles.personalIcon}
          style={{ '--radius': info }}
          onClick={action}
        />
      );
      return logo;
    }
    case 'simple': {
      logo = (
        <div
          className={styles.simpleLogo}
          style={{ '--radius': info }}
          onClick={action}
        />
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
          <div className={styles.title}>SimpFun</div>
        </>
      );
      return <Space size={5}>{logo}</Space>;
  }
}

export default Logo;
