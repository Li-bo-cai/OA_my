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
import { defineComponent, nextTick, reactive } from "vue";
import { createGraphic } from "./graph";

export default defineComponent({
  setup() {
    let graph = reactive<any>(null);
    let dnd = reactive<any>(null);

    nextTick(() => {
      dnd = createGraphic();
    });

    const startDrag = (e: any) => {
      const target = e.currentTarget;
      const type = target.getAttribute("data-type");
      const node =
        type === "rect"
          ? graph.createNode({
              width: 100,
              height: 40,
              attrs: {
                label: {
                  text: "Rect",
                  fill: "#6a6c8a",
                },
                body: {
                  stroke: "#31d0c6",
                  strokeWidth: 2,
                },
              },
            })
          : graph.createNode({
              width: 60,
              height: 60,
              shape: "html",
              html: () => {
                const wrap = document.createElement("div");
                wrap.style.width = "100%";
                wrap.style.height = "100%";
                wrap.style.display = "flex";
                wrap.style.alignItems = "center";
                wrap.style.justifyContent = "center";
                wrap.style.border = "2px solid rgb(49, 208, 198)";
                wrap.style.background = "#fff";
                wrap.style.borderRadius = "100%";
                wrap.innerText = "Circle";
                return wrap;
              },
            });
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