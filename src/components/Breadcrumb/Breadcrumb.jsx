import { Space } from '../Space/Space';
import styles from './Breadcrumb.less';

function Item({ children, href, onClick = () => {} }) {
  // 参数检测
  if (Array.isArray(children)) console.error('Item只能包裹一个组件');

  let basicClassName = 'myDesign-breadcrumb-item';
  let item = children;
  if (href !== undefined) {
    item = <a href={href}>{children}</a>;
  }

  return (
    <li className={styles[`${basicClassName}`]}>
      <span className={styles[`${basicClassName}-link`]} onClick={onClick}>
        {item}
      </span>
      <span className={styles[`${basicClassName}-separator`]}>/</span>
    </li>
  );
}

function Separator({}) {
  return <></>;
}

function Breadcrumb({ children, separator = '/' }) {
  let childrenArr = children;
  if (!Array.isArray(children)) {
    childrenArr = [children];
  }

  let basicClassName = 'myDesign-breadcrumb';

  return (
    <nav className={styles[`${basicClassName}`]}>
      <ol>{childrenArr}</ol>
    </nav>
  );
}

Breadcrumb.Item = Item;

export default Breadcrumb;
