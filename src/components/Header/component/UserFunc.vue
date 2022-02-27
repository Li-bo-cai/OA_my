<template>
  <div class="user-func">
    <div class="user-commom">
      <div class="user-info">
        <img :src="require('@/assets/images/1.jpg')" alt="">
        <div class="img-shade">切换<br />头像</div>
      </div>
      <div class="log-out">
        <span>蒋竺娟<br />(yw***0)</span>
        <span>注销</span>
      </div>
    </div>
    <div class="call-us">
      <span>问题反馈</span>
    </div>
    <div class="uer-search">
      <el-input placeholder="功能搜索" v-model="input3">
        <template #suffix>
          <i class="el-input__icon el-icon-search"></i>
        </template>
      </el-input>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const input3 = null;
    return {
      input3,
    };
  },
});
</script>

<style scoped lang="scss">
.user-func {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  .user-commom {
    display: flex;
    align-items: center;
  }
}
.user-info {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  &:hover .img-shade {
    top: 0;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
  }
  .img-shade {
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
.log-out {
  flex: 1;
  font-size: 12px;
  i {
    font-size: 12px;
  }
  span {
    display: inline-block;
    text-align: center;
    padding: 5px;
  }
  span:last-child {
    color: #ccc;
    cursor: pointer;
    &:hover {
      color: #5777e7;
    }
  }
}
.call-us {
  width: 60px;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  margin: 5px;
  &:hover {
    color: #5777e7;
  }
}
.uer-search {
  flex: 1;
  ::v-deep .el-input__inner {
    height: 30px;
    line-height: 30px;
  }
}
</style>