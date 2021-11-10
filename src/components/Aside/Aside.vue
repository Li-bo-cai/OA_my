<template>
  <div class="aside_box">
    <!-- <div class="user_header">
      <AsideHeader />
    </div> -->
    <el-scrollbar class="menu_scroll">
      <AsideMenu />
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import AsideHeader from "./compontent/AsideHeader.vue";
import AsideMenu from "./compontent/AsideMenu.vue";
export default defineComponent({
  components: {
    // AsideHeader,
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
  height: 100%;
}
.user_header {
  // margin-bottom: 30px;
}
.menu_scroll {
  height: calc(100vh - 60px);
}
</style>