import Layout from '../../components/Layout/Layout';
import { Space, Wrapper } from '../../components/Space/Space';
import Tabs from '../../components/Tabs/Tabs';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { ButtonList } from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import MyAvatar from '../../myComponent/MyAvatar/MyAvatar';
import Projects from './components/Projects/Projects';
import Submenu from './components/Submenu/Submenu';
import styles from './index.less';

const { Header, Content } = Layout;
const { TabPane } = Tabs;

function Dashboard({}) {
  let buttonListSettings = [
    {
      content: 'Feedback',
      action: null,
      type: 'text',
    },
    {
      content: 'Support',
      action: null,
      type: 'text',
    },
  ];
  let submenuOptions = [{ href: '/', content: 'overview' }];
  let projectsOptions = [
    {
      projectName: 'go1',
      projectURL: 'qoou.vercel.app',
      projectCommit: 'initial commit created from qoou.vercel.app',
      projectLasttime: '14d ago',
    },
    {
      projectName: 'go2',
      projectURL: 'qoou.vercel.app',
      projectCommit: 'initial commit created from qoou.vercel.app',
      projectLasttime: '14d ago',
    },
    {
      projectName: 'go3',
      projectURL: 'qoou.vercel.app',
      projectCommit: 'initial commit created from qoou.vercel.app',
      projectLasttime: '14d ago',
    },
  ];
  return (
    <Layout>
      <Header type="common">
        <Breadcrumb>
          <Logo type="simple" info="32px" />
          <MyAvatar username="YanQiaoQi" />
        </Breadcrumb>

        <Space size={32}>
          <ButtonList options={buttonListSettings} />
          <MyAvatar />
        </Space>
      </Header>

      <Content>
        <Submenu options={submenuOptions} />
      </Content>
    </Layout>
  );
}

export default Dashboard;
