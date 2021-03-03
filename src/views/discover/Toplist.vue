<template>
  <div class="g-bd g-wrap3">
    <div class="top-names">
      <h2>云音乐特色榜</h2>
      <ul>
        <li
          v-for="{
            id,
            name,
            coverImgUrl,
            updateFrequency,
          } in cloudMusicToplist"
          :key="id"
          :class="{ selected: selectedId === id }"
          @click="getByToptype(id, updateFrequency)"
        >
          <img :src="coverImgUrl" />
          <p class="name">{{ name }}</p>
          <p class="update">{{ updateFrequency }}</p>
        </li>
      </ul>
      <h2>全球媒体榜</h2>
      <ul>
        <li
          v-for="{ id, name, coverImgUrl, updateFrequency } in mediaToplist"
          :key="id"
          :class="{ selected: selectedId === id }"
          @click="getByToptype(id, updateFrequency)"
        >
          <img :src="coverImgUrl" />
          <p class="name">{{ name }}</p>
          <p class="update">{{ updateFrequency }}</p>
        </li>
      </ul>
    </div>
    <div class="top-detail">
      <div class="detail-wrap">
        <div class="cover">
          <img :src="toplist.coverImgUrl" />
        </div>
        <div class="detail-main">
          <h2>{{ toplist.name }}</h2>
          <p class="update">
            <i class="icon-bg" />
            <span class="update-time"
              >最近更新：{{ formatDate(toplist.updateTime, "MM月DD日") }}</span
            >
            <span class="update-frequency"
              >（{{ toplist.updateFrequency }}）</span
            >
          </p>
          <div class="detail-count">
            <a class="play button2-bg" title="播放">
              <i class="button2-bg"><em class="ply button2-bg"></em>播放</i>
            </a>
            <a class="add button2-bg" title="添加到播放列表"></a>
            <a class="sub button2-bg">
              <i class="button2-bg">({{ toplist.subscribedCount }})</i>
            </a>
            <a class="share button2-bg">
              <i class="button2-bg">({{ toplist.shareCount }})</i>
            </a>
            <a class="download button2-bg">
              <i class="button2-bg">下载</i>
            </a>
            <a class="comment button2-bg">
              <i class="button2-bg">({{ toplist.commentCount }})</i>
            </a>
          </div>
        </div>
      </div>
      <div class="detail-songs">
        <r-title title="歌曲列表" to="">
          <template v-if="toplist.trackCount" v-slot:default>
            <span class="song-count">{{ toplist.trackCount }}首歌</span>
          </template>
          <template v-if="toplist.playCount" v-slot:more>
            <span class="play-count">
              播放：<span>{{ toplist.playCount }}</span
              >次
            </span>
          </template>
        </r-title>
        <table :cellpadding="0" :cellspacing="0">
          <thead>
            <tr>
              <th class="first w1 tb-bg"></th>
              <th class="tb-bg"><div class="wp tb-bg">标题</div></th>
              <th class="w2-1 tb-bg"><div class="wp tb-bg">时长</div></th>
              <th class="w3-1 tb-bg"><div class="wp tb-bg">歌手</div></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="({ id, name, dt, arStr, aliaStr, al },
              index) in toplist.tracks"
              :key="id"
            >
              <td class="song-order row1">
                <span>{{ index + 1 }}</span>
              </td>
              <td class="song-name row1">
                <router-link v-if="al && index < 3" class="song-pic" to="/song">
                  <img :src="al.picUrl" />
                </router-link>
                <p>
                  <span class="play tb-bg"></span>
                  <span>
                    <router-link to="/song">{{ name }}</router-link>
                    <span v-if="aliaStr" class="alias">
                      （{{ aliaStr }}）
                    </span>
                  </span>
                </p>
              </td>
              <td class="song-dur">
                <span>{{ formatDuration(dt) }}</span>
                <div class="oper">
                  <a class="icon-bg add" title="添加到播放列表" />
                  <a class="tb-bg collect" title="收藏" />
                  <a class="tb-bg share" title="分享" />
                  <a class="tb-bg download" title="下载" />
                </div>
              </td>
              <td>
                <router-link to="/artist">
                  {{ arStr }}
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useToplist } from "@/hook/discover/toplist";
import RTitle from "@/components/RTitle.vue";
import { getCurrentInstance } from "vue";
export default {
  components: { RTitle },
  name: "Toplist",
  setup() {
    const {
      mediaToplist,
      cloudMusicToplist,
      selectedId,
      toplist,
      getByToptype,
    } = useToplist();
    const $this = getCurrentInstance();
    const formatDate = $this?.appContext.config.globalProperties.formatDate;
    return {
      mediaToplist,
      cloudMusicToplist,
      selectedId,
      toplist,
      formatDate,
      getByToptype,
    };
  },
};
</script>
<style lang="scss" scoped>
.top-names {
  width: 240px;
  padding-top: 20px;
  h2 {
    padding: 0 10px 12px 15px;
    font-size: 14px;
    color: #000;
    font-family: simsun, 宋体;
    padding-top: 20px;
  }
  li {
    padding: 10px 0 10px 20px;
    height: 42px;
    cursor: pointer;
    &:hover {
      background: #f1f1f1;
    }
    &.selected {
      background: #e6e6e6;
    }
    img {
      display: block;
      height: 40px;
      width: 40px;
      float: left;
    }
    p {
      padding-left: 50px;
      &.name {
        color: #000;
        margin-top: 2px;
        margin-bottom: 8px;
      }
      &.update {
        color: #999;
      }
    }
  }
}
.top-detail {
  width: 740px;
  padding-bottom: 50px;
  .detail-wrap {
    padding: 40px;
    overflow: hidden;
    .cover {
      padding: 3px;
      border: 1px solid #ccc;
      float: left;
      overflow: hidden;
      img {
        width: 150px;
        height: 150px;
      }
    }
    .detail-main {
      margin-left: 187px;
      h2 {
        margin: 16px 0 4px;
        font-weight: normal;
        line-height: 24px;
        font-size: 20px;
        margin: 16px 0 4px;
      }
      .update {
        margin: 0 0 20px;
        line-height: 35px;
        i {
          width: 13px;
          height: 13px;
          background-position: -18px -682px;
          margin: 9px 0 0 3px;
          display: inline-block;
        }
        .update-time {
          margin-left: 5px;
          color: #666;
        }
        .update-frequency {
          color: #999;
        }
      }
      .detail-count {
        a {
          height: 31px;
          line-height: 30px;
          font-family: simsun, 宋体;
          min-width: 23px;
          margin-right: 6px;
          float: left;
          overflow: hidden;
          padding: 0 5px 0 0;
          background-position: right -1020px;
          i {
            font-style: normal;
            height: 31px;
            line-height: 30px;
            overflow: hidden;
            min-width: 23px;
            float: left;
            padding-right: 2px;
            padding-left: 28px;
          }
          &.play {
            background-position: right -428px;
            margin-right: 0;
            i {
              padding: 0 7px 0 8px;
              line-height: 31px;
              color: #fff;
              background-position: 0 -387px;
              display: inline-block;
              .ply {
                float: left;
                width: 20px;
                height: 18px;
                margin: 6px 2px 2px 0;
                background-position: 0 -1622px;
                overflow: hidden;
              }
            }
          }
          &.add {
            min-width: 23px;
            width: 31px;
            margin-left: -3px;
            padding-right: 0;
            background-position: 0 -1588px;
            margin-right: 5px;
          }
          &.sub i {
            background-position: 0 -977px;
          }
          &.share i {
            background-position: 0 -1225px;
          }
          &.download i {
            background-position: 0 -2761px;
          }
          &.comment i {
            background-position: 0 -1465px;
          }
        }
      }
    }
  }
}
.detail-songs {
  padding: 0 30px 40px 40px;
  .r-tit {
    ::v-deep .title {
      cursor: text;
    }
    .song-count {
      margin: 9px 0 0 20px;
      display: inline-block;
      color: #666;
    }
    .play-count {
      margin-top: 5px;
      margin-right: -10px;
      color: #666;
      span {
        color: #c20c0c;
      }
    }
  }
  table {
    width: 100%;
    border: 1px solid #d9d9d9;
    table-layout: fixed;
    thead {
      tr {
        .first {
          width: 77px;
        }
        th {
          height: 38px;
          background-color: #f7f7f7;
          background-position: 0 0;
          background-repeat: repeat-x;
          vertical-align: top;
          text-align: left;
          font-weight: normal;
          color: #666;
          .wp {
            padding: 8px 10px;
            height: 18px;
            line-height: 18px;
            padding: 8px 10px;
            background-position: 0 -56px;
          }
          &.w2-1 {
            width: 100px;
          }
          &.w3-1 {
            width: 26%;
          }
        }
      }
    }
    tbody {
      tr {
        &:hover {
          .song-dur {
            & > span {
              display: none;
            }
            .oper {
              display: block;
              word-break: keep-all;
            }
          }
        }
        &:nth-of-type(2n + 1) {
          td {
            background-color: #f7f7f7;
          }
        }
        td {
          padding: 6px 10px;
          line-height: 18px;
          text-align: left;
          .song-pic {
            float: left;
            height: 50px;
            img {
              width: 50px;
              height: 50px;
              margin-right: 14px;
            }
            & ~ p {
              margin-top: 17px;
            }
          }
          &.song-order {
            span {
              width: 25px;
              text-align: center;
              color: #999;
              display: inline-block;
            }
          }
          &.song-dur {
            color: #666;
          }
          &.song-name {
            p {
              .play {
                width: 17px;
                height: 17px;
                cursor: pointer;
                background-position: 0 -103px;
                float: left;
                margin-right: 8px;
                &:hover {
                  background-position: 0 -128px;
                }
              }
              .alias {
                color: #aeaeae;
              }
            }
          }

          .oper {
            display: none;
            a {
              overflow: hidden;
              vertical-align: middle;
              float: left;
              width: 18px;
              height: 16px;
              margin: 2px 0 0 4px;
              text-indent: -999px;
              &.add {
                width: 13px;
                height: 13px;
                background-position: 0 -700px;
                margin: 2px 0 0;
                &:hover {
                  background-position: -22px -700px;
                }
              }
              &.collect {
                background-position: 0 -174px;
                &:hover {
                  background-position: -20px -174px;
                }
              }
              &.share {
                background-position: 0 -195px;
                &:hover {
                  background-position: -20px -195px;
                }
              }
              &.download {
                background-position: -81px -174px;
                &:hover {
                  background-position: -104px -174px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
