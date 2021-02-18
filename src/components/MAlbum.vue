<template>
  <li class="album r-bg">
    <router-link to="/album" class="cover-bg album-wrap">
      <img :src="pic" />
    </router-link>
    <p class="a-row name">
      <router-link to="/album" :title="name">
        {{ name }}
      </router-link>
    </p>
    <p class="a-row artists">
      <router-link to="/artist" :title="artiststr">
        {{ artiststr }}
      </router-link>
    </p>
  </li>
</template>

<script lang="ts">
import { computed } from "vue";
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
    return {
      artiststr,
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
    img {
      width: 100px;
      height: 100px;
      display: block;
    }
  }
  .a-row {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
