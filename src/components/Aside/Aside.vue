<template>
  <div class="aside_box">
    <div class="user_header">
      <AsideHeader />
    </div>
    <div>
      <AsideMenu />
    </div>
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
.user_header{
    margin-bottom: 30px;
}
</style>