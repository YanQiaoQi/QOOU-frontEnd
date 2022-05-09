import Input from '../Input';
import styles from './Group.less';

function Group({ options }) {
  let inputGroups = options.map((element) => {
    const { options } = element;
    return <Input {...options} />;
  });
  return <>{inputGroups}</>;
}

export default Group;
