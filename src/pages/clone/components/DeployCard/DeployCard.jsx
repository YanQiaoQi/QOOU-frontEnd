import { Space, Spacer } from '../../../../components/Space/Space';
import Card from '../../../../components/Card/Card';
import Text from '../../../../components/Text/Text';
import Divider from '../../../../components/Divider/Divider';
// import styles from './DeployCard.less';

function DeployCard({ isActive = false }) {
  let headStyle = isActive ? { '--color': '#000000' } : { '--color': '#999' };
  return (
    <Card
      type="import"
      title="Deploy"
      style={{ width: '640px' }}
      headStyle={headStyle}
    >
      <Divider />
      <Text style={{ margin: '24px 0', ...headStyle }}>
        Preparing Git Repository.
      </Text>
    </Card>
  );
}

export default DeployCard;
