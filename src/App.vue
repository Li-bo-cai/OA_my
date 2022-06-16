<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(() => {
  // 禁止滚轮缩放事件
  window.addEventListener(
    "mousewheel",
    (event: any) => {
      if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
      }
    },
    { passive: false }
  );
});
</script>

<style scoped>
</style>