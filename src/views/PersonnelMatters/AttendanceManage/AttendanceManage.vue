<template>
  <div>
    <div class="attendance_head">
      <Breadcrumb />
    </div>
    <div class="attendance_body">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="考勤管理" name="att_list">
          <AttendanceList />
        </el-tab-pane>
        <el-tab-pane label="考勤修正" name="att_edit">配置管理</el-tab-pane>
        <el-tab-pane label="考勤机管理" name="att_machine">角色管理</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AttendanceList from "./compontents/AttendanceList.vue";
export default defineComponent({
  components: {
    Breadcrumb,
    AttendanceList,
  },
  setup() {
    var activeName = ref<string>("att_list");

    const handleClick = (tab: any, event: any) => {
      console.log(123);
    };
    return {
      activeName,
      handleClick,
    };
  },
});
</script>

<style scoped>
</style>