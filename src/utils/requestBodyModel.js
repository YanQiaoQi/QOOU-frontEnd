export const standardBody = {
  get: {
    user_info: {
      token: String,
    },
    get_games: {
      token: String,
    },
    get_game_servers: {
      game_id: Number,
      token: String,
    },
    get_game_versions: {
      game_server_id: Number,
      token: String,
    },
    get_instances: {
      token: String,
    },
  },
  post: {
    reg: {
      qq: Number,
      passwd: String,
    },
    login: {
      qq: Number,
      passwd: String,
      long: String,
    },
  },
};

export function standerdRequestBody(requestBody, method, path) {
  let copyRequestBody = JSON.parse(JSON.stringify(requestBody));
  let standardObj = standardBody[method][path];
  for (let key in copyRequestBody) {
    let value = requestBody[key];
    copyRequestBody[key] = standardObj[key](value);
  }
  return copyRequestBody;
}
