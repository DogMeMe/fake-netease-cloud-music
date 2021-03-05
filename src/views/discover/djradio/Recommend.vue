<template>
  <div class="g-bd">
    <r-title title="推荐节目" big>
      <span class="sub-title"> （每日更新） </span>
    </r-title>
    <ul>
      <li
        class="zebra-li"
        v-for="program in programs"
        :key="program.id"
        :program="program"
      >
        <a class="play">
          <img :src="program.coverUrl" />
          <i class="iconall-bg" />
        </a>
        <a class="row1 name">{{ program.name }}</a>
        <a class="row1 artist">{{ program.radio.name }}</a>
        <a class="row1 pl-count">播放{{ program.listenerCount }}</a>
        <a class="row1 lk-count">赞{{ program.likedCount }}</a>
        <a class="category">{{ program.radio.category }}</a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { useRecProgram } from "@/hook/discover/djradio";
import RTitle from "@/components/RTitle.vue";
export default {
  components: { RTitle },
  name: "DJRadioRecommend",
  setup() {
    const { programs } = useRecProgram();
    return {
      programs,
    };
  },
};
</script>
<style lang="scss" scoped>
.sub-title {
  color: #999;
  line-height: 40px;
}
ul {
  border: 1px solid #e2e2e2;
  li.zebra-li {
    width: 100%;
    .play {
      margin-left: 20px;
      width: 40px;
      height: 40px;
      position: relative;
      img {
        width: 100%;
      }
      .iconall-bg {
        background-position: 0 -85px;
        position: absolute;
        width: 22px;
        height: 22px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: none;
      }
      &:hover {
        .iconall-bg {
          display: block;
        }
      }
    }
    .row1 {
      line-height: 40px;
      margin-left: 10px;
      &.name {
        width: 304px;
      }
      &.artist {
        width: 166px;
      }
      &.pl-count{
        width: 90px;
        color: #999;
      }
      &.lk-count{
        width: 126px;
        color: #999;
      }
    }
    .category {
      margin: 1px 0 0 10px;
      border: 1px solid #999;
      color: #999;
      text-decoration: none;
      height: 16px;
      line-height: 16px;
      padding: 0 6px;
    }
  }
}
</style>
