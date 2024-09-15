<template>
  <div class="container">
    <!-- <view style="height: 47rpx;font-size: 51rpx;font-family: Douyin Sans;font-weight: bold;color: #0C343C;margin-top: 31rpx;">抖轻松</view> -->
    <u-button @click="handleGetPhone" type="primary" color="#FD465C" :customStyle="{
      width: '604rpx',
      height: '90rpx',
      background: 'linear-gradient(-33deg, #FD3E5D, #FF6A55)',
      border: '1px solid #F5D5D2',
      marginTop: '200rpx',
      borderRadius: '100rpx'
    }">手机号一键登录</u-button>
    <view class="a-flex-row-center u-font-26 a-pb40" style="padding-top: 30px;">
      <!-- <u-checkbox-group size='25rpx' > -->
        <u-checkbox :checked="isChecked" active-color='#000' ></u-checkbox>
      <!-- </u-checkbox-group> -->
      登录及代表同意
      <navigator url="##"
        @click="openProtocol('https://msxp.oss-cn-beijing.aliyuncs.com/1702458026443_1eae59a1wechat_pdf2.pdf')"
        class="a-color-blue">《用户协议》</navigator>
      和
      <navigator url="##"
        @click="openProtocol('https://msxp.oss-cn-beijing.aliyuncs.com/1702457974861_06f6e9d5wechat_pdf1.pdf')"
        class="a-color-blue">《隐私政策》</navigator>
    </view>


    <u-popup :show="isShow" mode="center" :safeAreaInsetBottom="false">

      <view class="u-popup-layout">
        <view class="p-title">隐私协议</view>
        <view class="tip-box" style="font-size: 26rpx;">
          是否同意xxx协议
          <navigator url="##" @click="openProtocol('https://xxx.pdf')" class="a-color-blue">《用户协议》</navigator>
          <navigator url="##" @click="openProtocol('https://xxx.pdf')" class="a-color-blue">《隐私政策》</navigator>
        </view>
        <view class="foot a-flex-row-between">
          <button class="u-reset-button u-font-32 auth-btn re" @click="isShow = false">不同意</button>
          <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" class="u-reset-button u-font-32 auth-btn"
            style="color:#0074d8">同意</button>
        </view>
      </view>
    </u-popup>
  </div>
</template>

<script>
import admin from "@/apis/admin";
import { USER_INFO, TOKEN } from "@/utils/common";
export default {
  components: {},
  data() {
    return {
      isChecked: false,
      isShow: false
    };
  },
  computed: {},
  methods: {
    handleGetPhone() {
      // this.$tools.showToast('请先阅读并勾选《用户协议》和《隐私政策》','none',3000)
      this.isShow = true
    },
    getPhoneNumber(e) {
      const { encryptedData, iv } = e.detail;
      this.isChecked = true
      uni.login({
        provider: "weixin",
        success: (result) => {
          admin
            .weixinLogin({ encryptedData, iv, code: result.code })
            .then(
              async (res) => {
                console.log(res)
                uni.setStorageSync(TOKEN, res.token);
                const data = await admin.baseInfo();
                uni.setStorageSync(USER_INFO, JSON.stringify(data))
                uni.switchTab({ url: "/pages/index/index" });
              }
            )
            .finally(() => { });
        },
        fail: (error) => { },
      });
      // console.log(e, encryptedData, iv, code);
    },
    openProtocol(filePath) {
      uni.downloadFile({
        url: filePath,
        success: ({ tempFilePath, statusCode }) => {
          uni.openDocument({
            filePath: tempFilePath,
            success: (res) => {
              console.log('打开文档成功');
            }
          });
        },
        fail: (error) => { }
      })
    }
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() { },
  // 页面周期函数--监听页面初次渲染完成
  onReady() { },
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {
    uni.hideHomeButton();
    uni.setNavigationBarTitle({ title: '' })
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
  width: 100vw;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;

  .a-flex-row-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .a-pb40 {
    padding-bottom: 40rpx;
  }

  .u-font-26 {
    font-size: 26rpx;
  }

  .foot {
    padding: 0 30rpx;
    margin-top: 50rpx;
    border-top: 1px solid #e5e5e5;
  }

  .a-flex-row-between {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .u-reset-button {
    padding: 0;
    font-size: inherit;
    line-height: inherit;
    background-color: transparent;
    color: inherit;
  }

  .re {
    border-right: 1px solid #e5e5e5;
  }

  .u-popup-layout {
    padding: 60rpx 0 0 0;
    width: 600rpx;
    box-sizing: border-box;

    button {
      width: 49%;
      height: 100rpx;
      line-height: 100rpx;
    }
  }

  .tip-box {
    padding: 0 30rpx;
    margin-top: 30rpx;
    display: flex;
    flex-wrap: wrap;
  }

  .p-title {
    font-size: 40rpx;
    text-align: center;
    font-weight: bold;
  }

  .a-color-blue {
    color: #3A6DE8;
  }

  .content {
    overflow: hidden;
    background-color: #3A6DE8;

    .account-bg {
      width: 100%;
      position: relative;
    }

    .account-bg-bottom {
      position: absolute;
      bottom: 0;
      width: 723rpx;
      left: 0;
      z-index: 1;
    }

    .account-bg-1 {
      position: absolute;
      z-index: 1;
      width: 92rpx;
      left: 34rpx;
      bottom: 0;
    }

    .account-bg-2 {
      position: absolute;
      z-index: 1;
      width: 217rpx;
      right: 5rpx;
      top: 60%;
    }

    .account-box {
      position: absolute;
      top: 20%;
      z-index: 2;
      width: 100%;
      padding: 0 85rpx;
      box-sizing: border-box;

      .title {
        font-size: 50rpx;
        line-height: 108rpx;
        margin-bottom: 270rpx;
      }

      .u-font-32 {
        font-size: 32rrpx;
      }

      .auth-btn {
        height: 114rpx;
        background: #FFFFFF;
        border-radius: 57rpx;
        line-height: 114rpx;
      }
    }
  }
}</style>
