import { useState } from 'react';
import Radio from '../Radio/Radio';
import Select from '../Select/Select';
import Input from '../Input/Input';
import { getRequestBody } from '../../utils/common';
import { higherOrder } from '../../utils/common';
import styles from './PopupWindow.less';

let typeToComponent = {
  Input: Input,
  RadioGroup: Radio.Group,
  Select: Select,
};

function usePopupWindow(initMode) {
  const [mode, setMode] = useState(initMode);
  const PopupWindow = () => {
    if (!mode.isActive) return null;
    let { title = '请输入以下信息', options = [], onClick = () => {} } = mode;

    let closeWindow = higherOrder(setMode)({ isActive: false });
    let onChange = (obj, key) => (value) => (e) => {
      if (value !== undefined) {
        obj[key] = value;
      } else {
        if (e !== undefined) obj[key] = e.target.value;
      }
      console.log(obj);
    };

    let requestBody = getRequestBody(options, 'reqKey');

    let basicClassName = 'myDesign-popupwindow';

    let inputGroup = options.map((element) => {
      let { type, reqKey, label, options = [], props = {} } = element;
      let hasLabel = false;
      if (label !== undefined) {
        hasLabel = true;
      }
      const Component = typeToComponent[type];
      return (
        <div
          key={reqKey}
          className={styles[`${basicClassName}-input-item-container`]}
        >
          {hasLabel ? (
            <div className={styles[`${basicClassName}-input-item-label`]}>
              {label}
            </div>
          ) : null}
          <Component
            options={options}
            {...props}
            onChange={onChange(requestBody, reqKey)}
          />
        </div>
      );
    });

    return (
      <div className={styles[`${basicClassName}-window`]}>
        <div className={styles[`${basicClassName}-container`]}>
          <div className={styles[`${basicClassName}-top-container`]}>
            <div className={styles[`${basicClassName}-title`]}>{title}</div>
            <div
              className={styles[`${basicClassName}-closeBtn`]}
              onClick={closeWindow}
            ></div>
          </div>
          <div className={styles[`${basicClassName}-input-container`]}>
            {inputGroup}
          </div>
          <div
            className={styles[`${basicClassName}-confirmBtn`]}
            onClick={onClick}
          >
            确认
          </div>
        </div>
      </div>
    );
  };
  return [PopupWindow, mode, setMode];
}
export default usePopupWindow;
export { usePopupWindow };
