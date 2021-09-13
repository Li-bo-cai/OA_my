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
            <el-input v-model="loginForm.password" :type="passwordType" placeholder="密码" tabindex="2"></el-input>
          </el-form-item>
          <el-button class="sendBtn" type="info">登录</el-button>
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
            <el-input v-model="forgetForm.username" placeholder="手机号/员工工号" ref="ruleForm" tabindex="2"></el-input>
          </el-form-item>
          <!-- 验证码 -->
          <el-form-item prop="code" class="form_item">
            <img src="@/assets/images/key.png" alt="">
            <el-input v-model="forgetForm.code" maxlength="6" placeholder="短信验证码" tabindex="2"></el-input>
            <el-button class="get_code" type="primary" :disabled="disabled" @click="get_code">{{codeMsg}}</el-button>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password" class="form_item">
            <img src="@/assets/images/key.png" alt="">
            <el-input v-model="forgetForm.password" :type="passwordType" placeholder="请输入新密码" tabindex="2"></el-input>
          </el-form-item>
          <el-button class="sendBtn" type="info">确定</el-button>
        </el-form>
        <p @click="go_login">返回登录</p>
      </template>

    </div>
  </div>
</template>

<script lang="ts">
import { login } from "../../api/user/user.api";
import { reactive, ref } from "vue";
import loginRules from "./loginRuls";
export default {
  setup() {
    // 定义登录数据
    const loginForm = reactive({
      username: "",
      password: "",
    });
    // 定义忘记密码数据
    const forgetForm = reactive({
      username: "",
      code: "",
      password: "",
    });
    // 切换登录与忘记密码
    let state = ref<boolean>(true);
    let codeMsg = ref<string>("获取验证码");
    let disabled = ref<boolean>(false);
    let time = 60;
    // 方法
    const forget_pwd = () => {
      state.value = false;
    };
    const go_login = () => {
      state.value = true;
    };
    const get_code = () => {
      disabled.value = true;
      count_down();
    };
    //倒计时事件
    const count_down = () => {
      let timer = setInterval(() => {
        if (time > 0) {
          time--;
          codeMsg.value = `重新获取(${time})`;
        } else {
          clearInterval(timer);
          codeMsg.value = "获取验证码";
          disabled.value = false;
        }
        console.log(time);
      }, 1000);
    };

    return {
      ...loginRules(), //引入规则
      state, //状态
      codeMsg, //按钮文本
      disabled, //按钮状态
      loginForm,
      forgetForm,
      forget_pwd, //忘记密码
      go_login, //返回登录
      get_code, //返回点击事件
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
  margin: 80px 0 30px 0;
}
.el-button {
  width: 100%;
  padding: 0;
}
</style>