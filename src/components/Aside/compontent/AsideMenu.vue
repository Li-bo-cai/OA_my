<template>
  <el-menu text-color="#232323" :default-active="Routes.path" :router="true" v-if="Routes">
    <template v-for="item in Routes">
      <el-menu-item v-if="item.meta && !item.meta.hasChild" :key="item.name" :index="item.path">
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>

      <el-sub-menu v-else-if="item.meta && item.meta.hasChild" :key="item.name" :index="item.path">
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item v-for="_item in item.children" :key="_item.name" :index="`${item.path}/${_item.path}`">
          <template #title>
            <span>{{ _item.meta.title }}</span>
          </template>
        </el-menu-item>
      </el-sub-menu>

    </template>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["Routes"],
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.el-menu {
  border-right: none;
  width: 140px;
  padding-top: 30px;
  .el-menu-item{
    height: 35px;
    line-height: 35px;
  }
}
</style>