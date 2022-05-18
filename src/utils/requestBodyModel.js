export const standardBody = {
  user: {
    post: {
      login: {
        username: Number,
        token: String,
      },
    },
  },
};

export function standerdRequestBody(requestBody, type, method, path) {
  let copyRequestBody = JSON.parse(JSON.stringify(requestBody));
  let standardObj = standardBody[type][method][path];
  for (let key in copyRequestBody) {
    let value = requestBody[key];
    copyRequestBody[key] = standardObj[key](value);
  }
  return copyRequestBody;
}
