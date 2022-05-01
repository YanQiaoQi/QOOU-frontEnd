export function combineClassNames(...classNames) {
  if (classNames.length === 0) {
    console.error('请输入参数');
  }
  let target = classNames[0];
  for (let i = 1; i < classNames.length; i++) {
    let className = classNames[i];
    if (typeof className === 'string') {
      target += ' ' + className;
    }
  }
  return target;
}
