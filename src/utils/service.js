import Vue from "vue";
import qs from "qs";
import { TOKEN } from "./common";
let Fly = require("flyio/dist/npm/wx");
let service = new Fly();

service.config.timeout = 10000;
service.config.baseURL = process.env.VUE_APP_API_URL;
// service.config.baseURL = 'https://share.shaodian.top';

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  (request) => {
    // let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
    // let curRoute = routes[routes.length - 1].route
    const token = uni.getStorageSync(TOKEN);
    // if (!token && curRoute !== '/pages/login/login' && curRoute !== '/pages/index/index') {
    //   uni.navigateTo({ url: '/pages/login/login' })
    // }
    console.log(request)
    if (request.isLoading !== false) {
      uni.showLoading({
        title: '',
        mask: true
      })
    }

    request.headers["token"] = 'Bearer ' + token;

    if (request.method === "GET") {
      request.body = qs.stringify(request.body, { arrayFormat: "repeat" });
    }

    Vue.$log.debug("Handle request:", request);

    Vue.$log.debug("Request start time:", new Date());
    return request;
  },
  (error) => {
    uni.hideLoading();
    return Promise.reject(error);
  }
);

/**
 * 请求响应拦截器
 */
service.interceptors.response.use(
  (response) => {
    Vue.$log.debug("Handle response:", response);
    Vue.$log.debug("Request end time:", new Date());

    uni.hideLoading();

    if (response.status === 200) {
      const data = response.data;
      if (data.code === 200) {
        return data.data;
      } else if (data.code === 501) {
        uni.showToast({
          title: data.msg,
          icon: "none",
          duration: 2000,
          success: () => {
            uni.navigateTo({ url: '/pages/login/login' })
          }
        });
      } else {
        uni.showModal({
          title: '错误',
          showCancel: false,
          confirmText: "我知道了",
          content: data.msg || '系统错误，请联系管理员',
        });
        return data.data;
      }
    } else {
      uni.showModal({
        title: '错误',
        showCancel: false,
        confirmText: "我知道了",
        content: data.msg || '系统错误，请联系管理员',
      });
      return data.data;
    }
  },
  (error) => {
    const response = error.response;
    Vue.$log.debug("error:", error);

    uni.hideLoading();
    // const isMute = error.request.mute;

    // if (error.status === 0) {
    //   uni.showModal({
    //     title: "提示",
    //     showCancel: false,
    //     confirmText: "我知道了",
    //     content: "网络错误，请检查当前网络状况后重试",
    //   });
    //   return Promise.reject(response);
    // }

    // if (error.status === 1) {
    //   uni.showModal({
    //     title: "提示",
    //     showCancel: false,
    //     confirmText: "我知道了",
    //     content: "请求超时，请稍后重试",
    //   });
    //   return Promise.reject(response);
    // }

    // if (response && !isMute) {
    //   if (response.status === 500) {
    //     uni.showModal({
    //       title: "提示",
    //       showCancel: false,
    //       confirmText: "我知道了",
    //       content: "服务器异常，请联系管理员",
    //     });
    //   } else if (response.status === 401) {
    //     uni.showModal({
    //       title: "提示",
    //       showCancel: false,
    //       confirmText: "确定",
    //       content: "未配置 Api Access Key，请配置后重试",
    //     });
    //   } else {
    //     uni.showModal({
    //       title: "提示",
    //       showCancel: false,
    //       confirmText: "我知道了",
    //       content: response.data.message,
    //     });
    //   }
    // }
    uni.showModal({
      title: "提示",
      showCancel: false,
      confirmText: "我知道了",
      content: '网络错误，请检查当前网络状况后重试',
    });

    return Promise.reject(response);
  }
);

export default service;
