import Item from './Item/Item';
import styles from './Descriptions.less';

function Descriptions({ children, title, column = 2 }) {
  let hasTitle = false;
  if (title) {
    hasTitle = true;
  }
  let basicClassName = 'myDesign-descriptions';
  let descriptionsClassName = styles[basicClassName];
  let childrenArr = children;
  if (!Array.isArray(children)) {
    childrenArr = [children];
  }
  let descriptionsTbody = [];
  let descriptionsTr = [];
  childrenArr.forEach((element, index) => {
    descriptionsTr.push(element);
    if (index % column === 1) {
      let curTr = (
        <tr
          key={element.props.label}
          className={styles[`${basicClassName}-row`]}
        >
          {descriptionsTr}
        </tr>
      );
      descriptionsTbody.push(curTr);
      descriptionsTr = [];
    }
  });
  return (
    <div className={descriptionsClassName}>
      {hasTitle ? (
        <div className={styles[`${basicClassName}-header`]}>
          <div className={styles[`${basicClassName}-title`]}>{title}</div>
        </div>
      ) : null}
      <div className={styles[`${basicClassName}-content`]}>
        <table>
          <tbody>{descriptionsTbody}</tbody>
        </table>
      </div>
    </div>
  );
}

Descriptions.Item = Item;

export default Descriptions;
