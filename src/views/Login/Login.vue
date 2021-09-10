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
      <!-- 登录 -->
      <template v-if="state">
        <!-- 登录时的头像 -->
        <div class="user_img">
          <img src="@/assets/images/Logo.png" />
        </div>
        <el-form :model="loginForm" :rules="loginRules" ref="ruleForm">
          <!-- 账号 -->
          <el-form-item prop="username" class="form_item">
            <img src="@/assets/images/user.png" alt="">
            <el-input v-model="loginForm.username" placeholder="手机号/员工工号" ref="ruleForm" tabindex="2"></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password" class="form_item">
            <img src="@/assets/images/key.png" alt="">
            <el-input :key="passwordType" v-model="loginForm.password" :type="passwordType" placeholder="密码" tabindex="2"></el-input>
          </el-form-item>
          <el-button class="loginBtn" type="info">登录</el-button>
        </el-form>
        <p>忘记密码？</p>
      </template>
      <!-- 忘记密码 -->
      <template>
        
      </template>

    </div>
  </div>
</template>

<script lang="ts">
import { login } from "../../api/user/user.api";
import { reactive, ref } from "vue";

export default {
  setup() {
    // 定义所有数据导出
    const loginForm = reactive({
      username: "",
      password: "",
    });
    const state = ref<boolean>(true);
    // 规则
    const loginRules = {
      username: [
        {
          min: 8,
          max: 11,
          message: "长度在 8 到 11 个字符",
          trigger: "blur",
        },
      ],
      password: [],
    };

    return {
      state, //状态
      loginForm,
      loginRules,
    };
  },
};
</script>

<style scoped lang="scss">
.login-container {
  display: flex;
  align-items: center;
  padding: 80px;
}
.tab-left {
  flex: 5;
  margin-right: 80px;
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .text {
    font-size: 20px;
    margin-bottom: 18px;
  }
  .bgImg {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
.tab-right {
  flex: 2;
  padding: 30px;
  .user_img {
    width: 100%;
    margin-bottom: 25px;
    img {
      display: block;
      margin: 0 auto;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
  p{
    float: right;
    cursor: pointer;
  }
}
:deep .form_item .el-form-item__content {
  position: relative;
  display: flex;
  align-items: center;
}
.form_item img {
  position: absolute;
  left: 4px;
  width: 25px;
  height: 25px;
  z-index: 9;
}
:deep .el-input__inner {
  padding-left: 40px;
}
.loginBtn {
  margin: 80px 0 30px 0;
}
.el-button {
  width: 100%;
}
</style>