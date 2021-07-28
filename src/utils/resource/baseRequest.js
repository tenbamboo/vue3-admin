import axios from 'axios';
// import { getStorage, removeStorage } from '@utils/cain.js'

const baseRequest = axios.create({});

function errorHandle(err) {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误';
        break;

      case 401:
        err.message = '未授权，请登录';
        break;

      case 403:
        err.message = '拒绝访问';
        break;

      case 404:
        err.message = `请求地址出错: ${err.response.config.url}`;
        break;

      case 408:
        err.message = '请求超时';
        break;

      case 500:
        err.message = '服务器内部错误';
        break;

      case 501:
        err.message = '服务未实现';
        break;

      case 502:
        err.message = '网关错误';
        break;

      case 503:
        err.message = '服务不可用';
        break;

      case 504:
        err.message = '网关超时';
        break;

      case 505:
        err.message = 'HTTP版本不受支持';
        break;

      default:
    }
  }
}

baseRequest.defaults.baseURL = import.meta.env.VITE_APP_REQUEST_BASE_URL;
baseRequest.defaults.headers.post['Content-Type'] = 'application/json';
baseRequest.defaults.headers.get['Content-Type'] = 'application/json';
baseRequest.defaults.timeout = 20000;
baseRequest.interceptors.request.use((config) => config);
// config.headers.Authorization = getStorage('TOKEN');
// config.headers.SSOMOATOKEN = getStorage('SSOMOATOKEN');
// config.headers.SSOMOAETOKEN = getStorage('SSOMOAETOKEN');
// config.headers.HFXTOKEN = getStorage('HFXTOKEN');

baseRequest.interceptors.response.use((response) => response.data,
  // if (typeof response.data === 'string' && response.data.indexOf('抱歉!用户不存在或访问失效，请重新访问') !== -1) {
  //   // removeStorage('TOKEN');
  //   window.location.reload();
  // }

  //   responseAspect(response);
  //   if (response.data.errorCode === '0' || response.data.errorCode === '200001') {

  //   } if (process.env.NODE_ENV === 'dev') {
  //     // Toast({
  //     //   message: `出错啦，请重试！(code:${response.data.errorCode}   desc:${response.data.errorMsg} )`,
  //     //   iconClass: 'fa fa-times',
  //     // });
  //     return Promise.reject(response.data);
  //   }
  //   return Promise.reject(response.data);
  (err) => { // 这里是返回状态码不为200时候的错误处理
    errorHandle(err);
    return Promise.reject(err);
  });

export default baseRequest;
