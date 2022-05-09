import styles from './Input.less';

function Input({
  type = 'text',
  size = 'middle',
  placeholder,
  defaultValue,
  onChange,
}) {
  let getDistenceFromSize = (size, key) => {
    let typeOfData = (data) => {
      return Object.prototype.toString.call(data).slice(8, -1);
    };
    let sizeToDistence = {
      small: '24px',
      middle: '32px',
      large: '48px',
    };
    switch (typeOfData(size)) {
      case 'String': {
        return { [key]: sizeToDistence[size] };
      }
      case 'Number': {
        return { [key]: `${size}px` };
      }
      default: {
        console.error('参数错误，需要是字符串，数字');
      }
    }
  };
  let heightStyle = getDistenceFromSize(size, '--height');
  let inputClassName = styles['input'];
  return (
    <input
      className={inputClassName}
      type={type}
      placeholder={placeholder}
      value={defaultValue}
      style={heightStyle}
      onChange={onChange()}
    />
  );
}

export default Input;
