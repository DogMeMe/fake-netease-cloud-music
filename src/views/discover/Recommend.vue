<template>
  <div
    class="m-ban"
    :style="{ backgroundImage: `url(${banner.imageUrl}?imageView&blur=40x20)` }"
  >
    <div class="wrap">
      <div class="ban-img">
        <img :src="`${banner.imageUrl}?imageView&quality=89`" />
        <div class="ban-indi">
          <a
            :class="{ active: index === i - 1 }"
            v-for="i in total"
            :key="i"
            @click="getIndexBan(i - 1)"
            class="ban-dot ban-bg"
          ></a>
        </div>
      </div>
      <div class="down-fr">
        <router-link to="/download">下载客户端</router-link>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        <div class="down-sha down-sha-l ban-bg"></div>
        <div class="down-sha down-sha-r ban-bg"></div>
      </div>
      <a class="ban-pre ban-swh ban-bg" @click="preBan"></a>
      <a class="ban-next ban-swh ban-bg" @click="nextBan"></a>
    </div>
  </div>
  <div class="g-mn">
    <div class="g-wrap">
      <div class="m-rcmd">
        <r-title title="热门推荐" more to="/discover/playlist">
          <div class="g-tab" v-if="catHots.length">
            <template v-for="(cat, index) in catHots">
              <router-link
                :to="`/discover/playlist?cat=${cat.name}`"
                :key="cat.id"
                v-if="index < 5"
              >
                {{ cat.name }}
              </router-link>
            </template>
          </div>
        </r-title>
        <ul class="g-playlist">
          <m-recList
            v-for="{ id, name, picUrl, playCount, program } in recList"
            :key="id"
            :width="140"
            :name="name"
            :pic="picUrl"
            :count="playCount || program.adjustedPlayCount"
            :program="program"
          />
        </ul>
      </div>
      <div class="m-new">
        <r-title title="新碟上架" more to="/discover/album" />
        <swipe-5 class="new-album" :list="newAlbum" />
      </div>
      <div class="m-list">
        <r-title title="榜单" more to="/discover/toplist" />
        <div class="list-wrap">
          <m-toplist
            v-for="{ id, name, ToplistType, coverImgUrl, tracks } in toplist"
            :key="id"
            :name="name"
            :type="ToplistType"
            :cover="coverImgUrl"
            :list="tracks"
          />
        </div>
      </div>
    </div>
    <div class="g-sdl">
      <div class="user-profile r-bg">
        <p class="note s-fc3">
          登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
        </p>
        <a class="btn r-bg">用户登录</a>
      </div>
      <div class="singer"></div>
      <div class="dj"></div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  useBanner,
  useCatHotlist,
  useToplist,
  useNewAlbum,
  useRecList,
} from "@/hook/discover/recommend";
import RTitle from "@/components/RTitle.vue";
import MRecList from "@/components/MRecList.vue";
import { defineComponent } from "vue";
import Swipe5 from "@/components/Swipe5.vue";
import MToplist from "@/components/MToplist.vue";
export default defineComponent({
  components: { RTitle, MRecList, Swipe5, MToplist },
  name: "DiscoverRecommend",
  setup() {
    const { banner, index, total, preBan, nextBan, getIndexBan } = useBanner();
    const { catHots } = useCatHotlist();
    const { recList } = useRecList();
    const { newAlbum } = useNewAlbum();
    const { toplist } = useToplist();
    return {
      banner,
      total,
      index,
      preBan,
      nextBan,
      getIndexBan,
      catHots,
      recList,
      newAlbum,
      toplist,
    };
  },
});
</script>
<style lang="scss" scoped>
.m-ban {
  background-position: center;
  background-size: 6000px;
  .wrap {
    height: 285px;
    position: relative;
    .ban-img {
      position: relative;
      img {
        width: 730px;
        height: 285px;
        display: block;
      }
      .ban-indi {
        position: absolute;
        width: 100%;
        height: 20px;
        text-align: center;
        bottom: 5px;
        .ban-dot {
          width: 20px;
          height: 20px;
          background-position: 3px -343px;
          display: inline-block;
          &.active,
          &:hover {
            background-position: -16px -343px;
          }
        }
      }
    }
    .down-fr {
      width: 254px;
      height: 100%;
      background: url("~@/assets/discover/download.png") no-repeat;
      position: relative;
      a {
        display: block;
        width: 215px;
        height: 56px;
        margin: 186px 0 0 19px;
        background-position: 0 9999px;
        text-indent: -9999px;
      }
      p {
        margin: 10px auto;
        text-align: center;
        color: #8d8d8d;
      }
      .down-sha {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 20px;
        &.down-sha-l {
          left: -20px;
          background-position: -1px 0;
        }
        &.down-sha-r {
          right: -20px;
          background-position: -20px 0;
        }
      }
    }
    .ban-swh {
      position: absolute;
      top: 50%;
      margin-top: -31px;
      width: 37px;
      height: 63px;
      text-indent: -9999px;
      &.ban-pre {
        background-position: 0 -360px;
        left: -10px;
        &:hover {
          background-position: 0 -430px;
        }
      }
      &.ban-next {
        background-position: 0 -508px;
        right: -10px;
        &:hover {
          background-position: 0 -578px;
        }
      }
    }
  }
}
.g-mn {
  width: 980px;
  margin: 0 auto;
  overflow: hidden;
  background: url("~@/assets/frame/wrap1.png") repeat-y 100% 100%;
  .g-wrap {
    padding: 20px 20px 40px;
    box-sizing: border-box;
    float: left;
    width: calc(100% - 250px);
    .m-rcmd {
      margin-bottom: 35px;
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
      .g-playlist {
        margin: 20px 0 0 -42px;
        overflow: hidden;
        .playlist {
          padding-left: 42px;
          padding-bottom: 30px;
        }
      }
    }
    .m-new {
      .new-album {
        margin: 20px 0 37px;
        border: 1px solid #d3d3d3;
        background: #f5f5f5;
        height: 186px;
      }
    }
    .m-list {
      .list-wrap {
        height: 472px;
        margin-top: 20px;
        padding-left: 1px;
        background: url("~@/assets/discover/bill.png");
        display: flex;
        .m-list {
          flex: 1;
        }
      }
    }
  }
  .g-sdl {
    float: right;
    width: 250px;
    .user-profile {
      height: 126px;
      background-position: 0 0;
      .note {
        width: 205px;
        margin: 0 auto;
        padding: 16px 0;
        line-height: 22px;
      }
      .btn {
        display: block;
        width: 100px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        color: #fff;
        text-shadow: 0 1px 0 #8a060b;
        margin: 0 auto;
        background-position: 0 -195px;
        &:hover {
          text-decoration: none;
          background-position: -110px -195px;
        }
      }
    }
  }
}
</style>
