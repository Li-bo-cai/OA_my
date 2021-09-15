<template>
  <el-menu text-color="#232323" :router="true">
    <el-menu-item index="/">
      <template v-slot:title>
        <i class="sell-a-01"></i>
        <span>首页</span>
      </template>
    </el-menu-item>

    <el-menu-item index="/organization">
      <template #title>
        <i class="sell-a-02"></i>
        <span>集团组织架构管理</span>
      </template>
    </el-menu-item>

    <el-submenu index="/personnelMatters">
      <template #title>
        <i class="sell-a-03"></i>
        <span>人事管理</span>
      </template>
      <el-menu-item index="/personnelMatters/post-manage">
        <template #title>
          <span>岗位管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/personnelMatters/employee-manage">
        <template #title>
          <span>员工管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/personnelMatters/attendance-manage">
        <template #title>
          <span>考勤管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/personnelMatters/holiday-manage">
        <template #title>
          <span>休假管理</span>
        </template>
      </el-menu-item>
    </el-submenu>

    <el-menu-item index="/external">
      <template #title>
        <i class="sell-a-04"></i>
        <span>外部资源管理</span>
      </template>
    </el-menu-item>

    <el-submenu index="/companyAnnounce">
      <template #title>
        <i class="sell-a-05"></i>
        <span>公司公告</span>
      </template>

      <el-menu-item index="/groupDynamics">
        <template #title>
          <i class="sell-a-06"></i>
          <span>集团动态</span>
        </template>
      </el-menu-item>

      <el-menu-item index="/document">
        <template #title>
          <i class="sell-a-07"></i>
          <span>文档中心</span>
        </template>
      </el-menu-item>

      <el-menu-item index="/message">
        <template #title>
          <i class="sell-a-08"></i>
          <span>消息中心</span>
        </template>
      </el-menu-item>
    </el-submenu>

  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { constantRoutes } from "@/router/constantRoutes";
import { asyncRoutes } from "@/router/asyncRoutes";

export default defineComponent({
  setup() {
    const Router = [...constantRoutes, ...asyncRoutes];
    return {
      Router,
    };
  },
});
</script>

<style scoped>
</style>