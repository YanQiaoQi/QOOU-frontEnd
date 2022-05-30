import { useParams } from 'umi';
import Layout from '../../components/Layout/Layout';
import Header from '../../myComponent/QoouHeader/QoouHeader';
import ContentHead from './components/Head/Head';
import ProductionCard from './components/ProductionCard/ProductionCard';

const { Content } = Layout;

function Project({}) {
  const { username, projectName } = useParams();
  let contentHeadButtonsOptions = [
    {
      content: 'View Git Repository',
      type: 'common',
    },
    {
      content: 'View',
      type: 'primary',
    },
  ];
  let ProductionCardButtonsOptions = [
    {
      content: 'View Build Logs',
      type: 'common',
    },
    {
      content: 'View Domains',
      type: 'common',
    },
  ];

  return (
    <Layout>
      <Header username={username} projectName={projectName} />
      <Content>
        <ContentHead
          title={projectName}
          buttonsOptions={contentHeadButtonsOptions}
        />
        <ProductionCard buttonsOptions={ProductionCardButtonsOptions} />
      </Content>
    </Layout>
  );
}

export default Project;
