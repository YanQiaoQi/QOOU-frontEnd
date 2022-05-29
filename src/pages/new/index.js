import { connect } from 'dva';
import Layout from '../../components/Layout/Layout';
import { Space, Spacer } from '../../components/Space/Space';
// Header
import Header from '../../myComponent/QoouHeader/QoouHeader';
// content
import Narrative from '../../myComponent/Narrative/Narrative';
import Cover from './components/Cover/Cover';
import CloneCard from './components/CloneCard/CloneCard';
// Footer
import CurFooter from './components/CurFooter/CurFooter';

const { Content, Footer } = Layout;

function NewPage({}) {
  let narrativeSettings = {
    title: 'Lets build something new',
    description:
      'To deploy a new Project, import an existing Git Repository or get started with one of our Templates.',
    style: { padding: '48px 0 72px 0' },
  };

  return (
    <Layout>
      <Header type="sticky" username="yanqiaoqi" />
      <Cover />
      <Content>
        <Narrative {...narrativeSettings} />
        <CloneCard />
        <Spacer size={96} />
      </Content>

      <Footer>
        <CurFooter />
      </Footer>
    </Layout>
  );
}

export default NewPage;
