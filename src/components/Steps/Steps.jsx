import { Space, Spacer } from '../Space/Space';
import styles from './Steps.less';

function Step({ content, isLast = false, isActive }) {
  let colorStyle = isActive ? { '--color': '#000' } : { '--color': '#eaeaea' };
  return (
    <div className={styles.step_container}>
      <div className={styles.step_prefix_container}>
        <div className={styles.step_prefix_circle} style={colorStyle}></div>
        {isLast ? null : <div className={styles.step_prefix_line}></div>}
      </div>
      <div className={styles.content} style={colorStyle}>
        {content}
      </div>
    </div>
  );
}

function Steps({ info }) {
  let steps = info.map((element) => {
    return <Step key={element.content} {...element} />;
  });
  return <div className={styles.steps_container}>{steps}</div>;
}

export default Steps;
