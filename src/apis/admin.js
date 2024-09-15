import service from "@/utils/service";

const admin = {};

const baseUrl = "/api";

/**
 * 手机号一键登录
 *
 * @returns []
 */
admin.weixinLogin = (params) => {
  return service.post(`${baseUrl}/user/weixinLogin`, params);
};


export default admin;
