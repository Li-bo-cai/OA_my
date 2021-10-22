<template>
  <el-menu text-color="#232323" :default-active="route.path" :router="true">
    <template v-for="item in Routes">
      <el-menu-item v-if="item.meta && !item.meta.hasChild" :index="item.path" :key="item.name">
        <template #title>
          <i :class="item.meta.icon"></i>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>

      <el-sub-menu v-else-if="item.meta && item.meta.hasChild" :index="item.path" :key="item.name">
        <template #title>
          <i :class="item.meta.icon"></i>
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
import { constantRoutes } from "@/router/constantRoutes";
import { asyncRoutes } from "@/router/asyncRoutes";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const Routes = [...constantRoutes, ...asyncRoutes]; //全部路由
    const route = useRoute();
    // console.log(Routes);

    return {
      Routes,
      route,
    };
  },
});
</script>

<style scoped lang="scss">
i {
  margin-right: 20px;
}
.el-menu {
  border-right: none;
}
</style>