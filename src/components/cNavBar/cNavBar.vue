<template>
  <view class="nav-bar" :style="{ '--c-nav-bar-height': height + 'px' }">
    <view
      class="nav-bar__left-icon-wrap"
      v-if="showLeftIcon"
      @click="handleNavBack"
    >
      <image
        class="nav-bar__left-icon"
        src="@/static/icon/icon_arrow_left.png"
        mode="scaleToFill"
      />
    </view>
    <view class="nav-bar__title">{{ title }}</view>
  </view>
</template>

<script>
export default {
  name: "cNavBar",
  props: {
    height: Number,
    title: String,
    showLeftIcon: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    handleNavBack() {
      this.$emit("navBackTo");
    },
  },
  watch: {},

  // 组件周期函数--监听组件挂载完毕
  mounted() {},
  // 组件周期函数--监听组件数据更新之前
  beforeUpdate() {},
  // 组件周期函数--监听组件数据更新之后
  updated() {},
  // 组件周期函数--监听组件激活(显示)
  activated() {},
  // 组件周期函数--监听组件停用(隐藏)
  deactivated() {},
  // 组件周期函数--监听组件销毁之前
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
.nav-bar {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--c-nav-bar-height);
  box-sizing: border-box;
  &__left-icon-wrap {
    position: absolute;
    left: 23rpx;
    top: calc(var(--c-nav-bar-height - 46rpx) / 2);
    height: 46rpx;
    width: 46rpx;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #fcdcdd;
    opacity: 0.9;
    border-radius: 50%;
  }
  &__left-icon {
    width: 13rpx;
    height: 24rpx;
  }
  &__title {
    font-size: 36rpx;
    font-weight: 500;
    color: #ffffff;
  }
}
</style>
