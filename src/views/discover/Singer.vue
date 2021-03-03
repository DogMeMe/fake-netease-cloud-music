<template>
  <div class="g-bd g-wrap2">
    <div class="singer-category">
      <ul class="area" v-for="{ id, name } in areas" :key="id">
        <h3>{{ name }}</h3>
        <template v-for="{ id: typeId, name: typeName } in types" :key="typeId">
          <li v-if="id * typeId > 0 || typeId !== -1 && id === 0" class="type">
            <a
              :class="{
                active: selected.area === id && selected.type === typeId,
              }"
              @click="toSelect(typeId, id)"
            >
              {{ name }}{{ typeName }}
            </a>
          </li>
        </template>
      </ul>
    </div>
    <div class="singers">
      <r-title title="热门歌手" />
      <ul v-if="selected.area >= 0 " class="initial">
        <li
          v-for="{ id, name } in initials"
          :key="id"
          @click="selectInitial(id)"
        >
          <a :class="{ active: selected.initial === id }">{{ name }}</a>
        </li>
      </ul>
      <ul class="artists">
        <m-artist
          v-for="artist in hotArtists"
          :artist="artist"
          :key="artist.id"
        />
      </ul>
      <ul class="artists2">
        <li class="artist" v-for="{ id, name, accountId } in artists" :key="id">
          <router-link class="name row1" :to="`/artist?${id}`">
            {{ name }}
          </router-link>
          <router-link class="user icon-bg" :to="`/user?${accountId}`" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { useArtists } from "@/hook/discover/singer";
import RTitle from "@/components/RTitle.vue";
import MArtist from "@/components/MArtist.vue";
export default {
  components: { RTitle, MArtist },
  name: "Singer",
  setup() {
    const {
      artists,
      hotArtists,
      areas,
      types,
      selected,
      toSelect,
      initials,
      selectInitial,
    } = useArtists();
    return {
      artists,
      hotArtists,
      areas,
      types,
      selected,
      toSelect,
      initials,
      selectInitial,
    };
  },
};
</script>
<style lang="scss" scoped>
.singer-category {
  width: 160px;
  padding: 51px 10px 40px;
  .area {
    &:not(:first-of-type) {
      margin: 5px 0 0;
      padding-top: 16px;
      border-top: 1px solid #d3d3d3;
    }
    h3 {
      height: 25px;
      padding-left: 14px;
      font-size: 16px;
    }
    li {
      width: 160px;
      height: 29px;
      line-height: 29px;
      margin-bottom: 2px;
      overflow: hidden;
      a {
        height: 29px;
        line-height: 29px;
        float: left;
        background: url("~@/assets/discover/singer/singer.png");
        background-position: 0 -30px;
        padding-left: 27px;
        width: 133px;
        &.active {
          color: #c20c0c;
          background-position: 0 0;
        }
      }
    }
  }
}
.singers {
  width: 799px;
  padding: 40px;
  box-sizing: border-box;
  .initial {
    display: flex;
    margin-top: 20px;
    margin-left: -3px;
    li {
      margin-left: 3px;
      font-size: 14px;
      &:last-of-type,
      &:first-of-type {
        a {
          width: 45px;
        }
      }
      a {
        display: inline-block;
        height: 24px;
        line-height: 24px;
        width: 21px;
        text-align: center;
        &.active {
          background: #c20c0c;
          border-radius: 2px;
          color: #fff;
        }
      }
    }
  }
  .r-tit {
    height: 40px;
    ::v-deep .title {
      font-size: 24px;
    }
  }
  .artists {
    margin: 20px 0 0 -17px;
    overflow: hidden;
    border-bottom: 1px dotted #999;
    margin-bottom: 12px;
  }
  .artists2 {
    overflow: hidden;
    margin-left: -17px;
    .artist {
      float: left;
      height: 30px;
      width: 130px;
      margin-left: 17px;
      line-height: 23px;
      display: flex;
      align-items: center;
      .name {
        max-width: 105px;
      }
      .user {
        width: 17px;
        height: 18px;
        background-position: 0 -740px;
        margin-left: 2px;
      }
    }
  }
}
</style>
