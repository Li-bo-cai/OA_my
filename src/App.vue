<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts">
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  components: {
    [ElConfigProvider.name]: ElConfigProvider,
  },
  setup() {
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
    return {
      locale: zhCn,
    };
  },
});
</script>

<style scoped>
</style>