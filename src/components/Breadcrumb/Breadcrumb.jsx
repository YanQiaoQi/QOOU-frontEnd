import Space from '../Space/Space';
import Logo from '../Logo/Logo';
import styles from './Breadcrumb.less';

function Item({ children, type = 'common' }) {
  // 参数检测
  if (Array.isArray(children)) console.error('Item只能包裹一个组件');

  switch (type) {
    case 'common': {
      break;
    }
    case 'common': {
      break;
    }
    case 'common': {
      break;
    }
    case 'common': {
      break;
    }
    default:
      break;
  }
  return <div>{children}</div>;
}
function Breadcrumb({ children = [] }) {
  let curChildren = children;
  if (!Array.isArray(children)) curChildren = [children];
  let target = curChildren.map((item, index) => {
    let curClassName =
      index === curChildren.length - 1
        ? 'breadcrumb_last_separator'
        : 'breadcrumb_separator';
    return (
      <Space key={index} size={8}>
        {item}
        <div className={styles[curClassName]}>{'/'}</div>
      </Space>
    );
  });
  return <Space size={8}>{target}</Space>;
}

Breadcrumb.Item = Item;

export default Breadcrumb;
