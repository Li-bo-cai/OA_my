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
            <el-input prefix-icon="el-icon-user" v-model="loginForm.account" type="text" placeholder="手机号/员工工号"
              ref="ruleForm" tabindex="2"></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password" class="form_item">
            <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" type="text" placeholder="密码" tabindex="2">
            </el-input>
          </el-form-item>
          <div class="hint">密码为8-16位大小写字母、数字其中两种组合，不可包含空格、中文，特殊符号等字符</div>
          <el-button class="sendBtn" type="info" @click="handleLogin">登录</el-button>
        </el-form>
        <p @click="forget_pwd">忘记密码？</p>
      </template>

      <!-- 忘记密码 -->
      <template v-if="!state">
        <div class="title">找回密码</div>
        <el-form :model="forgetForm" :rules="loginRules" ref="ruleForm">
          <!-- 账号 -->
          <el-form-item prop="username" class="form_item">
            <el-input prefix-icon="el-icon-user" v-model="forgetForm.account" type="number" placeholder="手机号/员工工号"
              ref="ruleForm" tabindex="2"></el-input>
          </el-form-item>
          <!-- 验证码 -->
          <el-form-item prop="code" class="form_item">
            <div class="note">
              <el-input prefix-icon="el-icon-message" v-model="forgetForm.phone_code" type="number" maxlength="6"
                placeholder="短信验证码" tabindex="2"></el-input>
              <el-button class="get_code" type="primary" :disabled="disabled" @click="get_code">{{ codeMsg }}
              </el-button>
            </div>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password" class="form_item">
            <el-input prefix-icon="el-icon-lock" v-model="forgetForm.pass" type="text" placeholder="请输入新密码"
              tabindex="2"></el-input>
          </el-form-item>
          <div class="hint">密码为8-16位大小写字母、数字其中两种组合， 不可包含空格、中文，特殊符号等字符</div>
          <el-button class="sendBtn" type="info">确定</el-button>
        </el-form>
        <p @click="go_login">返回登录</p>
      </template>

    </div>
  </div>
</template>

<script setup lang="ts">
import { insideLogin } from "@/api/user/user.api";
import { inject, reactive, ref } from "vue";
import loginRulesTS from "./loginRuls";
import { ElMessage } from "element-plus";
// 获取输入数据
const usVuex: any = inject("usVuex");
const socket: any = inject("socket");

const { loginRules, codeMsg, disabled, } = loginRulesTS()
// 定义登录数据
const loginForm: insideLogin = reactive({
  account: "yw800100",
  password: "yw12345678",
});

// 定义忘记密码数据
interface insideforget {
  account: string;
  phone_code: string;
  pass: string;
}
const forgetForm: insideforget = reactive({
  account: "",
  phone_code: "",
  pass: "",
});
// 切换登录与忘记密码
let state = ref<boolean>(true);

// 方法
// 忘记密码
const forget_pwd = () => {
  state.value = false;
};
// 去登录
const go_login = () => {
  state.value = true;
};
// 点击登录
const handleLogin = () => {
  usVuex.useActions("loginModule", "GET_LOGIN", loginForm);
  socket.emit({
    action: "/api/message/bind",
    receive: "/api/message/bind",
    data: { number: loginForm.account },
  });
};
// 获取验证码
const get_code = () => {
  if (forgetForm.account) {
    usVuex.useActions("loginModule", "GET_PHONE_CODE", forgetForm.account);
  } else {
    ElMessage.error("请先输入手机号或员工信息");
  }
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
    font-size: 28px;
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

.hint {
  font-size: 14px;
  padding: 0 25px;
  color: rgba(0, 0, 0, 0.2);
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
      border: 1px solid #ccc;
    }
  }

  p {
    float: right;
    cursor: pointer;
  }

  .title {
    font-size: 28px;
    margin-bottom: 30px;
  }

  .get_code {
    width: 200px;
    margin-left: 30px;
  }
}

.sendBtn {
  margin: 30px 0;
}

.note {
  display: flex;
}

.el-button {
  width: 100%;
  padding: 0;
}
</style>