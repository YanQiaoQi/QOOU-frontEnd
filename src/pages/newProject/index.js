import { connect } from 'dva';
import Layout from '../../components/Layout/Layout';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Logo from '../../components/Logo/Logo';
import Space from '../../components/Space/Space';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import { ButtonList, MyButton } from '../../components/Button/Button';
import Narrative from './components/Narrative/Narrative';
import Cover from './components/Cover/Cover';

const { Header, Content } = Layout;
const { Item } = Breadcrumb;

function NewProject({}) {
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
    {
      title: 'Docs',
      action: null,
      type: 'common',
    },
  ];
  return (
    <Layout>
      <Header type="common">
        <Breadcrumb>
          <Logo type="simple" info="32px" />
          <PersonalInfo username="YanQiaoQi" radius="32px" />
        </Breadcrumb>
        <ButtonList ui={buttonListSettings} />
      </Header>
      <Content>
        <Cover />
        <Space type="spacer" size="48px" />
        <Narrative />
        
      </Content>
    </Layout>
  );
}

export default NewProject;
