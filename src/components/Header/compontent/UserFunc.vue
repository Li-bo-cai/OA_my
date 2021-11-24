<template>
  <div class="user_func">
    <div class="user_info">
      <img :src="require('@/assets/images/1.jpg')" alt="">
    </div>
    <div class="uer_search">
      <el-input placeholder="搜索功能" v-model="input3">
        <template #suffix>
          <i class="el-input__icon el-icon-search"></i>
        </template>
      </el-input>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.user_func {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}
.user_info {
}
.uer_search {
  ::v-deep .el-input__inner {
    height: 30px;
    line-height: 30px;
  }
}
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}
</style>