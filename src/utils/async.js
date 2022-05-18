import request from 'umi-request';
import { typeOf } from './common';
import { standerdRequestBody } from './requestBodyModel';

const baseURL = 'http://newtest.simpfun.cn/api';
let isTestLogic = true;

export const get = async (path, callback) => {
  if (!isTestLogic) {
    return request
      .get(`${baseURL}/${path}`)
      .then((res) => {
        // if (callback) {
        //   callback(res)();
        // }
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
};

export const post = async (
  path,
  reqBody,
  callbacks = { success: () => {}, fail: () => {}, final: () => {} },
) => {
  console.log(reqBody);
  const { success = () => {}, fail = () => {}, final = () => {} } = callbacks;
  if (!isTestLogic) {
    return request
      .post(`${baseURL}/${path}`, {
        data: reqBody,
      })
      .then((res) => {
        success(res);
        console.log(res);
        return res;
      })
      .catch((err) => {
        fail(err);
        return err;
      })
      .finally((info) => {
        final(info);
      });
  }
};

export const deleteField = async (path, id) => {
  return request
    .delete(`${baseURL}/${path}/${id}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const putField = async (path, id, reqBody) => {
  return request
    .put(`${baseURL}/${path}/${id}`, {
      data: reqBody,
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
