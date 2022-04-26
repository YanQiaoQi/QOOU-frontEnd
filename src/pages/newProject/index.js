import { connect } from 'dva';
import Layout from '../../components/Layout/Layout';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Logo from '../../components/Logo/Logo';
import Space from '../../components/Space/Space';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import { ButtonList } from '../../components/Button/Button';
import Narrative from './components/Narrative/Narrative';
import Cover from './components/Cover/Cover';
import Card from './components/Cards/Cards';
import FrameworkCard from './components/Cards/FrameworkCard/FrameworkCard';
import CurFooter from './components/CurFooter/CurFooter';

const { Header, Content, Footer } = Layout;
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
  let importCardSetting = {
    type: 'import',
    title: 'Import Git Repository',
    buttonTitle: 'Import Third-Party Git Repository →',
  };
  let cloneCardSettings = {
    type: 'clone',
    title: 'Clone Template',
    buttonTitle: 'Browse All Templates →',
  };
  return (
    <Layout>
      <Header type="sticky">
        <Breadcrumb>
          <Logo type="simple" info="32px" />
          <PersonalInfo username="YanQiaoQi" radius="32px" />
        </Breadcrumb>

        <Space size={32}>
          <ButtonList ui={buttonListSettings} />
          <Logo type="personalIcon" info="32px" />
        </Space>
      </Header>
      <Cover />
      <Content>
        <Space type="spacer" size="48px" />
        <Narrative />
        <Space type="spacer" size="72px" />
        <Space size={48}>
          <Card {...importCardSetting} />
          <Card {...cloneCardSettings}>
            <FrameworkCard title={'go'} />
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

export default NewProject;
