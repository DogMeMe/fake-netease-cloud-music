<template>
  <div class="play-bar">
    <div class="bg play-bar-bg"></div>
    <div class="updn">
      <div class="left play-bar-bg">
        <a
          class="btn play-bar-bg"
          :class="lock ? 'lock' : 'unlock'"
          hidefocus="true"
          @click="lockToggle"
        />
      </div>
      <div class="right play-bar-bg"></div>
    </div>
    <div class="control">
      <div class="btns">
        <a class="pre play-bar-bg" title="上一首(ctrl+←)" />
        <a
          class="play-bar-bg switch"
          :class="stop ? 'ply' : 'stp'"
          title="播放/暂停(p)"
          @click="stopToggle"
        />
        <a class="nxt play-bar-bg" title="下一首(ctrl+→)" />
      </div>
      <div class="head">
        <img
          src="http://p4.music.126.net/-yXwGFJiLKCnvVz00GosnA==/18256291068152792.jpg?param=34y34"
        />
        <a class="mask play-bar-bg" />
      </div>
      <div class="play">
        
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  name: "MPlayBar",
  setup() {
    const lock = ref(false);
    const stop = ref(true);
    const lockToggle = () => {
      lock.value = !lock.value;
    };
    const stopToggle = () => {
      stop.value = !stop.value;
    };
    return {
      lock,
      lockToggle,
      stop,
      stopToggle,
    };
  },
};
</script>
<style lang="scss" scoped>
.play-bar {
  position: fixed;
  width: 100%;

  bottom: 0;
  .bg {
    margin-right: 67px;
    background-repeat: repeat-x;
    height: 53px;
  }
  .hand {
    position: absolute;
    top: -10px;
    width: 100%;
    height: 20px;
    cursor: pointer;
  }
  .updn {
    .left {
      position: absolute;
      top: -14px;
      right: 15px;
      width: 52px;
      height: 67px;
      background-position: 0 -380px;
      .btn {
        display: block;
        width: 18px;
        height: 18px;
        margin: 6px 0 0 17px;
        &.lock {
          background-position: -80px -380px;
          &:hover {
            background-position: -80px -400px;
          }
        }
        &.unlock {
          background-position: -100px -380px;
          &:hover {
            background-position: -100px -400px;
          }
        }
      }
    }
    .right {
      position: absolute;
      top: -1px;
      right: 0;
      width: 15px;
      height: 54px;
      background-position: -52px -393px;
      pointer-events: none;
    }
  }
  .control {
    position: absolute;
    left: 50%;
    top: 6px;
    z-index: 15;
    width: 980px;
    height: 47px;
    transform: translateX(-50%);
    display: flex;
    .btns {
      width: 116px;
      padding: 6px 21px 0 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .pre {
        width: 28px;
        height: 28px;
        background-position: 0 -130px;
        &:hover {
          background-position: -30px -130px;
        }
      }
      .switch {
        width: 36px;
        height: 36px;
        &.ply {
          background-position: 0 -204px;
          &:hover {
            background-position: -40px -204px;
          }
        }
        &.stp {
          background-position: 0 -165px;
          &:hover {
            background-position: -40px -165px;
          }
        }
      }
      .nxt {
        width: 28px;
        height: 28px;
        background-position: -80px -130px;
        &:hover {
          background-position: -110px -130px;
        }
      }
    }
    .head {
      margin: 6px 15px 0 0;
      height: 34px;
      width: 34px;
      position: relative;
      img {
        width: 34px;
        height: 34px;
      }
      .mask {
        background-position: 0 -80px;
        width: 34px;
        height: 35px;
        position: absolute;
        top: 0px;
        left: 0px;
        display: block;
      }
    }
  }
}
</style>
