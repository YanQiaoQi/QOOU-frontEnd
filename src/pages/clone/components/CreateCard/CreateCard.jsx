import { Space, Spacer } from '../../../../components/Space/Space';
import Card from '../../../../components/Card/Card';
import Text from '../../../../components/Text/Text';
import Divider from '../../../../components/Divider/Divider';
import CloneInput from '../CloneInput/CloneInput';
import Radio from '../../../../components/Radio/Radio';
import MyButton from '../../../../components/Button/Button';
// import styles from './CreateCard.less';

function CreateCard({ isActive = false }) {
  let headStyle = isActive ? { '--color': '#000000' } : { '--color': '#999' };
  return (
    <Card
      type="import"
      title="Create Git Repository"
      style={{ width: '640px' }}
      headStyle={headStyle}
    >
      <Divider />
      <Text style={{ margin: '24px 0', ...headStyle }}>
        To ensure you can easily update your project after deploying it, a Git
        repository must be created. Every push to that Git repository will be
        deployed automatically.
      </Text>
      <Space direction="row" size={8}>
        <CloneInput label="GIT SCOPE" inputHeight={40} inputWidth="240px" />
        <CloneInput
          label="REPOSITORY NAME"
          inputHeight={40}
          inputWidth="320px"
        />
      </Space>
      <Spacer size={24} />
      <Space type="space-between" style={{ padding: '0 4px' }}>
        <Radio checked={true}>Create private Git Repository</Radio>
        <MyButton type="primary" style={{ alignSelf: 'flex-end' }}>
          Create
        </MyButton>
      </Space>
    </Card>
  );
}

export default CreateCard;
