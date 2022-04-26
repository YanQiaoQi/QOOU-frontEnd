import styles from './PopUpWindow.less';

/**
 *
 * @param {*} param0
 *    @property {state} mode 弹框模式
 *    @property {setState} setMode 设置弹窗模式
 *    @property {array} inputTitles 请求数据
 * @returns
 */
function PopUpWindow({ mode, setMode, confirmCallback = null }) {
  let { isActive = false, info = [], type, title = '请输入以下信息' } = mode;

  let getReguestBody = (titleArr) => {
    let res = {};
    for (let i = 0; i < titleArr.length; i++) {
      res[titleArr[i].reqKey] = '';
    }
    return res;
  };
  let requestBody = getReguestBody(info);

  let setStyle = (event, key, value) => {
    event.target.style[key] = value;
  };
  let inputHandler = (type) => (e) => {
    switch (type) {
      case 'focus': {
        setStyle(e, 'borderColor', '#007fff');
        break;
      }
      case 'blur': {
        setStyle(e, 'borderColor', '#e9e9e9');
        let key = e.target.name;
        let value = e.target.value;
        requestBody[key] = value;
        console.log(requestBody);
        break;
      }
      default: {
        console.error('请设定');
      }
    }
  };
  let closeBtnHandler = (type) => (e) => {
    switch (type) {
      case 'click': {
        setMode({ isActive: false });
        break;
      }
      case 'mouseEnter': {
        setStyle(e, 'opacity', 0.4);
        break;
      }
      case 'mouseLeave': {
        setStyle(e, 'opacity', 1);
        break;
      }
      default:
        break;
    }
  };
  let inputGroups = info.map((item) => {
    let { title, reqKey, type, isFocus = false } = item;
    return (
      <div key={reqKey} className={styles.itemContainer}>
        <input
          className={styles.itemInput}
          type={type}
          autoComplete="off"
          name={reqKey}
          placeholder={title}
          onFocus={inputHandler('focus')}
          onBlur={inputHandler('blur')}
          autoFocus={isFocus}
        ></input>
      </div>
    );
  });

  return isActive ? (
    <div className={styles.activeContainer} onBlur={closeBtnHandler('click')}>
      <div className={styles.windowContainer}>
        <div className={styles.windowTopContainer}>
          <div className={styles.windowTitle}>{title}</div>
          <div
            className={styles.windowCloseBtn}
            onClick={closeBtnHandler('click')}
            onMouseEnter={closeBtnHandler('mouseEnter')}
            onMouseLeave={closeBtnHandler('mouseLeave')}
          ></div>
        </div>
        <div className={styles.windowInputContainer}>{inputGroups}</div>
        <div
          className={styles.windowBtnContainer}
          onClick={confirmCallback(type, requestBody)}
        >
          确认
        </div>
      </div>
    </div>
  ) : null;
}

export default PopUpWindow;
