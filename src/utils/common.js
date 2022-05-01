export function combineClassNames(target, src) {
  if (typeof target !== 'string' || typeof src !== 'string') {
    console.error('参数必须是字符串');
  }
  return target + ' ' + src;
}
