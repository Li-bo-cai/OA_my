<template>
  <div class="aside_box">
    <div class="user_header">
      <AsideHeader />
    </div>
    <el-scrollbar class="menu_scroll">
      <AsideMenu />
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AsideHeader from "./AsideHeader.vue";
import AsideMenu from "./AsideMenu.vue";
export default defineComponent({
  components: {
    AsideHeader,
    AsideMenu,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.aside_box {
  display: flex;
  flex-direction: column;
}
.user_header {
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
.menu_scroll {
  height: calc(100vh - 180px);
}
</style>