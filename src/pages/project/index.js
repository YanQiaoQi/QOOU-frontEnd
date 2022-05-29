import { useParams } from 'umi';
import Layout from '../../components/Layout/Layout';
import Header from '../../myComponent/QoouHeader/QoouHeader';

function Project({}) {
  const routeParams = useParams();

  return (
    <Layout>
      <Header {...routeParams} />
      
    </Layout>
  );
}

export default Project;
