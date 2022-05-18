import { post, get } from '../utils/async';
import { changePathOfLocation, higherOrder } from '../utils/common';
import { standerdRequestBody } from '../utils/requestBodyModel';
const type = 'user';
export default {
  namespace: 'user',
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
    *getUserInfo({ payload }, { put, call }) {
      const data = yield call(get, 'user_info');
      console.log(data);
    },
    *signup({ payload }, { put, call }) {
      let requestBody = standerdRequestBody(payload, type, 'post', 'login');
      const data = yield call(post, 'signup', requestBody);
      console.log(data);
    },
    *login({ payload }, { put, call }) {
      let requestBody = standerdRequestBody(payload, type, 'post', 'login');
      const data = yield call(post, 'login', requestBody, {
        final: changePathOfLocation('new'),
      });
      console.log(data);
    },
  },
  subscriptions: {},
};
