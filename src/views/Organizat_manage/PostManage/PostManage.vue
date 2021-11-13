<template>
  <div>
    <div class="postManage_body">
      <!-- 左边部分 -->
      <div class="left_box">
        <!-- 左上盒子 -->
        <div class="letf_top_box">
          <el-button type="primary" @click="add_post">新增岗位</el-button>
        </div>
        <!-- 左下盒子 -->
        <div class="left_botton_box">
          <PostLeftBox />
        </div>
      </div>
      <!-- 右边部分 -->
      <div class="right_box">
        <!-- 右上盒子 -->
        <div class="right_top_box">
          <div class="Info">
            <p>暂无数据</p>
            <p>岗位描述:<span>{{ruleForm.desc?ruleForm.desc:'暂无数据'}}</span></p>
          </div>
          <div class="edit">
            <el-switch v-model="ruleForm.state" active-text="启用该岗位" :active-value="2" :inactive-value="1" />
            <el-button type="text">编辑权限</el-button>
            <el-button type="text">编辑权限</el-button>
            <el-button type="text">编辑权限</el-button>
          </div>
        </div>
        <!-- 右下盒子 -->
        <div class="right_botton_box">
          <PostRightBox />
        </div>
      </div>
    </div>
    <el-dialog :title="title" v-model="showAddCompany" width="548px">
      <div class="dialog_body">
        <el-form :model="ruleForm" :rules="addPostRules" ref="ruleForm">
          <el-form-item label="岗位名称" prop="title" class="input_company">
            <el-input placeholder="请输入公司名称"></el-input>
          </el-form-item>
          <el-form-item label="所属分组" prop="group_id">
            <el-select v-model="ruleForm.group_id" placeholder="请选择所属分组">
              <el-option v-for="item in post_options" :key="item.id" :label="item.group_name" :value="item.id" />
            </el-select>
          </el-form-item>
          <el-form-item label="岗位描述" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入岗位描述" />
          </el-form-item>
        </el-form>
        <div class="dialog_footer_btn">
          <el-button type="primary" @click="defineClick('ruleForm')">确 定</el-button>
          <el-button @click="showAddCompany = false">取 消</el-button>
        </div>
      </div>
      <div>

      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  reactive,
  ref,
} from "vue";
import { mapState } from "vuex";
import addPostRules from "./postManage";
import PostLeftBox from "./compontents/PostLeftBox.vue";
import PostRightBox from "./compontents/postRightBox.vue";
export default defineComponent({
  components: {
    PostLeftBox,
    PostRightBox,
  },
  computed: {
    ...mapState("postModule", ["post_options"]),
  },
  setup() {
    let a!: number;
    const { proxy }: any = getCurrentInstance();
    const usVuex = proxy.usVuex;
    const ruleForm = reactive({
      status: "",
      group_id: a,
      desc: "",
      state: 2,
    });

    onMounted(() => {
      usVuex.useActions("postModule", "GET_POST_TREE");
      usVuex.useActions("postModule", "GET_POST_OPTIONS");
    });

    const defineClick = (val: string) => {
      console.log(123);
    };

    return {
      ...addPostRules(),

      ruleForm,
      defineClick,
    };
  },
});
</script>

<style scoped lang="scss">
.postManage_body {
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
      .edit {
        display: flex;
        align-items: center;
        .el-button {
          width: 60px;
          margin-left: 10px;
        }
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
  .dialog_footer_btn {
    display: flex;
    flex-direction: row-reverse;
    .el-button:nth-child(2) {
      margin-right: 20px;
    }
  }
}
</style>