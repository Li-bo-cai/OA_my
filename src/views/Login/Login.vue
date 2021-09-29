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
            <el-input v-model="loginForm.account" type="number" placeholder="手机号/员工工号" ref="ruleForm" tabindex="2"></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password" class="form_item">
            <img src="@/assets/images/key.png" alt="">
            <el-input v-model="loginForm.password" type="text" placeholder="密码" tabindex="2"></el-input>
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
            <img src="@/assets/images/user.png" alt="">
            <el-input v-model="forgetForm.key" type="number" placeholder="手机号/员工工号" ref="ruleForm" tabindex="2"></el-input>
          </el-form-item>
          <!-- 验证码 -->
          <el-form-item prop="code" class="form_item">
            <img src="@/assets/images/key.png" alt="">
            <el-input v-model="forgetForm.phone_code" type="number" maxlength="6" placeholder="短信验证码" tabindex="2"></el-input>
            <el-button class="get_code" type="primary" :disabled="disabled" @click="get_code">{{codeMsg}}</el-button>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password" class="form_item">
            <img src="@/assets/images/key.png" alt="">
            <el-input v-model="forgetForm.pass" type="text" placeholder="请输入新密码" tabindex="2"></el-input>
          </el-form-item>
          <div class="hint">密码为8-16位大小写字母、数字其中两种组合， 不可包含空格、中文，特殊符号等字符</div>
          <el-button class="sendBtn" type="info">确定</el-button>
        </el-form>
        <p @click="go_login">返回登录</p>
      </template>

    </div>
  </div>
</template>

<script lang="ts">
import { insideLogin } from "@/api/user/user.api";
import { defineComponent, getCurrentInstance, reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import loginRules from "./loginRuls";
export default defineComponent({
  setup() {
    // 获取输入数据
    const store = useStore();
    const router = useRouter();
    const { proxy }: any = getCurrentInstance();
    const usVuex = proxy.usVuex;

    // 定义登录数据
    let a!: number;
    const loginForm: insideLogin = reactive({
      account: a,
      password: "",
    });

    // 定义忘记密码数据
    interface insideforget {
      key: string;
      phone_code: string;
      pass: string;
    }
    const forgetForm: insideforget = reactive({
      key: "",
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
    const handleLogin = async () => {
      await usVuex.useActions("loginMoudle", "GET_LOGIN", loginForm);
      // router.push({
      //   path: "/",
      // });
    };
    // 获取验证码
    const get_code = () => {
      usVuex.useActions("loginMoudle", "GET_PHONE_CODE");
    };

    return {
      ...loginRules(), //引入规则
      state, //状态
      loginForm,
      forgetForm,
      handleLogin, //点击登录
      get_code, //获取验证码
      forget_pwd, //忘记密码
      go_login, //返回登录
    };
  },
});
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
    // width: 100px;
    margin-left: 30px;
  }
}
:deep .form_item .el-form-item__content {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
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
.sendBtn {
  margin: 30px 0 30px 0;
}
.el-button {
  width: 100%;
  padding: 0;
}
</style>