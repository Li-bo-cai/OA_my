<template>
  <!-- 展开栏 -->
  <div class="operation">
    <div @click="editInfo">
      <img src="../../../assets/images/ziliao@2x.png" alt="">
      <span>个人资料</span>
    </div>
    <div @click="dialog1 = true">
      <img src="../../../assets/images/anquan@2x.png" alt="">
      <span>安全中心</span>
    </div>
    <div @click="dialog = true">
      <img src="../../../assets/images/tuichu@2x.png" alt="">
      <span>退出登录</span>
    </div>
  </div>

  <!-- 退出登录提示框 -->
  <template>
    <el-dialog append-to-body v-model="dialog" width="373px">
      <div class="dialog_tit_tit">是否退出登录?</div>
      <div class="dialog-footer_btn">
        <el-button @click="dialog = false">取 消</el-button>
        <el-button type="primary" @click="logout">确 定</el-button>
      </div>
    </el-dialog>
  </template>
  <!-- 安全中心提示框 -->
  <template>
    <el-dialog append-to-body v-model="dialog1" width="558px">
      <template #title>
        <span style="font-size:20px;font-weight:bold;">密码修改</span>
      </template>
      <div class="input1_idx">
        <p>旧密码</p>
        <el-input placeholder="请输入旧密码" v-model="input"></el-input>
      </div>
      <div class="input1_idx">
        <p>新密码</p>
        <el-input show-password type="text" onfocus="this.type='password'" autocomplete="off" placeholder="请输入新密码" v-model="input1" @input="passwordInput"></el-input>
      </div>
      <div class="bulletin">
        <p class="bulletin_text">密码为8-16位大小写字母、特殊符号等字符、数字至少两种组合，
          不可包含空格、中文</p>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialog1 = false">取 消</el-button>
          <el-button type="primary" @click="change_password = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const dialog = ref<boolean>(false);
    const dialog1 = ref<boolean>(false);
    return {
      dialog,
      dialog1,
    };
  },
});
</script>

<style scoped lang='scss'>
.operation {
  width: 220px;
  height: 210px;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.16);
  user-select: none;
  div {
    display: flex;
    align-items: center;
    padding: 23px 30px;
    &:hover {
      background: #f2f3f7;
    }
  }
  img {
    width: 25px;
    height: 25px;
    margin-right: 16px;
  }
  span {
    font-size: 18px;
    color: #323233;
  }
}

.dialog_tit_tit {
  text-align: center;
  font-size: 20px;
  color: #2a2a2a;
  font-weight: bold;
  opacity: 0.8;
}

.dialog-footer {
  .el-button:nth-child(1) {
    width: 120px;
    height: 42px;
    border: 1px solid #999;
    border-radius: 5px;
  }
  .el-button:nth-child(2) {
    width: 120px;
    height: 42px;
  }
  .el-button:nth-child(1):hover {
    background: #fff;
    color: #000;
    border: 1px solid #000;
  }
}

.input1_idx {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  p {
    margin-right: 34px;
  }
  .el-input {
    width: 375px;
  }
}
.bulletin {
  width: 100%;
  &::after {
    content: "";
    display: block;
    clear: both;
    overflow: hidden;
  }
  .bulletin_text {
    width: 375px;
    float: right;
    font-size: 14px;
    font-weight: bold;
    color: #000000;
    opacity: 0.4;
  }
}

.dialog_tit_idx {
  font-size: 20px;
  color: #2a2a2a;
  font-weight: bold;
  opacity: 0.8;
}
.dialog-footer_idx {
  .el-button:nth-child(1) {
    width: 120px;
    height: 42px;
    border: 1px solid #999;
    border-radius: 5px;
  }

  .el-button:nth-child(2) {
    width: 120px;
    height: 42px;
    background: #2c2844;
    border-radius: 5px;
  }
  .el-button:nth-child(1):hover {
    background: #fff;
    color: #000;
    border: 1px solid #000;
  }

  .el-button:nth-child(2):hover {
    color: #fff;
    border: 1px solid #000;
  }
}
</style>