<template>
  <div>
    <el-button size="mini" plain icon="el-icon-folder-checked" @click="edit_btn">保存</el-button>
    <el-button size="mini" plain icon="el-icon-delete" @click="edit_btn">清空</el-button>
    <el-button size="mini" plain icon="el-icon-rank" @click="edit_btn">实际尺寸</el-button>
    <el-button size="mini" plain icon="el-icon-picture-outline" @click="edit_btn">下载SVG</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>