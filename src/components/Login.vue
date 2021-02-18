<template>
  <div class="lng">
    <div class="head lng-bg">
      <span class="head-tit">登录</span>
      <span class="close lng-bg" title="关闭窗体"></span>
    </div>
    <div class="lng-cnt">
      <div class="qrcd-cnt">
        <div class="qr-main">
          <div class="qr-guide"></div>
          <div class="qr-scan">
            <h3>扫码登录</h3>
            <div class="scan-wrap">
              <qrcode :value="qrurl" />
              <div class="scan-mask">
                <p>二维码已失效</p>
                <button>点击刷新</button>
              </div>
            </div>
            <p class="scan-tip">
              使用
              <router-link to="/download">
                网易云音乐APP
              </router-link>
              扫码登录
            </p>
          </div>
        </div>
        <button class="lng-opti">选择其他方式登录</button>
      </div>
      <div class="thr-cnt"></div>
      <div class="phn-cnt"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { QrLng } from "@/hook/login";
import Qrcode from "@/components/Qrcode.vue";
export default defineComponent({
  name: "Login",
  components: {
    Qrcode,
  },
  setup() {
    const lngType = ref(0);
    const qrurl: Ref<string> = ref("333");
    const showLogin = async () => {
      // qrurl.value = (await QrLng.geneQr()).qrurl;
      await QrLng.geneQr()
    };
    showLogin();
    return {
      lngType,
      qrurl,
    };
  },
});
</script>
<style lang="scss" scoped>
.lng {
  display: none;
  position: absolute;
  z-index: 9998;
  width: 530px;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  border: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .head {
    position: relative;
    z-index: 10;
    border-bottom: 1px solid #191919;
    border-radius: 4px 4px 0 0;
    background: #2d2d2d;
    height: 38px;
    line-height: 38px;
    padding-left: 18px;
    padding-right: 45px;
    .head-tit {
      color: #fff;
      font-weight: bold;
    }
    .close {
      position: absolute;
      z-index: 20;
      top: 16px;
      right: 20px;
      width: 10px;
      height: 10px;
      overflow: hidden;
      text-indent: -9999px;
      background-position: 0 -95px;
    }
  }
  .lng-cnt {
    border: 1px solid #878787;
    border-width: 0 1px 1px;
    border-radius: 0 0 4px 4px;
    background: #fff;
    .qrcd-cnt {
      padding: 38px 0 22px;
      text-align: center;
      .qr-main {
        padding: 0 78px 0 101px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .qr-guide {
          width: 125px;
          height: 220px;
          background: url("~@/assets/login/qr_guide.png");
          background-size: contain;
        }
        .qr-scan {
          text-align: center;
          h3 {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 13px;
          }
          .scan-tip {
            line-height: 17px;
            margin-top: 13px;
            color: rgba(0, 0, 0, 0.4);
            a {
              color: #0c73c2;
            }
          }
          .scan-wrap {
            position: relative;
            .scan-mask {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background: rgba(255, 255, 255, 0.9);
              p {
                margin: 45px 0 6px;
              }
              button {
                width: 64px;
                height: 24px;
                line-height: 24px;
                text-align: center;
                border-radius: 4px;
                background: linear-gradient(180deg, #81dd81 0%, #55a055 100%);
                border: 1px solid #5baf5b;
                box-shadow: inset 0 -1px 1px 1px rgba(185, 230, 185, 0.31);
                color: #fff;
              }
            }
          }
        }
      }
    }
    .lng-opti {
      width: 118px;
      height: 100%;
      margin: 20px auto 0;
      border: 1px solid #979797;
      border-radius: 15px;
      line-height: 28px;
      background: #fff;
      text-align: center;
      color: rgba(0, 0, 0, 0.8);
    }
  }
}
</style>
