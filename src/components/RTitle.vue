<template>
  <div class="r-tit" :class="{ 'r-bg': cirIcon, to: to , big: big}">
    <router-link class="title" :to="to">{{ title }}</router-link>
    <span class="more">
      <template v-if="main && more">
        <router-link :to="to" :main="to && main">更多</router-link>
        <i :class="{ 'r-bg': more }"></i>
      </template>
      <template v-else-if="more">
        <router-link :to="to">更多 ></router-link>
      </template>
      <slot name="more"></slot>
    </span>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "RTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
    big: {
      type: Boolean,
      default: false,
    },
    main: {
      type: Boolean,
      default: false,
    },
    more: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: "",
    },
  },
  setup() {
    const route = useRoute();
    const cirIcon = computed(() => {
      return route.path === "/discover/recommend" || route.path === "/discover";
    });
    return {
      cirIcon,
    };
  },
};
</script>

<style scoped lang="scss">
.r-tit {
  height: 33px;
  border-bottom: 2px solid #c10d0c;
  &.r-bg {
    background-position: -225px -156px;
    padding-left: 34px;
  }
  &.main {
    padding-right: 10px;
  }
  &.big{
    height: 40px;
    .title{
      font-size: 24px;
      line-height: 31px;
    }
  }
  .title {
    font-size: 20px;
    line-height: 28px;
    float: left;
    text-decoration: none;
  }
  .more {
    float: right;
    color: #666;
    margin-top: 9px;
    white-space: nowrap;
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
