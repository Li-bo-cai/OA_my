<template>
  <div class="login-container">
    <div class="tab-left">
      <p class="title">Office Automation</p>
      <p class="text">渝万传媒 OA云办系统</p>
      <div class="bgImg">
        <img src="../../assets/images/login-bg.png" alt="">
      </div>
    </div>
    <div class="tab-right">
      <!-- 登录时的头像 -->
      <div class="user_img">
        <img class="formIcon" :src="user_head" />
      </div>

      <el-from :model="loginForm" :rules="loginRules">
        <!-- 账号 -->
        <el-from-item prop="username">
          <el-input type="number" ref="username" v-model="loginForm.username" placeholder="手机号/员工工号" name="username" tabindex="2"></el-input>
        </el-from-item>
        <!-- 密码 -->
        <el-from-item prop="password">
          <el-input :key="passwordType" ref="password" v-model="loginForm.password" :type="passwordType" placeholder="密码" name="password" tabindex="2"></el-input>
        </el-from-item>
      </el-from>

    </div>
  </div>
</template>

<script lang="ts">
import { login } from "../../api/user/user.api";
import { reactive } from "vue";

export default {
  setup() {
    // 定义所有数据导出
    const state = reactive({
      loginForm: {},
    });

    return {
      state,
    };
  },
};
</script>

<style scoped lang="scss">
.login-container {
  width: 800px;
  height: 460px;
}
</style>