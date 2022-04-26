import { connect } from 'dva';
import Layout from '../../components/Layout/Layout';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Logo from '../../components/Logo/Logo';
import Space from '../../components/Space/Space';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import { ButtonList } from '../../components/Button/Button';
import Narrative from './components/Narrative/Narrative';
import Cover from './components/Cover/Cover';
import Cards from './components/Cards/Cards';

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
  ];
  let cardsSettings = [
    {
      type: 'import',
      title: 'Import Git Repository',
      buttonTitle: 'Import Third-Party Git Repository →',
    },
    {
      type: 'clone',
      title: 'Clone Template',
      buttonTitle: 'Browse All Templates →',
    },
  ];
  return (
    <Layout>
      <Header type="common">
        <Breadcrumb>
          <Logo type="simple" info="32px" />
          <PersonalInfo username="YanQiaoQi" radius="32px" />
        </Breadcrumb>

        <Space size={32}>
          <ButtonList ui={buttonListSettings} />
          <Logo type="personalIcon" info="32px" />
        </Space>

      </Header>
      <Content>
        <Cover />
        <Space type="spacer" size="48px" />
        <Narrative />
        <Space type="spacer" size="72px" />
        <Cards ui={cardsSettings} />
      </Content>
    </Layout>
  );
}

export default NewProject;
