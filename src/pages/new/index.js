import { connect } from 'dva';
import Layout from '../../components/Layout/Layout';
import Space from '../../components/Space/Space';
// Header
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Logo from '../../components/Logo/Logo';
import Avatar from '../../components/Avatar/Avatar';
import { ButtonList, Button } from '../../components/Button/Button';
// content
import Narrative from './components/Narrative/Narrative';
import Cover from './components/Cover/Cover';
import Card from '../../components/Card/Card';
import FrameworkCard from './components/FrameworkCard/FrameworkCard';
// Footer
import CurFooter from './components/CurFooter/CurFooter';

const { Header, Content, Footer } = Layout;

function NewPage({}) {
  let narrativeSettings = {
    title: 'Lets build something new',
    description:
      'To deploy a new Project, import an existing Git Repository or get started with one of our Templates.',
  };
  let buttonListSettings = [
    {
      title: 'Feedback',
      action: null,
      type: 'common',
    },
    {
      title: 'Support',
      action: null,
      type: 'common',
    },
  ];
  let importCardSetting = {
    type: 'import',
    title: 'Import Git Repository',
  };
  let cloneCardSettings = {
    type: 'clone',
    title: 'Clone Template',
  };
  let importButtonSettings = {
    title: 'Import Third-Party Git Repository →',
    style: {
      fontSize: '0.875rem',
      fontWeight: '500',
      lineHeight: '1.6',
    },
  };
  let cloneButtonSettings = {
    title: 'Browse All Templates →',
    style: {
      fontSize: '0.875rem',
      fontWeight: '500',
      lineHeight: '1.6',
    },
  };
  return (
    <Layout>
      <Header type="sticky">
        <Breadcrumb>
          <Logo type="simple" info="32px" />
          <Avatar
            shape="circle"
            size={32}
            username="YanQiaoQi"
            iconStyle={{
              backgroundImage: 'linear-gradient(90deg, #007cf0, #ff0080)',
            }}
          />
        </Breadcrumb>

        <Space size={32}>
          <ButtonList ui={buttonListSettings} />
          <Avatar
            shape="circle"
            size={32}
            iconStyle={{
              backgroundImage: 'linear-gradient(90deg, #007cf0, #ff0080)',
            }}
          />
        </Space>
      </Header>
      <Cover />
      <Content>
        <Space type="spacer" size={48} />
        <Narrative {...narrativeSettings} />
        <Space type="spacer" size={72} />
        <Space size={48}>
          {/* <Card {...importCardSetting}>
            <Space type="spacer" size="424px" />
            <MyButton {...importButtonSettings} />
          </Card> */}
          <Card {...cloneCardSettings}>
            <Space type="spacer" size={20} />
            <Space>
              <FrameworkCard title={'go'} />
              <FrameworkCard />
              <FrameworkCard />
              <FrameworkCard />
            </Space>
            <Space type="spacer" size={24} />
            <Button {...cloneButtonSettings} />
          </Card>
        </Space>
        <Space type="spacer" size={96} />
      </Content>
      <Footer>
        <CurFooter />
        <Space type="spacer" size={24} />
      </Footer>
    </Layout>
  );
}

export default NewPage;
