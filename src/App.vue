<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts" setup>
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
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