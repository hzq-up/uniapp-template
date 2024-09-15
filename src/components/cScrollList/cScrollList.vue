<template>
  <u-scroll-list :indicator="false">
    <view v-for="(item, index) in list" :key="index" >
      <image :src="item.thumb"></image>
    </view>
  </u-scroll-list>
</template>

<script>
export default {
  name: "cScrollList",
  props: {},
  data() {
    return {
      list: [{
        thumb: "https://cdn.uviewui.com/uview/goods/1.jpg"
      }, {
        thumb: "https://cdn.uviewui.com/uview/goods/2.jpg"
      }, {
        thumb: "https://cdn.uviewui.com/uview/goods/3.jpg"
      }, {
        thumb: "https://cdn.uviewui.com/uview/goods/4.jpg"
      }, {
        thumb: "https://cdn.uviewui.com/uview/goods/5.jpg"
      }]
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

<style lang="scss" scoped></style>