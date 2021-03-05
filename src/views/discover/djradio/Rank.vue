<template>
  <div class="g-bd">
    <r-title title="节目排行榜" big>
      <span class="sub-title">  最近更新：{{ formatDate(updateTime, 'MM月DD日') }} </span>
    </r-title>
    <ul>
      <li class="zebra-li" v-for="item in toplist" :key="item.id">
        <div class="rank">
          <p class="rank-num" :class="{ top: item.rank <= 3 }">
            {{ padStartN(item.rank) }}
          </p>
          <div class="step">
            <div class="icon-bg" :class="item.icon" />
            <span>{{ item.step }}</span>
          </div>
        </div>
        <a class="play">
          <img :src="item.program.coverUrl" />
          <i class="iconall-bg" />
        </a>
        <div class="cnt">
          <a class="row1">{{ item.program.name }}</a>
          <a class="row1">{{ item.program.radio.name }}</a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { useDJTop } from "@/hook/discover/djradio";
import RTitle from "@/components/RTitle.vue";
export default {
  components: { RTitle },
  name: "DJRadioRank",
  setup() {
    const { toplist, updateTime } = useDJTop();
    return {
      toplist,
      updateTime,
    };
  },
};
</script>
<style lang="scss" scoped>
.sub-title {
  color: #999;
  line-height: 40px;
  margin-left: 10px;
}
ul {
  border: 1px solid #e2e2e2;
  .play {
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
  .cnt {
    width: 254px;
    margin: 1px 0 0 10px;
    line-height: 20px;
    a {
      display: block;
      &:last-of-type {
        color: #999;
      }
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
  .rank {
    width: 47px;
    text-align: center;
    line-height: normal;
    .rank-num {
      font-size: 14px;
      color: #999;
      &.top {
        color: #da4545;
      }
    }
    .step {
      text-align: center;
      .icon-bg {
        display: inline-block;
        margin: -1px 2px 0 0;
        width: 6px;
        height: 6px;
        &.new {
          width: 16px;
          height: 17px;
          background-position: -67px -283px;
          margin: 0;
        }
        &.same {
          background-position: -74px -274px;
          & ~ span {
            color: #999;
          }
        }
        &.progress {
          background-position: -74px -304px;
          & ~ span {
            color: #ba2226;
          }
        }
        &.regress {
          background-position: -74px -324px;
          & ~ span {
            color: #4abbeb;
          }
        }
      }
    }
  }
}
</style>
