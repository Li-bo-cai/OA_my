<template>
  <div>
    <div class="userInfo_header">
      <Breadcrumb />
    </div>
    <div class="userInfo_body">
      <el-form :model="ruleForm" ref="ruleForm" label-width="auto" class="demo-ruleForm" label-position="right">
        <div class="plate">
          <p class="all_title">基本信息</p>
          <div class="form_col">
            <el-form-item label="员工工号：">123</el-form-item>
          </div>
          <div class="form_col">
            <el-form-item label="姓  名：">张三</el-form-item>
            <el-form-item label="性  别：" prop="gender">男</el-form-item>
            <el-form-item label="手机号：" prop="phone">18111726632</el-form-item>
            <el-form-item label="身份证号：" prop="card">510521199456234845</el-form-item>
          </div>
          <div class="form_col">
            <el-form-item label="出生日期：" prop="birth">1998-05-31</el-form-item>
            <el-form-item label="婚姻状况：" prop="marriage">未婚</el-form-item>
            <el-form-item label="民  族：" prop="nation">汉</el-form-item>
            <el-form-item label="政治面貌：" prop="political_outlook">团员</el-form-item>
          </div>
          <div class="form_col">
            <el-form-item label="就读院校：" prop="school">超神学院</el-form-item>
            <el-form-item label="所学专业：" prop="major">啦啦啦德玛西亚</el-form-item>
            <el-form-item label="最高学历：" prop="education">战神</el-form-item>
            <el-form-item label="户  籍  地：" prop="household_register">四川泸县</el-form-item>
          </div>
          <div class="form_col">
            <el-form-item label="户籍详细地址：" prop="household_register_detailed">超神学院</el-form-item>
            <el-form-item label="现居地地址：" prop="address">啦啦啦德玛西亚</el-form-item>
          </div>
          <div class="form_col">
            <el-form-item label="工作经历：" prop="work_history">1231231234565</el-form-item>
          </div>
        </div>
        <div class="plate">
          <p class="all_title">紧急联系人</p>
          <div class="form_col">
            <el-form-item label="姓  名：">张三</el-form-item>
            <el-form-item label="关  系：" prop="gender">男</el-form-item>
            <el-form-item label="手机号：" prop="phone">18111726632</el-form-item>
          </div>
        </div>
        <div class="plate">
          <p class="all_title">职工入职来源</p>
          <div class="form_col">
            <el-form-item label="应聘渠道：">BOSS直聘</el-form-item>
            <el-form-item label="介绍人：">张三</el-form-item>
          </div>
        </div>
        <div class="plate">
          <p class="all_title">岗位信息</p>
          <div class="form_col">
            <el-form-item label="所属部门：">运营部</el-form-item>
            <el-form-item label="岗位名称：">运营专员</el-form-item>
          </div>
          <div class="form_col">
            <el-form-item label="入职时间：">2021-02-23</el-form-item>
            <el-form-item label="是否签订合同：">是</el-form-item>
            <el-form-item label="合同签订时间：">运营专员</el-form-item>
            <el-form-item label="合同截止时间：">2021-02-23</el-form-item>
          </div>
          <div class="form_col">
            <el-form-item label="当前状态：">正式员工</el-form-item>
            <el-form-item label="当前状态：">试用期</el-form-item>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.vue";
export default defineComponent({
  components: {
    Breadcrumb,
  },
  setup() {
    const ruleForm = ref({});
    return {
      ruleForm,
    };
  },
});
</script>

<style scoped lang="scss">
.userInfo_body {
  padding: 0 20px;
  .plate {
    margin-bottom: 50px;
  }
  .all_title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  .form_col {
    display: flex;
    justify-content: space-between;
  }
}

.form_col .el-form-item {
  margin-bottom: 0;
  flex: 1;
}
</style>