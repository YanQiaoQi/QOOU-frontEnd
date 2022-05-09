import { connect } from 'dva';
import Layout from '../../components/Layout/Layout';
import { Space, Spacer } from '../../components/Space/Space';
// Header
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Logo from '../../components/Logo/Logo';
import MyAvatar from '../../myComponent/MyAvatar/MyAvatar';
import { ButtonList, Button } from '../../components/Button/Button';
// content
import Narrative from './components/Narrative/Narrative';
import Cover from './components/Cover/Cover';
import CloneCard from './components/CloneCard/CloneCard';
// Footer
import CurFooter from './components/CurFooter/CurFooter';

const { Header, Content, Footer } = Layout;

function NewPage({}) {
  let narrativeSettings = {
    title: 'Lets build something new',
    description:
      'To deploy a new Project, import an existing Git Repository or get started with one of our Templates.',
    style: { padding: '48px 0 72px 0' },
  };
  
  let buttonListSettings = [
    {
      title: 'Feedback',
      action: null,
      type: 'text',
    },
    {
      title: 'Support',
      action: null,
      type: 'text',
    },
  ];

  return (
    <Layout>
      <Header type="sticky">
        <Breadcrumb>
          <Logo type="simple" info="32px" />
          <MyAvatar username="YanQiaoQi" />
        </Breadcrumb>

        <Space size={32}>
          <ButtonList ButtonsSetting={buttonListSettings} />
          <MyAvatar />
        </Space>
      </Header>

      <Cover />

      <Content>
        <Narrative {...narrativeSettings} />
        <Space size={48}>
          <CloneCard />
        </Space>
        <Spacer size={96} />
      </Content>

      <Footer>
        <CurFooter />
      </Footer>
    </Layout>
  );
}

export default NewPage;
