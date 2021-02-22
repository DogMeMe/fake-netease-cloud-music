
<template>
  <div v-show="visible" class="m-up sprite-bg" @click="toUp">回到顶部</div>
</template>
<script lang="ts">
import { onMounted, ref } from "vue";
export default {
  name: "MUp",
  setup() {
    const toUp = () => {
      window.document.documentElement.scrollTop = 0;
    };
    const visible = ref(false);
    onMounted(() => {
      window.addEventListener("scroll", () => {
        visible.value =
          window.document.documentElement.scrollTop > 0;
      });
    });
    return {
      toUp,
      visible,
    };
  },
};
</script>
<style lang="scss" scoped>
.m-up {
  position: fixed;
  text-indent: -9999px;
  left: 50%;
  margin-left: 500px;
  bottom: 160px;
  width: 49px;
  height: 44px;
  background-position: -265px -47px;
}
</style>
