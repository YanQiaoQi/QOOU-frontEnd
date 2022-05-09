import styles from './Select.less';
let testOptions = [
  { value: '1', content: '1' },
  { value: '2', content: '2' },
  { value: '13', content: '13' },
];
function Option() {}
function Select({ children, options = testOptions, style, onChange }) {
  let hasChildren = false;
  let hasOptions = false;
  if (children !== undefined) {
    hasChildren = true;
  }
  if (options !== undefined) {
    hasOptions = true;
  }
  if (!hasChildren && !hasOptions) {
    console.error('请输入要展示的数据');
  }
  let basicClassName = 'myDesign-select';
  let selectClassName = styles[basicClassName];
  let optionGroup = options.map((element) => {
    const { value, content } = element;
    return (
      <option key={value} value={value}>
        {content}
      </option>
    );
  });
  return (
    <select className={selectClassName} style={style} onChange={onChange()}>
      {optionGroup}
    </select>
  );
}

export default Select;
