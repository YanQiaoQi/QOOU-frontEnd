import React from 'react';
import styles from './Space.less';

/**
 *
 * @param {string} direction
 * 		"row" default
 * 		"column"
 * @param {number|array|string} size
 * 		number : '16px'
 * 		string : "middle" default, "large", "small"
 * 		array : [ 10 , 6 ]
 * @returns
 *
 */
function Space({
  type = 'common',
  direction = 'row',
  size = 'middle',
  wrap = true,
  children,
}) {
  let getDistenceFromSize = (size) => {
    let typeOfData = (data) => {
      return Object.prototype.toString.call(data).slice(8, -1);
    };
    let sizeToDistence = {
      small: '8px',
      middle: '16px',
      large: '24px',
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
  let style = { gap: getDistenceFromSize(size) };
  if (wrap) {
    style.flexWrap = 'wrap';
  }

  switch (type) {
    case 'common': {
      return (
        <div
          className={styles['space_' + direction + '_container']}
          style={style}
        >
          {children}
        </div>
      );
    }
    case 'spacer': {
      return <div style={{ height: size }}></div>;
    }
    default:
      return children;
  }
}

export default Space;
