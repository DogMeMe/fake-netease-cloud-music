<template>
  <m-top />
  <router-view />
  <m-foot />
  <m-up />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MFoot from "./components/MFoot.vue";
import MTop from "./components/MTop.vue";
import MUp from "./components/MUp.vue";
export default defineComponent({
  components: {
    MTop,
    MFoot,
    MUp,
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
