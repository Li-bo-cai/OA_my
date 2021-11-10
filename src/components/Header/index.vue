<template>
  <div class="head_top">
    <div>
      <UserHeader />
    </div>
    <div>用户菜单</div>
  </div>
</template>

<script>
import UserHeader from "./compontent/UserHeader.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    UserHeader,
  },
  setup() {
    return {};
  },
});
</script>


<style scoped lang="scss">
.head_top {
  display: flex;
}
</style>