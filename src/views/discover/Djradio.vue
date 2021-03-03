<template>
  <div class="g-bd">
    <div class="rd-type">
      <ul>
        <li v-for="{ id, name, picWebUrl } in categories" :key="id">
          <a @click="changeType(id)" :class="{ active: id === typeId }">
            <div class="bg" :style="{ backgroundImage: `url(${picWebUrl})` }" />
            <span>{{ name }}</span>
          </a>
        </li>
        <li>
          <router-link to="/question">
            <div class="bg ques" />
            <span>常见问题</span>
          </router-link>
        </li>
        <li>
          <a>
            <div class="bg apply" />
            <span>我要做主播</span>
          </a>
        </li>
      </ul>
    </div>
    <template v-if="typeId">
      <div class="new-dj">
        <r-title title="优秀新电台" />
        <ul>
          <li v-for="{ id, name, picUrl, rcmdtext } in newDjs" :key="id">
            <router-link :to="`/dj?${id}`">
              <img :src="picUrl" />
            </router-link>
            <router-link :to="`/dj?${id}`">
              <h3 class="row2">{{ name }}</h3>
            </router-link>
            <p>{{ rcmdtext }}</p>
          </li>
        </ul>
      </div>
    </template>
    <template v-else>
      <div class="list">
        <div class="list-recommend list-item">
          <r-title title="推荐节目" more />
          <ul>
            <li v-for="{ id, name, coverUrl, radio } in programs" :key="id">
              <a class="play">
                <img :src="coverUrl" />
                <i class="iconall-bg" />
              </a>
              <div class="cnt">
                <a class="row1">{{ name }}</a>
                <a class="row1">{{ radio.name }}</a>
              </div>
              <a class="category">{{ radio.category }}</a>
            </li>
          </ul>
        </div>
        <div class="list-top list-item">
          <r-title title="节目排行榜" more />
          <ul>
            <li v-for="{ rank, program, step, icon } in toplist" :key="rank">
              <div class="rank">
                <p class="rank-num" :class="{ top: rank <= 3 }">
                  {{ padStartN(rank) }}
                </p>
                <div class="step">
                  <div class="icon-bg" :class="icon" />
                  <span>{{ step }}</span>
                </div>
              </div>
              <a class="play">
                <img :src="program.coverUrl" />
                <i class="iconall-bg" />
              </a>
              <div class="cnt">
                <a class="row1">{{ program.name }}</a>
                <a class="row1">{{ program.radio.name }}</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="dj-wrap" v-for="(djs, key) in showDjs" :key="key">
        <r-title :title="`${key} • 电台`" more />
        <ul class="djs">
          <li
            class="dj"
            v-for="{ id, name, picUrl, rcmdtext } in djs"
            :key="id"
          >
            <router-link :to="`/dj?${id}`">
              <img :src="picUrl" />
            </router-link>
            <div class="dj-text">
              <router-link :to="`/dj?${id}`">
                <h3>{{ name }}</h3>
              </router-link>
              <p>{{ rcmdtext }}</p>
            </div>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import RTitle from "@/components/RTitle.vue";
import {
  useDJTop,
  useDJCategory,
  useRecProgram,
  useDJHome,
  useDJByCategory,
} from "@/hook/discover/djradio";
export default {
  components: { RTitle },
  name: "Djradio",
  setup() {
    const { programs } = useRecProgram();
    const { toplist } = useDJTop();
    const { categories } = useDJCategory();
    const { showDjs } = useDJHome();
    const { typeId, changeType, newDjs } = useDJByCategory();
    return {
      typeId,
      changeType,
      programs,
      toplist,
      categories,
      showDjs,
      newDjs,
    };
  },
};
</script>
<style lang="scss" scoped>
::v-deep .r-tit .title {
  font-size: 24px;
}
.rd-type {
  margin-bottom: 20px;
  ul {
    margin-left: -33px;
    overflow: hidden;
    li {
      float: left;
      margin: 0 0 25px 33px;
      a {
        text-decoration: none;
        display: block;
        width: 70px;
        height: 70px;
        background-position: 0 9999px;
        text-align: center;
        color: #888;
        background: url("~@/assets/discover/dj/radio_bg.png") no-repeat 0 9999px;
        &:hover {
          background-position: 0 0;
        }
        &.active {
          background-position: -70px 0;
          .bg {
            background-position: -48px 0;
          }
          span {
            color: #d35757;
          }
        }
        .bg {
          width: 48px;
          height: 48px;
          margin: 2px auto 0;
          background-position: 0 0;
          &.ques {
            background: url("~@/assets/discover/dj/ques.png");
          }
          &.apply {
            background: url("~@/assets/discover/dj/apply.png");
            & ~ span {
              color: #5ab5e7;
            }
          }
        }
      }
    }
  }
}
.list {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  .list-item {
    width: 426px;
    &.list-top {
      ul {
        li {
          .play {
            margin-left: 0;
          }
          .rank {
            width: 47px;
            text-align: center;
            line-height: normal;
            .rank-num {
              font-size: 14px;
              color: #999;
              &.top {
                color: #da4545;
              }
            }
            .step {
              text-align: center;
              .icon-bg {
                display: inline-block;
                margin: -1px 2px 0 0;
                width: 6px;
                height: 6px;
                &.new {
                  width: 16px;
                  height: 17px;
                  background-position: -67px -283px;
                  margin: 0;
                }
                &.same {
                  background-position: -74px -274px;
                  & ~ span {
                    color: #999;
                  }
                }
                &.progress {
                  background-position: -74px -304px;
                  & ~ span {
                    color: #ba2226;
                  }
                }
                &.regress {
                  background-position: -74px -324px;
                  & ~ span {
                    color: #4abbeb;
                  }
                }
              }
            }
          }
        }
      }
    }
    ul {
      height: 600px;
      border: 1px solid #e2e2e2;
      li {
        width: 424px;
        height: 40px;
        padding: 10px 0;
        line-height: 40px;
        display: flex;
        align-items: center;
        &:nth-of-type(2n) {
          background: #f7f7f7;
        }
        &:nth-of-type(2n + 1) {
          background: #fff;
        }
        .play {
          margin-left: 20px;
          width: 40px;
          height: 40px;
          position: relative;
          img {
            width: 100%;
          }
          .iconall-bg {
            background-position: 0 -85px;
            position: absolute;
            width: 22px;
            height: 22px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display: none;
          }
          &:hover {
            .iconall-bg {
              display: block;
            }
          }
        }
        .cnt {
          width: 254px;
          margin: 1px 0 0 10px;
          line-height: 20px;
          a {
            display: block;
            &:last-of-type {
              color: #999;
            }
          }
        }
        .category {
          margin: 1px 0 0 10px;
          border: 1px solid #999;
          color: #999;
          text-decoration: none;
          height: 16px;
          line-height: 16px;
          padding: 0 6px;
        }
      }
    }
  }
}
.dj-wrap {
  margin-top: 35px;
  .djs {
    margin-left: -30px;
    overflow: hidden;
    .dj {
      float: left;
      width: 435px;
      height: 120px;
      margin-left: 30px;
      padding: 20px 0;
      display: flex;
      align-items: center;
      &:first-of-type,
      &:nth-of-type(2) {
        border-bottom: 1px solid #e7e7e7;
      }
      img {
        width: 120px;
        height: 120px;
      }
      .dj-text {
        margin-left: 20px;
        h3 {
          font-size: 18px;
          margin-bottom: 20px;
        }
        p {
          color: #999;
        }
      }
    }
  }
}
.new-dj {
  margin-top: 10px;
  ul {
    margin: 16px 0 0 -37px;
    overflow: hidden;
    li {
      float: left;
      width: 150px;
      margin-left: 37px;
      img {
        width: 150px;
        height: 150px;
        display: block;
      }
      h3 {
        margin: 13px 0 6px;
        line-height: 16px;
        font-size: 14px;
        font-weight: normal;
      }
      p{
        line-height: 18px;
        color: #999;
      }
    }
  }
}
</style>
