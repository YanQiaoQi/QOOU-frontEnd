import styles from './Item.less';

function Item({ children, label }) {
  let basicClassName = 'meDesign-descriptions-item';
  let itemClassName = styles[basicClassName];
  return (
    <td className={itemClassName}>
      <div className={styles[`${basicClassName}-container`]}>
        <span className={styles[`${basicClassName}-label`]}>{label}</span>
        <span className={styles[`${basicClassName}-content`]}>{children}</span>
      </div>
    </td>
  );
}

export default Item;
