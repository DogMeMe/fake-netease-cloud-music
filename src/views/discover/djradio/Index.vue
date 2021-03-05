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
        <r-title big title="优秀新电台" />
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
          <r-title title="推荐节目" more big to="/discover/djradio/recommend" />
          <ul>
            <m-rec-dj
              v-for="program in programs"
              :key="program.id"
              :program="program"
            />
          </ul>
        </div>
        <div class="list-top list-item">
          <r-title title="节目排行榜" more big to="/discover/djradio/rank" />
          <ul>
            <m-toplist-dj v-for="top in toplist" :key="top.rank" :item="top" />
          </ul>
        </div>
      </div>
      <div class="dj-wrap" v-for="(djs, key) in showDjs" :key="key">
        <r-title :title="`${key} • 电台`" more big />
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
import MRecDj from "@/components/MRecDj.vue";
import MToplistDj from "@/components/MToplistDj.vue";
export default {
  components: { RTitle, MRecDj, MToplistDj },
  name: "Djradio",
  setup() {
    const { programs } = useRecProgram();
    const { toplist } = useDJTop(10);
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
    ul {
      height: 600px;
      border: 1px solid #e2e2e2;
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
      p {
        line-height: 18px;
        color: #999;
      }
    }
  }
}
</style>
