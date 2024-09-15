<template>
  <view class="container" :style="{
    '--top-nav-and-status-height':
      statusBarHeight + navigationBarHeight + 'px',
  }">

    <view class="top-box" :style="{ paddingTop: statusBarHeight + 'px' }">
      <!-- navbar -->
      <view class="nav-bar" :style="{ height: navigationBarHeight + 'px' }">
        <!-- <image class="nav-bar__icon" src="../../static/img/home_logo.png" mode="aspectFill"></image> -->
        <view class="nav-bar__title">weixin</view>
      </view>
    </view>
    <!-- 占位盒子 -->
    <view class="placeholder-box" :style="{ height: statusBarHeight + navigationBarHeight + 'px' }">
    </view>

    this page is home.

    <c-tabbar :activeIndex="0"></c-tabbar>
  </view>
</template>

<script>
import cTabbar from "@/components/cTabbar/cTabbar";
import home from '@/apis/home'
export default {
  components: {
    cTabbar
  },
  data() {
    return {
      navigationBarHeight: uni.getStorageSync("navigationBarHeight"),
      statusBarHeight: uni.getStorageSync("statusBarHeight"),
    };
  },
  computed: {

  },
  onLoad(options) {
    this.init();
  },
  methods: {
    async init() {

    },
  },
  onReachBottom() {

  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  padding-bottom: env(safe-area-inset-bottom);
  background-color: #f8f9fb;
  box-sizing: border-box;

  .top-box {
    position: fixed;
    // top: 0;
    height: var(--top-nav-and-status-height);
    width: 100%;
    opacity: 1;
    padding: 0 27rpx;
    box-sizing: border-box;
    z-index: 9999;

    .nav-bar {
      display: flex;
      align-items: center;
      justify-content: center;

      .nav-bar__icon {
        width: 199.4rpx;
        height: 80rpx;
      }

      &__title {
        font-size: 30rpx;
        font-weight: bold;
        margin-left: 15rpx;
        letter-spacing: 2rpx;
      }
    }
  }
}
</style>
