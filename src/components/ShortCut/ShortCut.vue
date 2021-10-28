<template>
  <div class="short_cut_box" ref="shortCutBox">
    <div class="top">
      <ShortTop />
    </div>
    <div class="bottom">
      <ShortBottom />
    </div>
  </div>
</template>

<script lang="ts">
import ShortTop from "./compontents/ShortTop.vue";
import ShortBottom from "./compontents/ShortBottom.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    ShortTop,
    ShortBottom,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.short_cut_box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 20px);
  padding: 10px 0;
  border-left: 1px solid #ccc;
}
</style>