<template>
  <div class="swipe5">
    <div class="roll">
      <ul
        class="roller"
        v-for="i in list.length / 5"
        :key="i"
        :style="{ left: `${(i - 1 - active) * 645}px` }"
      >
        <template v-for="(album, index) in list">
          <m-album
            v-if="index / 5 >= i - 1 && index / 5 < i"
            :key="album.id"
            :pic="album.picUrl"
            :name="album.name"
            :artists="album.artists"
          />
        </template>
      </ul>
    </div>
    <a class="swipe-pre r-bg" @click="cusorClick" />
    <a class="swipe-next r-bg" @click="cusorClick" />
  </div>
</template>

<script lang="ts">
import MAlbum from "@/components/MAlbum.vue";
import { IAlbum } from "@/model/discover";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: { MAlbum },
  name: "Swipe5",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const active = ref(1);
    const cusorClick = () => {
      active.value = Math.abs(1 - active.value);
    };
    return {
      cusorClick,
      active,
    };
  },
});
</script>

<style scoped lang="scss">
.swipe5 {
  position: relative;
  .swipe-pre {
    position: absolute;
    left: 4px;
    top: 71px;
    width: 17px;
    height: 17px;
    background-position: -260px -75px;
  }
  .swipe-next {
    position: absolute;
    top: 71px;
    width: 17px;
    height: 17px;
    right: 4px;
    background-position: -320px -75px;
  }
  .roll {
    float: left;
    width: 645px;
    height: 180px;
    overflow: hidden;
    margin-left: 18px;
    position: relative;
    .roller {
      width: 645px;
      margin-top: 28px;
      position: absolute;
      top: 0;
      transition: left 1s ease-out 0s;
      .album {
        margin-left: 11px;
      }
    }
  }
}
</style>