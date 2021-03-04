<template>
  <li class="zebra-li">
    <a class="play">
      <img :src="program.coverUrl" />
      <i class="iconall-bg" />
    </a>
    <div class="cnt">
      <a class="row1">{{ program.name }}</a>
      <a class="row1">{{ program.radio.name }}</a>
    </div>
    <a class="category">{{ program.radio.category }}</a>
  </li>
</template>
<script lang="ts">
import { PropType } from "vue";
import { IProgram } from "@/model/discover";
export default {
  name: "MRecDj",
  props: {
    program: {
      type: Object as PropType<IProgram>,
    },
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
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
</style>
