import { Wrapper, Space, Spacer } from '../../../../components/Space/Space';
import Typography from '../../../../components/Typography';
import { ButtonList } from '../../../../components/Button/Button';
import Meta from './components/Meta/Meta';
import Screenshot from './components/Screenshot/Screenshot';
import styles from './ProductionCard.less';

const { Title, Paragraph } = Typography;

function ProductionCard({ buttonsOptions }) {
  let buttons = null;
  if (buttonsOptions) {
    buttons = <ButtonList options={buttonsOptions} />;
  }
  return (
    <div className={styles['container']}>
      <Wrapper full>
        <Wrapper>
          <Space justify="between" align="center">
            <Title level={3}>Production Deployment</Title>
            {buttons}
          </Space>
          <Paragraph>
            The deployment that is available to your visitors.
          </Paragraph>
          <Space>
            <Meta />
            <Screenshot />
          </Space>
        </Wrapper>
      </Wrapper>
    </div>
  );
}

export default ProductionCard;
