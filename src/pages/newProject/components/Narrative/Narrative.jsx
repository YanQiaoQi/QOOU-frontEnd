import Space from '../../../../components/Space/Space';
import styles from './Narrative.less';

function Narrative({}) {
  return (
    <Space direction="column">
      <div className={styles.narrative_title}>Lets build something new</div>
      <div className={styles.narrative_description}>
        To deploy a new Project, import an existing Git Repository or get
        started with one of our Templates.
      </div>
    </Space>
  );
}

export default Narrative;
