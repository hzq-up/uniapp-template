<template>
  <u-swiper height="212rpx" :keyName="url" :list="list" :circular="true" @change="e => current = e.current">
    <view slot="indicator" class="indicator">
      <view class="indicator__dot" v-for="(item, index) in list" :key="index"
        :class="[index === current && 'indicator__dot--active']">
      </view>
    </view>
  </u-swiper>
</template>
<script>
export default {
  props: {
    list: {
      default:[],
      type: Array
    },
    url: {
      default: 'url',
      type: String
    }
  },

  data() {
    return {
      current: 0
    }
  },
  computed: {},
  methods: {},
  watch: {},

  // 组件周期函数--监听组件挂载完毕
  mounted() { },
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
.indicator {
  @include flex(row);
  justify-content: center;

  // height: 212rpx;
  &__dot {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.35);
    margin: 0 8rpx;
    transition: background-color 0.3s;

    &--active {
      background-color: white;
    }
  }
}
</style>