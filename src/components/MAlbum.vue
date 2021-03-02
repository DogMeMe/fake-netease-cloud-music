<template>
  <li class="album" :class="{ 'r-bg': bg }">
    <router-link to="/album" class="cover-bg album-wrap">
      <img class="album-pic" :src="pic" />
      <a class="iconall-bg" title="播放" />
    </router-link>
    <p class="name row1">
      <router-link to="/album" :title="name">
        {{ name }}
      </router-link>
    </p>
    <p class="artists row1">
      <router-link to="/artist" :title="artiststr">
        {{ artiststr }}
      </router-link>
    </p>
  </li>
</template>

<script lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "MAlbum",
  props: {
    name: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: true,
    },
    artists: {
      type: Array,
      required: true,
    },
  },
  setup(props: any) {
    const artiststr = computed(() => {
      return props.artists.reduce((pre: string, cur: any) => {
        return `${pre}${pre ? "/" : ""}${cur.name}`;
      }, "");
    });
    const route = useRoute();
    const bg = computed(() => {
      return route.path === "/discover/recommend" || route.path === "/discover";
    });
    return {
      artiststr,
      bg,
    };
  },
};
</script>

<style scoped lang="scss">
.album {
  float: left;
  display: inline;
  width: 118px;
  height: 150px;
  background-position: -260px 100px;
  .album-wrap {
    width: 118px;
    height: 100px;
    background-position: 0 -570px;
    display: block;
    margin-bottom: 7px;
    position: relative;
    &:hover .iconall-bg {
      visibility: visible;
    }
    .iconall-bg {
      left: 72px;
      width: 22px;
      height: 22px;
      background-position: 0 -85px;
      position: absolute;
      bottom: 5px;
      visibility: hidden;
    }
    img {
      height: 100px;
      display: block;
    }
  }
  .row1 {
    width: 90%;
    line-height: 18px;
    &.name {
      a {
        color: #000;
      }
    }
    &.artists {
      a {
        color: #666;
      }
    }
  }
}
</style>
