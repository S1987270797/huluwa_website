import type { AxiosRequestConfig } from 'axios';

export interface REDRequestInterceptors {
  // 拦截器传入配置，返回的也是这个请求的配置。
  requestInterceptor?: (config: REDRequestConfig) => REDRequestConfig;
  requestIntercepterCatch?: (err: any) => any;
  responseInterceptor?: (res: any) => any;
  responseInterceptorCatch?: (err: any) => any;
}

export interface REDRequestConfig extends AxiosRequestConfig {
  interceptors?: REDRequestInterceptors;
  isShowLoading?: boolean;
}
