import styles from './Input.less';

function Input({ size = 'middle', placeholder = '', prefix, value }) {
  if (prefix) {
    return (
      <span className={wrapperClassName}>
        <input
          className={inputClassName}
          type="text"
          placeholder={placeholder}
        />
      </span>
    );
  }
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
  let wrapperClassName = styles['input_wrapper_' + size];
  let inputClassName = styles['input'];
  return (
    <input
      className={inputClassName}
      type="text"
      placeholder={placeholder}
      value={value}
      style={heightStyle}
    />
  );
}

export default Input;
