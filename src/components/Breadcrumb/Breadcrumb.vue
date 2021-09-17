<template>

  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>

</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  setup() {
    const route = useRoute();
    console.log(route);

    onMounted(() => {
      const id = route.params.id;
      console.log(id);
    });

    return {};
  },
});
</script>

<style scoped>
</style>