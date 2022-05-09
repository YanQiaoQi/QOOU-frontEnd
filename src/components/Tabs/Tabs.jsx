import TabPane from './components/Tabpane/TabPane';
import Tab from './components/Tab/Tab';
import { useState } from 'react';
import styles from './Tabs.less';
import { combineClassNames } from '../../utils/common';

function Tabs({ children, defaultActiveKey, tabPosition = 'top' }) {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  let basicClassName = 'myDesign-tabs';
  let tabsClassName = styles[basicClassName];
  let childrenArr = children;
  if (children !== undefined && !Array.isArray(children)) {
    childrenArr = [children];
  }
  if (tabPosition !== undefined) {
    tabsClassName = combineClassNames(
      tabsClassName,
      styles[`${basicClassName}-${tabPosition}`],
    );
  }
  let nav = [];
  let tabpanes = [];
  childrenArr.forEach((element) => {
    let { tab, children } = element.props;
    let { key } = element;
    let curTab = (
      <Tab
        key={key}
        value={key}
        activeKey={activeKey}
        setActiveKey={setActiveKey}
      >
        {tab}
      </Tab>
    );
    let curTabphane = (
      <TabPane
        key={key}
        value={key}
        activeKey={activeKey}
        setActiveKey={setActiveKey}
      >
        {children}
      </TabPane>
    );
    nav.push(curTab);
    tabpanes.push(curTabphane);
  });
  return (
    <div className={tabsClassName}>
      <div className={styles[`${basicClassName}-nav-container`]}>{nav}</div>
      <div className={styles[`${basicClassName}-content-container`]}>
        <div className={styles[`${basicClassName}-content`]}>{tabpanes}</div>
      </div>
    </div>
  );
}

Tabs.TabPane = TabPane;

export default Tabs;
