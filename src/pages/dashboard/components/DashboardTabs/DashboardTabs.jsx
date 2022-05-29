import Tabs from '../../../../components/Tabs/Tabs';
import styles from './DashboardTabs.less';

const { TabPane } = Tabs;

function DashboardTabs({ children }) {
  return (
    <Tabs
      defaultActiveKey={activeKey}
      className={styles['dashboard-content']}
      navClassName={styles['dashboard-tabs-nav']}
    >
      <TabPane
        tab="Overview"
        key="overview"
        tabOnClick={tabOnClick('/dashboard')}
      ></TabPane>
      <TabPane
        tab="Settings"
        key="settings"
        tabOnClick={tabOnClick('/dashboard/settings')}
      ></TabPane>
    </Tabs>
  );
}

export default DashboardTabs;
