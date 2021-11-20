<template>
  <div class="drag-target" v-drag>

  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.drag-target {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 9;
  width: 300px;
  height: 100px;
  background: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
}
.message_box {
  cursor: pointer;
}
</style>