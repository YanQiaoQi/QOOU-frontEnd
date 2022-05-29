import Layout from '../../components/Layout/Layout';
import Overview from './components/Overview/Overview';
import Header from '../../myComponent/QoouHeader/QoouHeader';
import { useParams } from 'umi';
import styles from './index.less';

const { Content } = Layout;

function Dashboard({}) {
  const routeParams = useParams();

  return (
    <Layout>
      <Header {...routeParams} />

      <Content>
        <Overview />
      </Content>
    </Layout>
  );
}

export default Dashboard;
