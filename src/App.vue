<template>
  <m-top />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MTop from "./components/MTop.vue";
export default defineComponent({
  components: {
    MTop,
  },
});
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
