<template>
  <li class="m-artist">
    <router-link :to="`/artist?${artist.id}`">
      <img :src="artist.img1v1Url" :title="`${artist.name}的音乐`" />
    </router-link>
    <div class="artist-to">
      <router-link class="to-artist row1" :to="`/artist?${artist.id}`">
        {{ artist.name }}
      </router-link>
      <router-link v-if="artist.accountId" class="to-user icon-bg" :to="`/user?${artist.accountId}`" />
    </div>
  </li>
</template>
<script lang="ts">
import { PropType } from "vue";
import { IArtist } from "@/model/discover";
export default {
  name: "MArtist",
  props: {
    artist: {
      type: Object as PropType<IArtist>,
    },
  }
};
</script>
<style lang="scss" scoped>
.m-artist {
  overflow: hidden;
  padding: 0 0 30px 17px;
  line-height: 1.4;
  float: left;
  width: 130px;
  height: 154px;
  img {
    width: 130px;
    height: 130px;
    display: block;
  }
  .artist-to {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
    .to-artist {
      max-width: 80%;
    }
    .to-user {
      width: 17px;
      height: 18px;
      background-position: 0 -740px;
    }
  }
}
</style>
