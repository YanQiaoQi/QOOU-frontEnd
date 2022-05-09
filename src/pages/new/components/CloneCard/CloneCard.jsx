import Card from '../../../../components/Card/Card';
import FrameworkCard from '../FrameworkCard/FrameworkCard';
import { Space, Spacer } from '../../../../components/Space/Space';
import Button from '../../../../components/Button/Button';
// import styles from './CloneCard.less';

let cloneCardSettings = {
  type: 'clone',
  title: 'Clone Template',
};

let cloneButtonSettings = {
  title: 'Browse All Templates →',
  style: {
    fontSize: '0.875rem',
    fontWeight: '500',
    lineHeight: '1.6',
  },
  type: 'text',
};

function CloneCard({}) {
  return (
    <Card {...cloneCardSettings}>
      <Spacer size={20} />
      <Space wrap>
        <FrameworkCard title={'go'} />
        <FrameworkCard />
        <FrameworkCard />
        <FrameworkCard />
      </Space>
      <Spacer size={24} />
      <Button {...cloneButtonSettings}>{cloneButtonSettings.title}</Button>
    </Card>
  );
}

export default CloneCard;
