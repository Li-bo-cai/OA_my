<template>
  <div class="aside_box">
    <div class="user_header">
      <AsideHeader />
    </div>
    <div class="menu_content">
      <AsideMenu />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AsideHeader from "./compontent/AsideHeader.vue";
import AsideMenu from "./compontent/AsideMenu.vue";
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
  position: relative;
}
.user_header {
  padding-bottom: 20px;
  position: absolute;
  top: 0;
  width: 240px;
}
</style>