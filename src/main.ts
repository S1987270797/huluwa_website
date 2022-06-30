import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(ElementPlus, { size: 'small', zIndex: 3000 });
app.mount('#app');

console.log(process.env.NODE_ENV);
console.log(process.env.NODE_ENV == 'development');

// redRequest.request({
//   url: '/home/multidata',
//   method: 'get',
//   isShowLoading: false,
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单个请求的拦截器触发');
//       return config;
//     }
//   }
// });
