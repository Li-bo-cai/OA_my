<template>
  <div>
    <el-scrollbar>
      <el-tabs v-model="visitedViewsValue" type="card" editable @edit="handleTabsEdit">
        <el-tab-pane v-for="item in visitedViews" :key="item.name" :label="item.title" :name="item.name">
          <router-view></router-view>
        </el-tab-pane>
      </el-tabs>
    </el-scrollbar>
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