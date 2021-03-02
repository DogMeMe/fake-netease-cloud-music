<template>
  <div class="g-bd">
    <div class="singer-category"></div>
    <div class="singers"></div>
  </div>
</template>
<script lang="ts">
import { useSingerCategory } from "@/hook/discover/singer";
export default {
  name: "Singer",
  setup() {
    useSingerCategory();
    return {};
  },
};
</script>
<style lang="scss" scoped>
.g-bd {
  display: flex;
  .singer-category {
    width: 180px;
  }
}
</style>
