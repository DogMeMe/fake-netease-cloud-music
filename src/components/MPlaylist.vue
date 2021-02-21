<template>
  <li class="playlist">
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
    <div class="desc">
      <p class="name">
        <router-link to="/playlist">
          {{ name }}
        </router-link>
      </p>
      <p class="singer">
        <span>by</span>
        <router-link to="/singer">{{ creatorName }}</router-link>
        <img class="icon" :src="icon" />
      </p>
    </div>
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
    creatorName: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      require: false,
    },
  },
};
</script>

<style scoped lang="scss">
.playlist {
  float: left;
  height: 188px;
  width: 140px;
  .img {
    background-size: contain;
    display: block;
    position: relative;
    height: 140px;
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
    .name {
      font-size: 14px;
      color: #000;
      line-height: 1.4;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      a {
        font-size: 14px;
        color: #000;
      }
    }
    .singer {
      display: flex;
      align-items: center;
      *{
        color: #666;
      }
      a {
        max-width: 76%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0 3px;
      }
      .icon {
        width: 13px;
        height: 13px;
      }
    }
  }
}
</style>