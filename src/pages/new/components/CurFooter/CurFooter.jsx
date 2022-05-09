import { Space, Spacer } from '../../../../components/Space/Space';
import styles from './CurFooter.less';

function CurFooter() {
  return (
    <Space direction="column" className={styles['curFooter-container']}>
      <div className={styles['curFooter-title']}>OPTIMIZED FOR</div>
      <Space>
        <div className={styles['curFooter-list-item']}>Golang</div>
      </Space>
    </Space>
  );
}

export default CurFooter;
