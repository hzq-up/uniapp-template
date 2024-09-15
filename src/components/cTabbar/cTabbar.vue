<template>
  <u-tabbar :value="activeIndex" activeColor="#e51e0b" @change="handleChange" :fixed="true" :placeholder="placeholder"
    :safeAreaInsetBottom="true">
    <u-tabbar-item text="首页">
      <image class="u-page__item__slot-icon" slot="active-icon" src="../../static/img/tabbar_home_active.png"></image>
      <image class="u-page__item__slot-icon" slot="inactive-icon" src="../../static/img/tabbar_home.png">
      </image>
    </u-tabbar-item>

    <u-tabbar-item text="转换记录">
      <image class="u-page__item__slot-icon" slot="active-icon" src="../../static/img/tabbar_records_active.png"></image>
      <image class="u-page__item__slot-icon" slot="inactive-icon" src="../../static/img/tabbar_records.png">
      </image>
    </u-tabbar-item>
  </u-tabbar>
</template>

<script>
export default {
  name: "cTabbar",
  props: {
    activeIndex: Number,
    placeholder: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      pathMapping: {
        0: '/pages/index/index',
        // 1: '/pages/rank/rank',
        1: '/pages/records/records'
      }
    }
  },
  computed: {},
  methods: {
    handleChange(index) {
      uni.switchTab({ url: this.pathMapping[index] })
    }
  },
  watch: {},

  // 组件周期函数--监听组件挂载完毕
  // mounted() {
  //   uni.hideTabBar()
  // },
  // 组件周期函数--监听组件数据更新之前
  beforeUpdate() { },
  // 组件周期函数--监听组件数据更新之后
  updated() { },
  // 组件周期函数--监听组件激活(显示)
  activated() { },
  // 组件周期函数--监听组件停用(隐藏)
  deactivated() { },
  // 组件周期函数--监听组件销毁之前
  beforeDestroy() { },
} 
</script>

<style lang="scss" scoped>
.u-page__item__slot-icon {
  height: 40rpx;
  width: 40rpx;
  padding-bottom: 3rpx;
}

.u-tabbar-item__text {
  font-size: 20rpx !important;
}
</style>