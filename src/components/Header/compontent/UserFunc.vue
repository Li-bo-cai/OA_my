<template>
  <div class="user_func">
    <div class="user_commom">
      <div class="user_info">
        <img :src="require('@/assets/images/1.jpg')" alt="">
        <div class="img_shade">切换<br />头像</div>
      </div>
      <div class="log_out">
        <span>切换账号 <i class="iconfont icon-qiehuan" title="切换账号"></i></span>
        <span>注销</span>
      </div>
    </div>
    <div class="call_us">
      <span>问题反馈</span>
    </div>
    <div class="uer_search">
      <el-input placeholder="功能搜索" v-model="input3">
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
  .user_commom {
    display: flex;
    align-items: center;
  }
}
.user_info {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  &:hover .img_shade {
    top: 0;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
  }
  .img_shade {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 7px;
    color: #fff;
    padding-top: 8px;
    text-align: center;
    background-color: rgb(116, 116, 116, 0.5);
    cursor: pointer;
  }
}
.log_out {
  flex: 1;
  font-size: 12px;
  color: #ccc;
  i {
    font-size: 12px;
  }
  span {
    padding: 5px;
    cursor: pointer;
    &:hover {
      color: #5777e7;
    }
  }
}
.call_us {
  width: 60px;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  margin: 5px;
  &:hover {
    color: #5777e7;
  }
}
.uer_search {
  flex: 1;
  ::v-deep .el-input__inner {
    height: 30px;
    line-height: 30px;
  }
}
</style>