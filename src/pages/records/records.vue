<template>
  <view class="container" :style="{
    '--navigation-bar-height': navigationBarHeight + 'px',
    '--my-status-bar-height': statusBarHeight + 'px',
  }">
    this page is records.

    <c-tabbar :activeIndex="1"></c-tabbar>
  </view>
</template>

<script>
import admin from "@/apis/admin";
import cTabbar from "@/components/cTabbar/cTabbar.vue";
import { USER_INFO } from "@/utils/common"
export default {
  components: {
    cTabbar,
  },
  data() {
    return {
      navigationBarHeight: uni.getStorageSync("navigationBarHeight"),
      statusBarHeight: uni.getStorageSync("statusBarHeight"),
      userInfo: {}
    };
  },
  computed: {
  },
  methods: {
    // async refreshUserInfo() {
    //   const data = await admin.baseInfo();
    //   uni.setStorageSync(USER_INFO, JSON.stringify(data))
    //   this.userInfo = data;
    // },
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {
  },
  // 页面周期函数--监听页面初次渲染完成
  onReady() { },
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {
    // console.log(this.navigationBarHeight,'1111111')
  },
  // 页面周期函数--监听页面隐藏
  onHide() { },
  // 页面周期函数--监听页面卸载
  onUnload() { },
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;

}
</style>
