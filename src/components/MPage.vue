
<template>
  <a
    class="pre fast button-bg"
    :class="{ disabled: cur === 1 }"
    @click="toPrePage"
    >上一页</a
  >
  <a class="page button-bg" :class="{ active: 1 === cur }" @click="toPage(1)">
    1
  </a>
  <span v-show="cur > max / 2 + 1">...</span>
  <template v-for="i in total" :key="i">
    <a
      v-if="i > 1 && i < total"
      class="page button-bg"
      :class="{ active: i === cur }"
      v-show="showItem(i)"
      @click="toPage(i)"
    >
      {{ i }}
    </a>
  </template>
  <span v-show="cur < total - max / 2">...</span>
  <a
    class="page button-bg"
    :class="{ active: total === cur }"
    @click="toPage(total)"
    >{{ total }}</a
  >
  <a
    class="next fast button-bg"
    :class="{ disabled: cur === total }"
    @click="toNextPage"
    >下一页</a
  >
</template>

<script lang="ts">
import { SetupContext } from 'vue';
export default {
  name: "MPage",
  props: {
    total: {
      type: Number,
      required: true,
    },
    cur: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 8,
    },
  },
  setup(props: any, ctx: SetupContext) {
    const showItem = (i: number): boolean => {
      if (
        props.cur > props.max / 2 + 1 &&
        props.cur < props.total - props.max / 2 &&
        i >= props.cur - 3 &&
        i <= props.cur + 3
      ) {
        return true;
      }
      if (props.cur <= props.max / 2 + 1 && i <= props.max) {
        return true;
      }
      if (
        props.cur >= props.total - props.max / 2 &&
        i >= props.total - props.max + 1
      ) {
        return true;
      }
      return false;
    };

    const toPage = (i: number) => {
      ctx.emit("to-page", i);
    };
    const toPrePage = () => {
      ctx.emit("to-page", props.cur - 1);
    };
    const toNextPage = () => {
      ctx.emit("to-page", props.cur + 1);
    };
    return {
      showItem,
      toPage,
      toPrePage,
      toNextPage,
    };
  },
};
</script>

<style scoped lang="scss">
.fast {
  text-align: left;
  height: 24px;
  line-height: 24px;
  margin: 0 1px 0 2px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 2px;
  vertical-align: middle;
  text-decoration: none;
  &.disabled {
    color: #cacaca;
  }
  &.pre {
    background-position: 0 -560px;
    padding-left: 22px;
    width: 47px;
    &.disabled {
      background-position: 0 -620px;
    }
  }
  &.next {
    background-position: -75px -560px;
    padding-left: 12px;
    width: 57px;
    &.disabled {
      background-position: -75px -620px;
    }
  }
}
.page {
  height: 22px;
  display: inline-block;
  padding: 0 8px;
  background-color: #fff;
  line-height: 22px;
  border: 1px solid #ccc;
  border-radius: 2px;
  vertical-align: middle;
  margin: 0 1px 0 2px;
  background-position: 0 9999px;
  &.active {
    background-position: 0 -650px;
    color: #fff;
  }
  &:hover {
    border-color: #333;
    text-decoration: none;
  }
}
</style>