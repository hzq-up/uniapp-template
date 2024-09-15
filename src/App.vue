<script>
import { TOKEN } from "@/utils/common";
export default {
  onLaunch() {
    uni.hideTabBar();

    const { statusBarHeight, platform } = uni.getSystemInfoSync();
    const { top, height } = uni.getMenuButtonBoundingClientRect();

    console.log(statusBarHeight, platform, top, height);
    // 状态栏高度
    uni.setStorageSync("statusBarHeight", statusBarHeight);
    // 胶囊按钮高度 一般是32 如果获取不到就使用32
    uni.setStorageSync("menuButtonHeight", height ? height : 32);

    // 判断胶囊按钮信息是否成功获取
    if (top && height) {
      const navigationBarHeight = (top - statusBarHeight) * 2 + height;
      // 导航栏高度
      uni.setStorageSync("navigationBarHeight", navigationBarHeight);
      console.log(
        statusBarHeight,
        platform,
        top,
        height,
        navigationBarHeight,
        111
      );
    } else {
      uni.setStorageSync(
        "navigationBarHeight",
        platform === "android" ? 48 : 40
      );
    }

  },
  onShow: function () {

    uni.hideTabBar();
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
/*每个页面公共css */
@import "uview-ui/index.scss";
</style>
