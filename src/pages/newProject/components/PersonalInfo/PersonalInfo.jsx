import Logo from '../../../../components/Logo/Logo';
import Space from '../../../../components/Space/Space';
import styles from './PersonalInfo.less';

function PersonalInfo({ username, radius }) {
  return (
    <Space size={8}>
      <div className={styles.personalInfo_icon}>
        <Logo type="personalIcon" info={radius} />
      </div>
      <div className={styles.personalInfo_username}>{username}</div>
    </Space>
  );
}

export default PersonalInfo;
