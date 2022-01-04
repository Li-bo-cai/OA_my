<template>
  <div>
    <div className="dnd-wrap">
      <div data-type="rect" className="dnd-rect" @mousedown="startDrag">
        Rect
      </div>
      <div data-type="circle" className="dnd-circle" @mousedown="startDrag">
        Circle
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";
import { createGraphic } from "./graph";

export default defineComponent({
  setup() {
    const { dnd, graph, nodeRect, nodeCircle } = createGraphic();
    // console.log(dnd, graph, nodeRect, nodeCircle);

    nextTick(() => {
      console.log("我是dnd-wrap页面");
    });
    const startDrag = (e: any) => {
      const target = e.currentTarget;
      const type = target.getAttribute("data-type");
      const node = type === "rect" ? nodeRect : nodeCircle;
      // console.log(dnd);

      dnd.start(node, e);
    };

    return { startDrag };
  },
});
</script>

<style scoped lang="scss">
.dnd-wrap {
  width: 200px;
  padding: 16px;
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
}

.dnd-rect {
  width: 100px;
  height: 40px;
  border: 2px solid #31d0c6;
  text-align: center;
  line-height: 40px;
  margin: 16px;
  cursor: move;
}

.dnd-circle {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 2px solid #31d0c6;
  text-align: center;
  line-height: 60px;
  margin: 16px;
  cursor: move;
}
</style>