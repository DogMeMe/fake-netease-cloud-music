<template>
  <m-top />
  <router-view />
  <m-foot />
  <m-up />
  <m-play-bar />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MFoot from "./components/MFoot.vue";
import MPlayBar from "./components/MPlayBar.vue";
import MTop from "./components/MTop.vue";
import MUp from "./components/MUp.vue";
export default defineComponent({
  components: {
    MTop,
    MFoot,
    MUp,
    MPlayBar
  },
});
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f2f2f2;
}
</style>
