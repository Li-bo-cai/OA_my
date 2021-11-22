<template>
  <div class="drag-target" v-drag>
    <div class="message_body">

    </div>
    <i class="el-icon-close close_pop" @click="close_window"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  computed: {
    ...mapState("shortCutModule", ["style"]),
  },
  setup() {
    const usVuex: any = inject("usVuex");

    // 关闭弹窗
    const close_window = () => {
      usVuex.useMutations("shortCutModule", "SET_MESSAGE_DIALOG", false);
    };
    return {
      close_window,
    };
  },
});
</script>

<style scoped lang="scss">
.drag-target {
  position: fixed;
  right: 5px;
  bottom: 5px;
  z-index: 9;
  width: 600px;
  height: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px #ccc;
  background: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
}
.close_pop {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 18px;
  &:hover {
    background: rgb(247, 247, 247);
  }
}
.message_body {
  width: 100%;
  height: 100%;
  background-color: #f60;
}
</style>