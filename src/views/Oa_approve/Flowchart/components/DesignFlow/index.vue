<template>
  <div class="design_flow">
    <el-scrollbar class="design_scroll">
      <div class="design_top_btn">
        <el-button size="mini" plain icon="el-icon-folder-checked" @click="save_btn">上一步</el-button>
        <el-button size="mini" plain icon="el-icon-folder-checked" @click="save_btn">下一步</el-button>
        <el-button size="mini" plain icon="el-icon-folder-checked" @click="save_btn">保存</el-button>
        <el-button size="mini" plain icon="el-icon-delete" @click="clear_btn">清空</el-button>
        <el-button size="mini" plain icon="el-icon-rank" @click="regain_btn">实际尺寸</el-button>
        <el-button size="mini" plain icon="el-icon-picture-outline" @click="submit_btn">下载SVG</el-button>
      </div>
      <div class="design_conter">
        <FlowDesigner />
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import FlowDesigner from "./FlowDesigner.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    FlowDesigner,
  },
  setup() {
    // 保存按钮
    const save_btn = () => {
      console.log(123);
    };
    // 保存按钮
    const clear_btn = () => {
      console.log(123);
    };
    // 保存按钮
    const regain_btn = () => {
      console.log(123);
    };
    // 保存按钮
    const submit_btn = () => {
      console.log(123);
    };
    return {
      save_btn,
      clear_btn,
      regain_btn,
      submit_btn,
    };
  },
});
</script>

<style scoped lang="scss">
.design_flow {
  height: 100%;
  .design_scroll {
    height: calc(100vh - 161px);
  }
}
</style>