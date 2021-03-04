<template>
  <li>
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
import { PropType } from 'vue';
import { IProgram } from '@/model/discover';
export default {
  name: "DJRadioRecommend",
  props: {
      program: {
          type: Object as PropType<IProgram>
      }
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.play {
            margin-left: 0;
          }

</style>
