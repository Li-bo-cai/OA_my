<template>
  <div>
    <div className="dnd-wrap">
      <div data-type="rect" className="dnd-rect" onMouseDown={this.startDrag}>
        Rect
      </div>
      <div data-type="circle" className="dnd-circle" onMouseDown={this.startDrag}>
        Circle
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";
import { startDrag } from "./dnd";

export default defineComponent({
  setup() {
    // nextTick(() => {
        
    // });
    return {};
  },
});
</script>

<style scoped>
</style>