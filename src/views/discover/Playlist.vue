
<template>
  <div class="g-bd">
    <div class="play-tit">
      <h3>
        <span class="title">{{ tag }}</span>
        <a class="select button2-bg" @click="toggleCategory">
          <em class="button2-bg">
            选择分类
            <i class="icon-bg" />
          </em>
        </a>
      </h3>
      <a class="hot button-bg" @click="getHot">热门</a>
    </div>
    <div class="play-list">
      <m-playlist
        v-for="{ id, name, playCount, creator, coverImgUrl } in playlist"
        :key="id"
        :name="name"
        :count="playCount"
        :creatorName="creator.nickname"
        :pic="coverImgUrl"
        :icon="creator.avatarDetail?.identityIconUrl"
      />
    </div>
    <div class="play-page">
      <m-page :total="pages" :cur="current" @to-page="toPage" />
    </div>
    <div class="play-category" v-show="categoryVisible">
      <div class="category-hd sltlyr-bg">
        <i class="iconall-bg"></i>
      </div>
      <div class="category-bd sltlyr-bg">
        <h3>
          <a class="button-bg" @click="getByCate('全部')">全部风格</a>
        </h3>
        <div
          class="category-row"
          v-for="(subs, category) in categoryObj"
          :key="category"
        >
          <span class="category">
            <i class="icon-bg" />
            {{ category }}
          </span>
          <span class="subs">
            <a
              class="sub"
              v-for="({ name }, index) in subs"
              :key="`${category}-${index}`"
              @click="getByCate(name)"
            >
              {{ name }}
            </a>
          </span>
        </div>
      </div>
      <div class="category-foot sltlyr-bg"></div>
    </div>
  </div>
</template>
<script lang='ts'>
import { usePlaylistCateList, usePlaylist } from "@/hook/discover/playlist";
import MPage from "@/components/MPage.vue";
import MPlaylist from "@/components/MPlaylist.vue";
export default {
  name: "Playlist",
  components: {
    MPage,
    MPlaylist,
  },
  setup() {
    const { categoryObj, toggleCategory, categoryVisible } = usePlaylistCateList();
    const {
      tag,
      pages,
      current,
      playlist,
      toPage,
      getHot,
      getByCate,
    } = usePlaylist(categoryVisible);
    return {
      tag,
      pages,
      current,
      playlist,
      toPage,
      getHot,
      getByCate,
      categoryObj,
      toggleCategory,
      categoryVisible
    };
  },
};
</script>
<style lang="scss" scoped>
.g-bd {
  width: 980px;
  margin: 0 auto;
  min-height: 700px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  padding: 40px 39px;
  box-sizing: border-box;
  position: relative;
  .play-tit {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 40px;
    border-bottom: 2px solid #c20c0c;
    h3 {
      font-weight: normal;
      display: flex;
      align-items: flex-start;
      .title {
        font-size: 24px;
      }
      .select {
        margin: 2px 0 0 12px;
        font-size: 12px;
        height: 31px;
        line-height: 31px;
        display: inline-block;
        text-align: center;
        background-position: right -100px;
        padding-right: 5px;
        text-decoration: none;
        &:hover {
          background-position: right -182px;
          em.button2-bg {
            background-position: 0 -141px;
          }
        }
        em.button2-bg {
          background-position: 0 -59px;
          padding: 0 10px 0 15px;
          height: 100%;
          display: flex;
          font-style: normal;
          color: #0c73c2;
          align-items: center;
          .icon-bg {
            width: 8px;
            height: 5px;
            background-position: -70px -543px;
            display: inline-block;
            margin-left: 5px;
          }
        }
      }
    }
    .hot {
      width: 46px;
      height: 29px;
      line-height: 29px;
      background-position: 0 0;
      border-radius: 3px;
      color: #fff;
      font-size: 12px;
      text-align: center;
    }
  }
  .play-list {
    margin: 30px 0 0 -50px;
    overflow: hidden;
    .playlist {
      overflow: hidden;
      padding: 0 0 30px 50px;
      line-height: 1.4;
    }
  }
  .play-page {
    margin: 20px 0;
    text-align: center;
  }
  .play-category {
    position: absolute;
    top: 75px;
    z-index: 5;
    width: 720px;
    .category-hd {
      height: 32px;
      i {
        position: absolute;
        top: 2px;
        left: 132px;
        display: inline-block;
        width: 24px;
        height: 11px;
        background-position: -48px 0;
        vertical-align: middle;
      }
    }
    .category-bd {
      width: 700px;
      padding: 0 10px 30px;
      background-position: -720px 0;
      background-repeat: repeat-y;
      h3 {
        height: 37px;
        padding-left: 26px;
        border-bottom: 1px solid #e6e6e6;
        font-weight: normal;
        a {
          width: 75px;
          height: 26px;
          background-position: 0 -64px;
          text-align: center;
          line-height: 26px;
          display: inline-block;
        }
      }
      .category-row {
        .category {
          float: left;
          display: inline;
          width: 70px;
          margin: 0 -100px 0 26px;
          padding-top: 15px;
          border-right: 1px solid #e6e6e6;
          font-weight: bold;
          .icon-bg {
            margin-right: 8px;
            margin-bottom: 4px;
            display: inline-block;
            overflow: hidden;
            vertical-align: middle;
            width: 23px;
            height: 23px;
            background-position: -20px -735px;
          }
        }
        .subs {
          margin-left: 96px;
          padding: 16px 15px 0 15px;
          border-left: 1px solid #e6e6e6;
          line-height: 24px;
          display: block;
          a {
            white-space: nowrap;
            text-decoration: none;
            padding: 0 10px 0 12px;
            border-right: 2px solid #d8d8d8;
          }
        }
      }
    }
    .category-foot {
      height: 20px;
      background-position: -1440px -12px;
    }
  }
}
</style>