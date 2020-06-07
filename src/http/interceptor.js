import Config from '@/http/config';
import axios from 'axios';

const instance = axios.create({    //创建axios实例，在这里可以设置请求的默认配置
  timeout: 10 * 1000, // 设置超时时间10s
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  baseURL: Config.get().apiUrl   //根据自己配置的反向代理去设置不同环境的baeUrl
});

// request拦截器
instance.interceptors.request.use(
  config => {
    // 登录时，Token登录
    // const token =
    //   localStorage.getItem('token') || sessionStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = 'JWT ' + token;
    // }
    return config;
  },
  error => {
    // Do something with request error
    console.log("interceptor: ", error); // for debug
    return Promise.reject(error);
  }
);

// response 拦截
instance.interceptors.response.use(
  response => {
    const data = response.data;
    if (data.code === 2000) {
      return data.data;
    }
    if (data.code === 4040) {
      return Promise.reject({message: '网络中断'});
    }
    if (data.code === 4030) {
      return Promise.reject({message: '登录过期'});
    }
    return Promise.reject(data);
  },
  error => {
    error.message = '网络超时';
    return Promise.reject(error);
  }
);


export default instance;

