import axios from 'axios';

import { ElLoading } from 'element-plus';
import type { ILoadingInstance } from 'node_modules/element-plus/es/components/loading/src/loading.type';

import type { AxiosInstance } from 'axios';
import type { REDRequestConfig, REDRequestInterceptors } from './type';

class REDRequest {
  instance: AxiosInstance; // 可以创建多个实例
  interceptors?: REDRequestInterceptors;
  loadingInstance?: ILoadingInstance;
  isShowLoading?: boolean = true; // 这个是由单个请求控制的showLoading

  constructor(config: REDRequestConfig) {
    console.log(config.isShowLoading);

    // 创建实例, 每个请求都可以对应一个实例
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    // 添加实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestIntercepterCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
    // 添加全局拦截器,每个请求都会有的拦截器. 只要你使用我这个库发送请求就会触发的拦截器.
    this.instance.interceptors.request.use(
      (config: REDRequestConfig) => {
        // 添加loading动画. 实例与单个请求都需要为true才显示loading
        console.log(config.isShowLoading);
        console.log(config.isShowLoading ?? true, ' ______________________');

        if ((config.isShowLoading ?? true) && this.isShowLoading) {
          this.loadingInstance = ElLoading.service({
            fullscreen: true,
            text: '拼命加载中...'
          });
        }

        // console.log('全局拦截器工作');
        return config;
      },
      (err) => {
        console.log(err);
        // console.log('全局拦截器工作');
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        this.loadingInstance?.close();
        // console.log(res, '全局拦截器工作');
        return res;
      },
      (err) => {
        console.log(err);
        // console.log('全局拦截器工作');
        return err;
      }
    );
  }

  request<T = any>(config: REDRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 没有设置默认为true
      this.isShowLoading = config.isShowLoading ?? true;

      // 是否有单个请求的拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors?.requestInterceptor(config);
      }

      // 真正发送请求的地方
      this.instance.request<any, T>(config).then(
        (res) => {
          console.log(res);
          // 判断是否传入响应拦截器(单个响应的拦截器)
          if (config.interceptors?.responseInterceptor) {
            // 执行这个拦截器的操作
            res = config.interceptors?.responseInterceptor(res);
          }
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  get<T = any>(config: REDRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }
  post<T = any>(config: REDRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }
  delete<T = any>(config: REDRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' });
  }
  patch<T = any>(config: REDRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' });
  }
}

export default REDRequest;

/* 使用文档
1. 创建实例，传入url，选择这个请求是否需要使用loading动画, 不写默认为true。
export default new REDRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  isShowLoading: true,
  interceptors: {
    requestInterceptor: (config) => {
      console.log(config, '请求 发送 拦截触发 --- 实例的拦截器');
      return config;
    },
    requestIntercepterCatch: (err) => {
      console.log(err, '请求 成功 拦截触发 --- 实例的拦截器');
      console.log(err);
    },
    responseInterceptor: (res) => {
      console.log(res, '响应 收到 拦截触发 --- 实例的拦截器');
    },
    responseInterceptorCatch: (err) => {
      console.log(err, '响应 拒绝 拦截触发 --- 实例的拦截器');
      console.log(err);
    }
  }
})

2. 正真发送请求，默认不写isShowLoading会自动显示， 需要关闭这个请求的loading，加上 isShowLoading: false.
      redRequest.request({
        url: '/get',
        method: 'get',
        interceptors: {
          requestInterceptor: (config) => {
            console.log('单个请求的拦截器触发');
            return config;
          }
        }
      });

      redRequest.request({
        url: '/post',
        method: 'post',
        isShowLoading: false,
        interceptors: {
          requestInterceptor: (config) => {
            console.log('单个请求的拦截器触发');
            return config;
          }
        }
      });
 */
