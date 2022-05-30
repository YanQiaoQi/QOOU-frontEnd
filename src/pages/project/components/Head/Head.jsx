import { Wrapper, Space } from '../../../../components/Space/Space';
import Typography from '../../../../components/Typography';
import { Button, ButtonList } from '../../../../components/Button/Button';
import styles from './Head.less';

const { Title } = Typography;

function Head({ title, buttonsOptions }) {
  let buttons = null;
  if (buttonsOptions) {
    buttons = <ButtonList options={buttonsOptions} />;
  }
  let basicClassName = 'qoou-project-head';
  return (
    <Wrapper full>
      <Wrapper>
        <div className={styles[`${basicClassName}-container`]}>
          <Space justify="between" align="center">
            <Title level={1}>{title}</Title>
            {buttons}
          </Space>
        </div>
      </Wrapper>
    </Wrapper>
  );
}

export default Head;
