<template>
  <div
    class="m-ban"
    :style="{ backgroundImage: `url(${banner.imageUrl}?imageView&blur=40x20)` }"
  >
    <div class="wrap">
      <div class="ban-img">
        <img :src="`${banner.imageUrl}?imageView&quality=89`" />
        <div class="ban-indi">
          <a
            :class="{active: index === i - 1}"
            v-for="i in total"
            :key="i"
            @click="getIndexBan(i - 1)"
            class="m-hand ban-dot ban-bg"
          ></a>
        </div>
      </div>
      <div class="down-fr">
        <router-link to="/download">下载客户端</router-link>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        <div class="down-sha down-sha-l ban-bg"></div>
        <div class="down-sha down-sha-r ban-bg"></div>
      </div>
      <a class="ban-pre ban-swh ban-bg m-hand" @click="preBan"></a>
      <a class="ban-next ban-swh ban-bg m-hand" @click="nextBan"></a>
    </div>
  </div>
</template>
<script lang="ts">
import { useBanner } from "@/hook/discover";
export default {
  name: "DiscoverRecommend",
  setup() {
    const { banner, index, total, preBan, nextBan, getIndexBan } = useBanner();
    return {
      banner,
      total,
      index,
      preBan,
      nextBan,
      getIndexBan,
    };
  },
};
</script>
<style lang="scss" scoped>
.m-ban {
  background-position: center;
  background-size: 6000px;
  .wrap {
    height: 285px;
    position: relative;
    .ban-img {
      position: relative;
      img {
        width: 730px;
        height: 285px;
        display: block;
      }
      .ban-indi {
        position: absolute;
        width: 100%;
        height: 20px;
        text-align: center;
        bottom: 5px;
        .ban-dot {
          width: 20px;
          height: 20px;
          background-position: 3px -343px;
          display: inline-block;
          &.active,
          &:hover {
            background-position: -16px -343px;
          }
        }
      }
    }
    .down-fr {
      width: 254px;
      height: 100%;
      background: url("~@/assets/discover/download.png") no-repeat;
      position: relative;
      a {
        display: block;
        width: 215px;
        height: 56px;
        margin: 186px 0 0 19px;
        background-position: 0 9999px;
        text-indent: -9999px;
      }
      p {
        margin: 10px auto;
        text-align: center;
        color: #8d8d8d;
      }
      .down-sha {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 20px;
        &.down-sha-l {
          left: -20px;
          background-position: -1px 0;
        }
        &.down-sha-r {
          right: -20px;
          background-position: -20px 0;
        }
      }
    }
    .ban-swh {
      position: absolute;
      top: 50%;
      margin-top: -31px;
      width: 37px;
      height: 63px;
      text-indent: -9999px;

      &.ban-pre {
        background-position: 0 -360px;
        left: -10px;
        &:hover {
          background-position: 0 -430px;
        }
      }
      &.ban-next {
        background-position: 0 -508px;
        right: -10px;
        &:hover {
          background-position: 0 -578px;
        }
      }
    }
  }
}
</style>
