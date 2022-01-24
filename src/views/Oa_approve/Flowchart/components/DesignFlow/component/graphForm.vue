<template>
  <div class="form">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" size="" :disabled="disabled" label-position="top">
      <el-form-item label="节点Id" prop="id">
        <el-input size="mini" v-model="ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="节点名称" prop="name">
        <el-input size="mini" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="节点类型" prop="type">
        <el-select v-model="ruleForm.type" placeholder="人员默认为审批人">
          <el-option label="发起人" :value="1"></el-option>
          <el-option label="审批人" :value="2"></el-option>
          <el-option label="抄送人" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-if="ruleForm.type" label="选择人员方式" prop="type">
        <el-radio-group v-model="ruleForm.changeOptType">
          <el-radio :label="1" v-if="ruleForm.type==1">所有人</el-radio>
          <el-radio :label=" 2">指定人员</el-radio>
          <el-radio :label="3" v-if="ruleForm.type==2">发起人自选</el-radio>
          <el-radio :label="4">连续多级主管</el-radio>
          <el-radio :label="5">主管</el-radio>
          <el-radio :label="6">角色</el-radio>
          <el-radio :label="7" v-if="ruleForm.type==2">发起人自己</el-radio>
        </el-radio-group>
        <span style="color:#38adff;" v-if="ruleForm.changeOptType==1&&ruleForm.type==1">
          默认所有人都可发起此审批
        </span>
      </el-form-item>
      <div v-if="ruleForm.changeOptType==2">
        <el-button type="primary" class="el-icon-plus" size="mini" round>选择人员</el-button>
      </div>
      <div class="show_people" v-if="ruleForm.changeOptType==2">
        <el-tag type="" v-for="(item, index) in peoples" size="mini" :key="index" @close="peoples.splice(index, 1)" closable>
          {{item.name}}
        </el-tag>
      </div>
      <el-form-item label="审批期限（为 0 则不生效）">
        <el-select v-model="ruleForm.limit_timeType" class="m-2" size="small">
          <el-option v-for="item in dateOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <span style="margin-left:20px;">时长：</span>
        <el-input-number v-model="ruleForm.limit_time" :min="1" :max="10" size="small" />
      </el-form-item>
      <el-form-item>
        <el-button size="mini" type="primary" @click="changGraphNode(ruleFormRef)">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import graphForm from "./graphForm";
import { insiseGraphForm } from "@/store/modules/graph";
export default defineComponent({
  setup() {
    const ruleForm: insiseGraphForm = reactive({
      id: "",
      name: "",
      type: 1,
      changeOptType: 1,
      limit_timeType: 1,
      limit_time: 1,
    });

    const peoples: any = reactive([{ name: "张三" }]);

    const dateOptions = [
      {
        label: "天",
        value: 1,
      },
      {
        label: "小时",
        value: 2,
      },
    ];

    return {
      ruleForm,
      peoples,
      dateOptions,
      ...graphForm(),
    };
  },
});
</script>

<style scoped lang="scss">
.form {
  // height: 600px;
}
.show_people {
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
</style>