import request from 'umi-request';

const baseURL = 'http://172.22.24.251:8080/api/v1';

export const get = async (path, callback) => {
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
};

export const post = async (path, reqBody, callback) => {
  return request
    .post(`${baseURL}/${path}`, {
      data: reqBody,
      // headers: {
      //   Authorization: localStorage.getItem('token'),
      // },
    })
    .then((res) => {
      if (callback) {
        callback(res)();
      }
      return res;
    })
    .catch((err) => {
      return err;
    });
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
