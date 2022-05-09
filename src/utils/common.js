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
export function typeOf(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
export function getCSSValueFromData(size, sizeObj) {
  switch (typeOf(size)) {
    case 'String': {
      return sizeObj[size];
    }
    case 'Number': {
      return `${size}px`;
    }
    case 'Array': {
      let rowGap = getCSSValueFromSize(size[0]);
      let columnGap = getCSSValueFromSize(size[1]);
      return `${rowGap}px ${columnGap}px`;
    }
  }
}
export function changePathOfLocation(path) {
  return () => {
    location.path = location.pathname = path;
  };
}

/**
 * 从元素为对象的数组中提取 requestBody
 *
 * @param {*} arr 元素为对象的数组
 * @param {*} reqKey 对象中代表着 requestBody key的属性名
 * @returns {object}
 */
export function getRequestBody(arr, reqKey) {
  let requestBody = {};
  arr.forEach((element) => {
    let key = element[reqKey];
    requestBody[key] = '';
  });
  return requestBody;
}

export let curify = (func, ...param) => {
  let argumentsArr = param || [];
  let paramLength = argumentsArr.legnth;
  if (paramLength >= func.length) {
    return func.apply(this, param);
  }
  return (...argus) => {
    let lastArgus = argumentsArr.slice(0);
    lastArgus.push(...argus);
    let curArgus = lastArgus;
    if (curArgus.length < func.length) {
      return curify.call(this, func, ...curArgus);
    } else {
      return func.apply(this, curArgus);
    }
  };
};

export let higherOrder =
  (func) =>
  (...param) =>
  () => {
    func(...param);
  };
