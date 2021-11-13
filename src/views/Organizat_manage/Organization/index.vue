<template>
  <div>
    <div class="origanization_body">
      <!-- 左边部分 -->
      <div class="left_box">
        <!-- 左上盒子 -->
        <div class="letf_top_box">
          <el-button type="primary" @click="showAddCompany=true">新增公司</el-button>
        </div>
        <!-- 左下盒子 -->
        <div class="left_botton_box">
          <LeftBox />
        </div>
      </div>
      <!-- 右边部分 -->
      <div class="right_box">
        <!-- 右上盒子 -->
        <div class="right_top_box">
          <div class="Info">
            <p>部门：{{depart_name}}</p>
            <p>负责人: <span>{{principal?principal:'暂无'}}</span></p>
          </div>
          <div class="edit">
            <el-button type="primary">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </div>
        </div>
        <!-- 右下盒子 -->
        <div class="right_botton_box">
          <RightBox />
        </div>
      </div>
    </div>
    <el-dialog v-model="showAddCompany" width="548px">
      <span class="dialog_tit_tit">新增公司</span>
      <div class="dialog_body">
        <div class="input_company">
          <div><span style="color:red">*</span>公司名称</div>
          <el-input placeholder="请输入公司名称"></el-input>
        </div>
        <div class="change_principal">
          <div>负责人</div>
          <el-autocomplete v-model="principal_state" :fetch-suggestions="querySearchAsync" placeholder="请输入负责人" @select="handleSelect" />
        </div>
        <div class="dialog_footer_btn">
          <el-button type="primary" @click="logout">确 定</el-button>
          <el-button @click="showAddCompany = false">取 消</el-button>
        </div>
      </div>
      <div>

      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from "vue";
import { mapState } from "vuex";
import LeftBox from "./compontents/LeftBox.vue";
import RightBox from "./compontents/RightBox.vue";
export default defineComponent({
  components: {
    LeftBox,
    RightBox,
  },
  computed: {
    ...mapState("organzationModule", ["principal", "depart_name"]),
  },
  setup() {
    const { proxy }: any = getCurrentInstance();
    const usVuex = proxy.usVuex;
    let showAddCompany = ref<boolean>(false); //展示新增公司弹窗

    return {
      showAddCompany,
    };
  },
});
</script>

<style scoped lang="scss">
.origanization_body {
  display: flex;
  width: 100%;
  overflow: hidden;
  border: 1px solid #edeef2;
  border-radius: 8px;
  .left_box {
    flex: 1;
    border-right: 1px solid #edeef2;
    min-width: 210px;
    .letf_top_box {
      .el-button {
        margin-left: 20px;
      }
    }
  }
  .right_box {
    flex: 4;
    .right_top_box {
      justify-content: space-between;
      padding: 0 20px;
      .Info {
        p:first-child {
          margin-bottom: 10px;
        }
      }
      .edit{
        margin-right: 20px;
      }
    }
  }
  .letf_top_box,
  .right_top_box {
    display: flex;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #edeef2;
  }
  .left_botton_box {
    // border-bottom: 1px solid #edeef2;
  }
}
::v-deep .el-dialog__body {
  padding: 30px 38px;
  padding-top: 0;
}
.dialog_tit_tit {
  display: block;
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 25px;
}
.dialog_body {
  .input_company,
  .change_principal {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    & > div:first-child {
      min-width: 72px;
      margin-right: 20px;
    }
  }
  .dialog_footer_btn {
    display: flex;
    flex-direction: row-reverse;
    .el-button:nth-child(2) {
      margin-right: 20px;
    }
  }
}
</style>