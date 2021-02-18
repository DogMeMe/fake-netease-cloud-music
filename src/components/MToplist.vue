<template>
  <div class="m-list">
    <div class="top">
      <img :src="cover" />
      <div class="tit">
        <router-link to="/discover/toplist">
          <h3>{{ name }}</h3>
        </router-link>
        <div class="btn">
          <a class="r-bg play" title="播放"></a>
          <a class="r-bg collect" title="收藏"></a>
        </div>
      </div>
    </div>
    <ol class="top-list">
      <li v-for="({ id, name }, index) in list" :key="id">
        <span class="order" :class="index < 3 ? 'no-top' : ''">
          {{ index + 1 }}
        </span>
        <router-link to="/song" class="name" :title="name">
          {{ name }}
        </router-link>
        <div class="oper">
          <a class="oper-play r-bg" title="播放" />
          <a class="oper-add icon-bg" title="添加到播放列表" />
          <a class="oper-collect r-bg" title="收藏" />
        </div>
      </li>
    </ol>
    <div class="more">
      <router-link to="/discover/toplist">查看全部></router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MToplist",
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.m-list {
  .top {
    height: 100px;
    padding: 20px 0 0 19px;
    display: flex;
    img {
      width: 80px;
      height: 80px;
    }
    .tit {
      margin: 6px 0 0 10px;
      h3 {
        font-size: 14px;
      }
    }
    .btn {
      margin-top: 10px;
      a {
        display: block;
        float: left;
        width: 22px;
        height: 22px;
        margin-right: 10px;
        text-indent: -9999px;
        &.play {
          background-position: -267px -205px;
          &:hover {
            background-position: -267px -235px;
          }
        }
        &.collect {
          background-position: -300px -205px;
          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }
  .top-list {
    li {
      height: 32px;
      line-height: 32px;
      .order {
        padding-left: 15px;
        width: 35px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
        &.no-top {
          color: #c10d0c;
        }
      }
      &:hover {
        .oper {
          display: block;
        }
      }
      .oper {
        display: none;
        float: right;
        width: 82px;
        margin-top: 7px;
        a {
          display: inline-block;
          width: 17px;
          height: 17px;
          margin-right: 10px;
          &.oper-play {
            background-position: -267px -268px;
          }
          &.oper-add {
            background-position: 0 -700px;
            margin: 2px 6px 0 0;
          }
          &.oper-collect {
            background-position: -297px -268px;
          }
        }
      }
    }
  }
  .more {
    height: 32px;
    margin-right: 32px;
    text-align: right;
    line-height: 32px;
  }
}
</style>
