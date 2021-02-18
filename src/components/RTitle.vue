<template>
  <div class="r-tit r-bg">
    <router-link class="title" to="/discover/playlist">{{ title }}</router-link>
    <span class="more">
      <router-link to="/discover/playlist">更多</router-link>
      <i class="r-bg"></i>
    </span>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "RTitle",
  props: {
    title: {
      type: String,
      require: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.r-tit {
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
  .title {
    font-size: 20px;
    line-height: 28px;
    float: left;
  }
  .more {
    float: right;
    color: #666;
    margin-top: 9px;
    .r-bg {
      margin-left: 4px;
      background-position: 0 -240px;
      width: 12px;
      height: 12px;
      vertical-align: middle;
      display: inline-block;
    }
  }
}
</style>