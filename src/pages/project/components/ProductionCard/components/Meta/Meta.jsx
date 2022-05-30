import Space from '../../../../../../components/Space/Space';
import Typography from '../../../../../../components/Typography';
import styles from './Meta.less';

const { Text } = Typography;

function Item({ label, data }) {
  return (
    <Space>
      <Text>{label}</Text>
      <Text>{data}</Text>
    </Space>
  );
}
function Meta({}) {
  return <div></div>;
}

export default Meta;
