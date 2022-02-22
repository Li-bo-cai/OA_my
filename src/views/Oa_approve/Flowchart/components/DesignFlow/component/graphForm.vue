<template>
  <div class="form">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" size="" :disabled="disabled" label-position="top">
      <el-form-item label="节点Id" prop="id">
        <el-input size="mini" v-model="ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="节点类型" prop="type">
        <el-select v-model="ruleForm.type" placeholder="人员默认为审批人">
          <el-option label="发起人" :value="1"></el-option>
          <el-option label="审批人" :value="2"></el-option>
          <el-option label="抄送人" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="basics" label="选择人员方式" prop="type">
        <el-radio-group v-model="ruleForm.changeOptType">
          <el-radio :label="1" v-show="ruleForm.type==1">所有人</el-radio>
          <el-radio :label="2">指定人员</el-radio>
          <el-radio :label="3" v-show="ruleForm.type==2">发起人自选</el-radio>
          <el-radio :label="4" v-show="ruleForm.type==2">连续多级主管</el-radio>
          <el-radio :label="5" v-show="ruleForm.type==2">主管</el-radio>
          <el-radio :label="6">角色</el-radio>
          <el-radio :label="7" v-show="ruleForm.type==2">发起人自己</el-radio>
        </el-radio-group>
        <span style="color:#38adff;" v-show="ruleForm.changeOptType==1&&ruleForm.type==1">
          默认所有人都可发起此审批
        </span>
        <span v-show="ruleForm.changeOptType==7" style="color:#8c8c8c;">发起人自己作为审批人进行审批</span>
        <div>
          <el-button v-if="ruleForm.changeOptType==2" type="primary" class="el-icon-plus" size="mini" round>选择人员</el-button>
          <el-button v-if="ruleForm.changeOptType==6" type="primary" class="el-icon-plus" size="mini" round>选择角色</el-button>
          <el-select v-show="ruleForm.type==2&&ruleForm.changeOptType==3" v-model="ruleForm.more" placeholder="Select" size="small">
            <el-option label="自选一个人" :value="1" />
            <el-option label="自选多个人" :value="2" />
          </el-select>
        </div>
        <div class="show_people" v-show="ruleForm.changeOptType==2">
          <el-tag type="" v-for="(item, index) in peoples" size="mini" :key="index" @close="peoples.splice(index, 1)" closable>
            {{item.name}}
          </el-tag>
        </div>
        <div class="show_people" v-show="ruleForm.changeOptType==6">
          <el-tag type="" v-for="(item, index) in peoples" size="mini" :key="index" @close="peoples.splice(index, 1)" closable>
            {{item.name}}
          </el-tag>
        </div>
      </el-form-item>
      <el-form-item v-show="ruleForm.type == 2" label="审批期限（为 0 则不生效）">
        <el-select v-model="ruleForm.limit_timeType" size="small">
          <el-option v-for="item in dateOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <span style="margin-left:20px;">时长：</span>
        <el-input-number v-model="ruleForm.limit_time" :min="0" :max="10" size="small" />
        <span style="margin-left:20px">{{ruleForm.limit_timeType==1?'天':'小时'}}</span>
      </el-form-item>
      <el-form-item label="指定主管" v-show="ruleForm.changeOptType==5">
        <span>发起的第</span>
        <el-input-number style="margin:10px;" v-model="ruleForm.limit_time" :min="1" size="small" />
        <span>级主管</span>
        <div style="color:#409eff;font-size: small;">直接主管为 第 1 级主管</div>
      </el-form-item>
      <el-form-item label="多人审批时审批方式" v-show="ruleForm.more==2||peoples.length>=2">
        <el-radio-group v-model="ruleForm.examineModel">
          <el-radio :label="1">按选择顺序依次审批</el-radio>
          <el-radio :label="2">会签（可同时审批，每个人必须同意）</el-radio>
          <el-radio :label="3">或签（有一人同意即可）</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="审批终点" v-show="ruleForm.changeOptType==4">
        <el-radio-group v-model="ruleForm.terminus">
          <el-radio :label="1">直到最上层主管</el-radio>
          <el-radio :label="2">不超过发起人的</el-radio>
        </el-radio-group>
        <span v-show="ruleForm.terminus==2">
          <span>第</span>
          <el-input-number style="margin:10px;" v-model="ruleForm.terminus_plies" :min="1" size="small" />
          <span>级主管</span>
        </span>
      </el-form-item>
      <el-form-item v-show="ruleForm.changeOptType==4||ruleForm.changeOptType==5" label="审批人为空时">
        <el-radio-group v-model="ruleForm.approverisNull">
          <el-radio :label="1">自动通过</el-radio>
          <el-radio :label="2">自动转交管理员</el-radio>
          <el-radio :label="3">转交指定人员</el-radio>
        </el-radio-group>
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
      // ruleForm,
      peoples,
      dateOptions,
      ...graphForm(),
    };
  },
});
</script>

<style scoped lang="scss">
.form {
}
.basics {
  border-bottom: 1px solid #ccc;
}
.show_people {
  margin-top: 20px;
  padding-bottom: 10px;
}
</style>