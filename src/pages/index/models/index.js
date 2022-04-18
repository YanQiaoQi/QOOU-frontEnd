
import { post } from '../../../utils/async';

export default {
  namespace: 'index',
  state: {
    name: '1',
  },
  reducers: {
    get(state, { payload }) {
      let stateCopy = JSON.parse(JSON.stringify(state));
      Object.assign(stateCopy, payload);
      return stateCopy;
    },
  },
  effects: {
    *register({ payload }, { put, call }) {
      const data = yield call(post, 'register', payload);
      console.log(data);
    },
    *createRepo({ payload }, { put, call }) {
      const data = yield call(post, 'repo', payload);
      console.log(data);
    },
    *deploy({ payload }, { put, call }) {
      const data = yield call(post, 'deploy', payload);
      console.log(data);
    },
    // *asyncGet({ payload }, { put, call }) {
    //   const { path } = payload;
    //   // console.log('进入');
    //   const data = yield call(get, path);
    //   // console.log(data);
    //   if (data) {
    //     yield put({
    //       type: 'get',
    //       payload: {
    //         type: path,
    //         data: data,
    //         msg: payload['msg'],
    //       },
    //     });
    //   }
    // },
    // *asyncPost({ payload }, { put, call }) {
    //   const { path, reqBody, successCallback } = payload;
    //   const res = yield call(post, path, reqBody, successCallback);
    //   console.log(res);
    //   if (res['code'] === 200) {
    //     if (path !== 'article-content') {
    //       yield put({
    //         type: 'asyncGet',
    //         payload: { path, msg: res['msg'] },
    //       });
    //     }
    //   }
    // },
    // *asyncDelete({ payload }, { put, call }) {
    //   const { path, id } = payload;
    //   const res = yield call(deleteField, path, id);
    //   if (res['code'] === 200) {
    //     yield put({
    //       type: 'asyncGet',
    //       payload: { path, msg: res['msg'] },
    //     });
    //   }
    // },
    // *asyncPut({ payload }, { put, call }) {
    //   const { dbType, id, reqBody } = payload;
    //   const res = yield call(putField, dbType, id, reqBody);
    //   yield put({
    //     type: 'asyncGet',
    //     payload: dbType,
    //   });
    //   if (res['code'] === 200) {
    //     alert('修改成功');
    //   } else {
    //     alert('修改失败', res.msg);
    //   }
    // },
  },
  subscriptions: {},
};
