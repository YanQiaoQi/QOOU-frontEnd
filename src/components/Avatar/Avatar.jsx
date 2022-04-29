import Space from '../Space/Space';
import styles from './Avatar.less';

/**
 *
 * @param {String} shape
 *      circle default
 *      square
 * @param {String|Number} size
 *      string:
 *          small
 *          middle
 *          large
 *      number:
 * @param {Function} icon
 * @param {Object} style
 * @returns
 */
function Avatar({
  shape = 'circle',
  size = 'middle',
  icon = null,
  iconStyle = {},
  action = null,
  usernameStyle = {},
  username = '',
}) {
  let getDataFromSize = (size) => {
    let typeOfData = (data) => {
      return Object.prototype.toString.call(data).slice(8, -1);
    };
    let sizeToDistence = {
      small: '16px',
      middle: '32px',
      large: '40px',
    };
    switch (typeOfData(size)) {
      case 'String': {
        return sizeToDistence[size];
      }
      case 'Number': {
        return `${size}px`;
      }
      case 'Array': {
        return `${size[0]}px ${size[1]}px`;
      }
    }
  };

  let num = getDataFromSize(size);
  let curIconStyle = { ...iconStyle, '--length': num };

  return (
    <Space size={parseInt(num) / 4}>
      <div
        className={styles['avatar_icon_' + shape]}
        style={curIconStyle}
        onClick={action}
      >
        {icon}
      </div>
      <span
        className={styles.avatar_username}
        style={usernameStyle}
        onClick={action}
      >
        {username}
      </span>
    </Space>
  );
}

export default Avatar;
