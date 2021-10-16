<template>
  <div class="pagin_ation">
    <el-pagination background :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, prev, pager, next, sizes" :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
    };
  },
});
</script>

<style scoped lang="scss">

</style>