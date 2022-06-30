import { BASE_URL, TIME_OUT } from './request/config';
import REDRequest from './request';

export default new REDRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  isShowLoading: true,
  interceptors: {
    requestInterceptor: (config) => {
      // console.log(config, '请求 发送 拦截触发 --- 实例的拦截器');
      return config;
    },
    requestIntercepterCatch: (err) => {
      // console.log(err, '请求 成功 拦截触发 --- 实例的拦截器');
      return err;
    },
    responseInterceptor: (res) => {
      // console.log(res, '响应 收到 拦截触发 --- 实例的拦截器');
      return res;
    },
    responseInterceptorCatch: (err) => {
      // console.log(err, '响应 拒绝 拦截触发 --- 实例的拦截器');
      return err;
    }
  }
});
