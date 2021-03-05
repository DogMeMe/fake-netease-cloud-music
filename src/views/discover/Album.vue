<template>
  <div class="g-bd">
    <r-title big title="热门新碟" />
    <ul class="album-list">
      <m-album
        v-for="{ id, name, artists, picUrl } in newAlbum"
        :key="id"
        :pic="picUrl"
        :name="name"
        :artists="artists"
      />
    </ul>
    <r-title big title="全部新碟">
      <div class="g-tab">
        <a v-for="(name, key) in areas" @click="getByArea(key)" :key="key">
          {{ name }}
        </a>
      </div>
    </r-title>
    <ul class="album-list">
      <m-album
        v-for="{ id, name, artists, picUrl } in albumlist"
        :key="id"
        :pic="picUrl"
        :name="name"
        :artists="artists"
      />
    </ul>
    <m-page @to-page="toPage" :total="pages" :cur="current" />
  </div>
</template>
<script lang="ts">
import RTitle from "@/components/RTitle.vue";
import MPage from "@/components/MPage.vue";
import { useAlbumlist, useNewAlbum } from "@/hook/discover/album";
import MAlbum from "@/components/MAlbum.vue";
import { ref } from "vue";
export default {
  components: { RTitle, MPage, MAlbum },
  name: "Album",
  setup() {
    const { newAlbum } = useNewAlbum();
    const {
      albumlist,
      area,
      current,
      pages,
      toPage,
      getByArea,
    } = useAlbumlist();
    const areas = ref({
      ALL: "全部",
      ZH: "华语",
      EA: "欧美",
      KR: "韩国",
      JP: "日本",
    });
    return {
      areas,
      newAlbum,
      albumlist,
      area,
      current,
      pages,
      toPage,
      getByArea,
    };
  },
};
</script>
<style lang="scss" scoped>
.album-list {
  overflow: hidden;
  margin: 20px 0 0 -33px;
  .album {
    width: 153px;
    height: 178px;
    padding: 0 0 30px 33px;
    line-height: 1.4;
    ::v-deep .album-wrap {
      width: 153px;
      height: 130px;
      background-position: 0 -845px;
      .iconall-bg {
        left: 94px;
        width: 28px;
        height: 28px;
        background-position: 0 -140px;
      }
      img {
        height: 100%;
      }
    }
  }
}
.g-tab {
  float: left;
  margin: 7px 0 0 10px;
  a {
    padding: 0 13px;
    &:not(:last-child) {
      border-right: 1px solid #ccc;
    }
  }
}
</style>
