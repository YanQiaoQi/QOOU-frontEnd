import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import styles from './Group.less';

function Group({
  children,
  defaultValue,
  buttonType = 'outline',
  size,
  options,
  value,
  onChange,
}) {
  const [checkedValue, setCheckedValue] = useState(defaultValue);
  useEffect(onChange(checkedValue), [checkedValue]);

  let hasChildren = false;
  let hasOptions = false;
  if (children) {
    hasChildren = true;
  }
  if (options) {
    hasOptions = true;
  }
  if (!hasOptions && hasChildren && !Array.isArray(children)) {
    return <>{children}</>;
  }

  let basicClassName = 'myDesign-radio-group';
  let radioGroupClassName = styles[basicClassName];
  let radioGroup = hasOptions
    ? options.map((element) => {
        const { value, content } = element;
        return (
          <Button
            key={value}
            value={value}
            checkedValue={checkedValue}
            setCheckedValue={setCheckedValue}
          >
            {content}
          </Button>
        );
      })
    : children.map((element) => {
        const { value } = element.props;
        return (
          <Button
            key={value}
            {...element.props}
            checkedValue={checkedValue}
            setCheckedValue={setCheckedValue}
          />
        );
      });
  return <div className={radioGroupClassName}>{radioGroup}</div>;
}

export default Group;
