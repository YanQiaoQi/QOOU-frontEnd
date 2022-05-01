import Layout from '../../components/Layout/Layout';
import Space from '../../components/Space/Space';
import MyAvatar from '../../myComponent/MyAvatar/MyAvatar';
import Divider from '../../myComponent/Divider/Divider';
// Header
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Avatar from '../../components/Avatar/Avatar';
import Logo from '../../components/Logo/Logo';
import { ButtonList, Button } from '../../components/Button/Button';
// Content
import CreateCard from './components/CreateCard/CreateCard';
import DeployCard from './components/DeployCard/DeployCard';
import Narrative from '../new/components/Narrative/Narrative';
import Radio from '../../components/Radio/Radio';
// Sider
import FrameworkCard from '../new/components/FrameworkCard/FrameworkCard';
import Steps from './components/Steps/Steps';
// import Card from '../../components/Card/Card';
// import Text from '../../components/Text/Text';

const { Header, Content, Sider } = Layout;

let description = {
  go: 'A Nuxt.js app, bootstrapped with create-nuxt-app.',
};
function changePathOfLocation(path) {
  
  location.path = location.pathname = path;

  console.log(location);
}
function ClonePage({ location, history }) {
  console.log(history);

  let { template } = location.query;
  // Header
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
  // Content
  let narrativeSettings = {
    title: "You're almost done.",
    description:
      'Please follow the steps to configure your Project and deploy it.',
  };
  let stepsInfo = [
    { content: 'Create Git Repository', isLast: false, isActive: true },
    { content: 'Deploy', isLast: true, isActive: false },
  ];
  let importButtonSettings = {
    title: 'Import a different Git Repository →',
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
          <MyAvatar hasUsername={true} />
        </Breadcrumb>
        <Space size={32}>
          <ButtonList ui={buttonListSettings} />
          <MyAvatar hasUsername={false} />
        </Space>
      </Header>
      <Space type="spacer" size={72} />
      <Content>
        <Button
          type="link"
          onClick={() => {
            changePathOfLocation('/new');
          }}
        >
          back
        </Button>

        <Narrative {...narrativeSettings} />
        <Space type="spacer" size={48} />
        <Layout>
          <Sider>
            <FrameworkCard
              type="clone"
              title={template}
              description={description[template]}
            />
            <Space type="spacer" size={48} />
            <Steps info={stepsInfo} />
            <Space type="spacer" size={40} />
            <Divider />
            <Space type="spacer" size={24} />
            <Button {...importButtonSettings} />
            <Button {...cloneButtonSettings} />
          </Sider>

          <Space type="spacer" size={144} />

          <Content>
            <Space direction="column" size={48}>
              <CreateCard isActive={true} />
              <DeployCard isActive={false} />
            </Space>
            <Space type="spacer" size={96} />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}

export default ClonePage;
