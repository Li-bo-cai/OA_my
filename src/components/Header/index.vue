<template>
  <div class="head_top">
    <div>
      <HeaderMenu />
    </div>
    <div>
      <UserHeader />
    </div>
  </div>
</template>

<script>
import UserHeader from "./compontent/UserHeader.vue";
import HeaderMenu from "./compontent/HeaderMenu.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    UserHeader,
    HeaderMenu,
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