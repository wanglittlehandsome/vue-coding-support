import instance from '@/http/interceptor';
import qs from 'qs';

const server = {

  get: function (baseUrl, url, params) {
    return getRequest('get', baseUrl, url, params);
  },
  post: function (baseUrl, url, params) {
    return getRequest('post', baseUrl, url, params);
  },
  put: function (baseUrl, url, params) {
    return getRequest('put', baseUrl, url, params);
  },
  delete: function (baseUrl, url, params) {
    return getRequest('delete', baseUrl, url, params);
  }
}

function getRequest(method, baseUrl, url, params) {
  return sortRequest(method, baseUrl, url, params);
}

function sortRequest(method, baseUrl, url, params) {
  if (!params) {
    params = url;
    url = baseUrl;
    baseUrl = '';
  }
  let headers = {};
  return request(getConfig(method, baseUrl, url, params, headers));
}


function getConfig(method, baseUrl, url, params, headers) {
  let config = {};
  config.method = method;
  if (baseUrl != '' && baseUrl != 'undefined') {
    config.baseURL = baseUrl;
  }
  if (method == 'post' || method == 'put') {
    config.data = qs.stringify(params);
  } else {
    config.params = params;
  }
  config.url = url;
  config.headers = headers;
  console.log(JSON.stringify(config));
  return config;
}

function request(config) {
  return new Promise((resolve, reject) => {
    instance.request(config
      /*{
      url: url,
      method: method,
      params: params,
      data: qs.stringify(data),
      headers: headers,
    /!*  cancelToken: new CancelToken(function executor(cancel) {
        Vue.$httpRequestList.push(cancel) //存储cancle
      })*!/
    }*/).then(function (response) {
      resolve(response); // 没有返reponse.data是因为response拦截里处理了
    })
      .catch(function (error) {
        reject(error);
      });
  });
}


export default server;
