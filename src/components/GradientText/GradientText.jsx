import { combineClassNames } from '../../utils/common';
import styles from './GradientText.less';

function GradientText({ text, startColor, endColor, className, style }) {
  let basicClassName = 'myDesign-gradientText';
  let gradientTextClassName = styles[basicClassName];
  if (className !== undefined) {
    gradientTextClassName = combineClassNames(gradientTextClassName, className);
  }
  let gradientStyle = {
    '--startColor': startColor,
    '--endColor': endColor,
  };
  if (style !== undefined) {
    Object.assign(gradientStyle, style);
  }
  return (
    <span className={gradientTextClassName} style={gradientStyle}>
      {text}
    </span>
  );
}

export default GradientText;
