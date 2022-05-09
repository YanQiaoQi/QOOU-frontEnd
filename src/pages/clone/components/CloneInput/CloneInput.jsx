import {Space,Spacer} from '../../../../components/Space/Space';
import Input from '../../../../components/Input/Input';
import Text from '../../../../components/Text/Text';
import styles from './CloneInput.less';

function CloneInput({ label, placeholder, inputHeight, inputWidth, value }) {
  return (
    <Space direction="column" size={8}>
      <Text className={styles.cloneInput_label}>{label}</Text>
      <div style={{ width: inputWidth }}>
        <Input placeholder={placeholder} size={inputHeight} value={value} />
      </div>
    </Space>
  );
}

export default CloneInput;
