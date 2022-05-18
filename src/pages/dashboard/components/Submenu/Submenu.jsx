import Button from '../../../../components/Button/Button';
import styles from './Submenu.less';

function Submenu({ options }) {
  let buttons = options.map((element) => {
    const { href, content } = element;
    return (
      <Button type="text" href={href}>
        {content}
      </Button>
    );
  });
  return (
    <div>
      <div>{buttons}</div>
    </div>
  );
}

export default Submenu;
