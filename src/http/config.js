let apiUrl = "";

switch (process.env.VUE_APP_ENV) {
  case 'dev':
    apiUrl = 'http://127.0.0.1:8092'
    break;
  case 'test':
    apiUrl = 'http://127.0.0.1:8093'
    break;
  default:
    break;
}

const config = {
  get: function () {
    return {
      apiUrl: apiUrl
    }
  }
}

export default config;


