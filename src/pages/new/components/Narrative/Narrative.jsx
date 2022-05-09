import { Space } from '../../../../components/Space/Space';
import styles from './Narrative.less';

function Narrative({ title = 'title', description = 'description', style }) {
  return (
    <Space direction="column" style={style}>
      <div className={styles.narrative_title}>{title}</div>
      <div className={styles.narrative_description}>{description}</div>
    </Space>
  );
}

export default Narrative;
