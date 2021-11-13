<template>
  <div class="head_top">
    <div class="left_box">
      <el-scrollbar ref="scroll" @mousewheel="changeScroll">
        <div class="cros_menu">
          <HeaderMenu />
        </div>
      </el-scrollbar>
    </div>
    <div class="right_box">
      <UserHeader />
    </div>
  </div>
</template>

<script>
import UserHeader from "./compontent/UserHeader.vue";
import HeaderMenu from "./compontent/HeaderMenu.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    UserHeader,
    HeaderMenu,
  },
  setup() {
    let scroll = ref(null);
    const changeScroll = (e) => {
      let wrap = scroll.value.$refs.wrap;
      wrap.scrollLeft = wrap.scrollLeft - e.wheelDelta;
    };
    return {
      scroll,
      changeScroll,
    };
  },
});
</script>

<style scoped lang="scss">
.head_top {
  .left_box {
    width: 70%;
  }
  .cros_menu {
    margin: 10px 0;
  }
}
</style>
