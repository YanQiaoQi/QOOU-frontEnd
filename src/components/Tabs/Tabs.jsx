import TabPane from './components/Tabpane/TabPane';
import Tab from './components/Tab/Tab';
import { useState } from 'react';
import styles from './Tabs.less';
import { combineClassNames } from '../../utils/common';

function Tabs({
  children,
  defaultActiveKey,
  tabPosition = 'top',
  className,
  navClassName,
  contentClassName,
  navStyle,
  contentStyle,
}) {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  let basicClassName = 'myDesign-tabs';
  let tabsClassName = styles[basicClassName];
  let navContainerClassName = styles[`${basicClassName}-nav-container`];
  let contentContainerClassName = styles[`${basicClassName}-content-container`];

  if (tabPosition !== undefined) {
    tabsClassName = combineClassNames(
      tabsClassName,
      styles[`${basicClassName}-${tabPosition}`],
    );
  }
  if (className !== undefined) {
    tabsClassName = combineClassNames(tabsClassName, className);
  }
  if (navClassName !== undefined) {
    navContainerClassName = combineClassNames(
      navContainerClassName,
      navClassName,
    );
  }
  if (contentClassName !== undefined) {
    contentContainerClassName = combineClassNames(
      contentContainerClassName,
      contentClassName,
    );
  }

  let childrenArr = children;
  if (children !== undefined && !Array.isArray(children)) {
    childrenArr = [children];
  }
  let nav = [];
  let tabpanes = [];
  childrenArr.forEach((element) => {
    let { tab, children, tabOnClick } = element.props;
    let { key } = element;
    let curTab = (
      <Tab
        key={key}
        value={key}
        activeKey={activeKey}
        setActiveKey={setActiveKey}
        onClick={tabOnClick}
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
      <div className={navContainerClassName} style={navStyle}>
        {nav}
      </div>
      <div className={contentContainerClassName} style={contentStyle}>
        <div className={styles[`${basicClassName}-content`]}>{tabpanes}</div>
      </div>
    </div>
  );
}

Tabs.TabPane = TabPane;

export default Tabs;
