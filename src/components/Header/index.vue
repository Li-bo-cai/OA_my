<template>
  <div class="head-top">
    <div class="left-box">
      <el-scrollbar ref="scroll" @mousewheel="changeScroll">
        <div class="cros-menu">
          <HeaderMenu />
        </div>
      </el-scrollbar>
    </div>
    <div class="right-box">
      <UserFunc />
    </div>
  </div>
</template>

<script>
import UserFunc from "./component/UserFunc.vue";
import HeaderMenu from "./component/HeaderMenu.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    UserFunc,
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
.head-top {
  display: flex;
  align-items: center;
  .left-box {
    width: 70%;
  }
  .cros-menu {
    margin: 10px 0;
  }
  .right-box {
    width: 30%;
  }
}
</style>
