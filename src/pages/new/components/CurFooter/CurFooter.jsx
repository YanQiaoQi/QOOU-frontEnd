import Space from '../../../../components/Space/Space';
import styles from './CurFooter.less';

function CurFooter() {
  return (
    <Space direction="column">
      <div className={styles.curFooter_title}>OPTIMIZED FOR</div>
      <Space>
        <div className={styles.curFooter_list_item}>Golang</div>
      </Space>
    </Space>
  );
}

export default CurFooter;
