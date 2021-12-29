<template>
  <div>
    <div className="dnd-wrap">
      <div data-type="rect" className="dnd-rect" @onMouseDown="startDrag">
        Rect
      </div>
      <div data-type="circle" className="dnd-circle" @onMouseDown="startDrag">
        Circle
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const startDrag = ref();

    return { startDrag };
  },
});
</script>

<style scoped>
</style>