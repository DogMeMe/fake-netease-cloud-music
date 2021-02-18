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
        <span class="order" :class="index < 3 ? 'no-top' : ''">{{
          index + 1
        }}</span>
        <router-link to="/song" class="name" :title="name">{{ name }}</router-link>
      </li>
    </ol>
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
    }
  }
}
</style>