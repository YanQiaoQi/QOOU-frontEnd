import Layout from '../../components/Layout/Layout';
import { Space, Spacer } from '../../components/Space/Space';
import Divider from '../../components/Divider/Divider';
// Header
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import MyAvatar from '../../myComponent/MyAvatar/MyAvatar';
import Logo from '../../components/Logo/Logo';
import { ButtonList, Button } from '../../components/Button/Button';
// Content
import CreateCard from './components/CreateCard/CreateCard';
import DeployCard from './components/DeployCard/DeployCard';
import Narrative from '../new/components/Narrative/Narrative';
// Sider
import FrameworkCard from '../new/components/FrameworkCard/FrameworkCard';
import Steps from './components/Steps/Steps';

import { changePathOfLocation } from '../../utils/common';

const { Header, Content, Sider } = Layout;

function ClonePage({ location }) {
  let { template = 'go' } = location.query;
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
    type: 'text',
    style: {
      fontSize: '0.875rem',
      fontWeight: '500',
      lineHeight: '1.6',
      alignSelf: 'flex-start',
    },
  };
  let cloneButtonSettings = {
    title: 'Browse All Templates →',
    type: 'text',
    style: {
      fontSize: '0.875rem',
      fontWeight: '500',
      lineHeight: '1.6',
      alignSelf: 'flex-start',
    },
  };
  return (
    <Layout>
      <Header type="sticky">
        <Breadcrumb>
          <Logo type="simple" info="32px" />
          <MyAvatar username="yanqiaoqi" />
        </Breadcrumb>
        <Space size={32}>
          <ButtonList ButtonsSetting={buttonListSettings} />
          <MyAvatar />
        </Space>
      </Header>
      <Spacer size={72} />
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
        <Spacer size={48} />
        <Layout>
          <Sider>
            <FrameworkCard type="clone" title={template} />
            <Spacer size={48} />
            <Steps info={stepsInfo} />
            <Spacer size={40} />
            <Divider />
            <Spacer size={24} />
            <Button {...importButtonSettings}>
              {importButtonSettings.title}
            </Button>
            <Button {...cloneButtonSettings}>
              {cloneButtonSettings.title}
            </Button>
          </Sider>

          <Spacer size={72} />

          <Content>
            <Space direction="column" size={48}>
              <CreateCard isActive={true} />
              <DeployCard isActive={false} />
            </Space>
            <Spacer size={96} />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}

export default ClonePage;
