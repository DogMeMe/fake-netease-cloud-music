<template>
  <li class="playlist" :style="{ width: `${width}px` }">
    <router-link
      class="img"
      to="/playlist"
      :style="{
        width: `${width}px`,
        height: `${width}px`,
        backgroundImage: `url(${pic})`,
      }"
    >
      <div class="bottom cover-bg">
        <span class="iconall-bg icon-headset"></span>
        <a class="iconall-bg icon-play"></a>
        <span>{{ count }}</span>
      </div>
    </router-link>
    <p class="desc">
      <router-link to="/playlist">
        <i v-if="program" class="icon-bg dj" />
        {{ name }}
      </router-link>
    </p>
  </li>
</template>

<script lang="ts">
export default {
  name: "Playlist",
  props: {
    pic: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    program: {
      type: Object,
      required: false,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.playlist {
  float: left;
  height: 204px;
  .img {
    background-size: contain;
    display: block;
    position: relative;
    .bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 27px;
      background-position: 0 -537px;
      .icon-headset {
        float: left;
        width: 14px;
        height: 11px;
        background-position: 0 -24px;
        margin: 9px 5px 9px 10px;
      }
      .icon-play {
        position: absolute;
        right: 10px;
        bottom: 5px;
        width: 16px;
        height: 17px;
        background-position: 0 0;
        & ~ span {
          color: #ccc;
          margin-top: 7px;
          display: inline-block;
        }
      }
    }
  }
  .desc {
    margin: 8px 0 3px;
    &:hover {
      text-decoration: underline;
    }
    a {
      font-size: 14px;
      color: #000;
      line-height: 1.4;
      i {
        display: inline-block;
        width: 35px;
        height: 15px;
        background-position: -31px -658px;
        margin-right: 3px;
      }
    }
  }
}
</style>