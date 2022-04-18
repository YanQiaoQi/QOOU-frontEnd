import styles from './Introduction.less';

function GradientText({ text, startColor, endColor, animation, index }) {
  let gradientTextClassName = 'gradientText' + index;
  let commonTextClassName = 'commonText' + index;
  return (
    <span className={styles.textContainer}>
      <span
        className={styles[gradientTextClassName]}
        style={{
          '--start': startColor,
          '--end': endColor,
        }}
      >
        {text}
      </span>
      <span className={styles[commonTextClassName]}>{text}</span>
    </span>
  );
}

function Introduction({
  texts = [
    { text: 'Develop.', startColor: '#007cf0', endColor: '#00dfd8' },
    { text: 'Preview.', startColor: '#7928CA', endColor: '#FF0080' },
    { text: 'Ship.', startColor: '#FF4D4D', endColor: '#F9CB28' },
  ],
}) {
  let textList = texts.map((item, index) => {
    item.index = index;
    return <GradientText key={item.text} {...item} />;
  });
  return <div className={styles.intro_container}>{textList}</div>;
}

export default Introduction;
