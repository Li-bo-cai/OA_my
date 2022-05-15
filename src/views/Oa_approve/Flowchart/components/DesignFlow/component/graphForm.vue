<template>
  <div class="form">
    <!-- 人员选择表达 -->
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" size="" :disabled="disabled"
      label-position="top">
      <el-form-item label="节点Id" prop="id">
        <el-input size="small" v-model="ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="节点类型" prop="type">
        <el-select v-model="ruleForm.type" placeholder="人员默认为审批人">
          <el-option label="发起人" :value="1"></el-option>
          <el-option label="审批人" :value="2"></el-option>
          <el-option label="抄送人" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择人员方式" prop="type" v-if="ruleForm.type != 0">
        <el-radio-group v-model="ruleForm.changeOptType" size="small">
          <el-radio :label="1" v-show="ruleForm.type == 1">所有人</el-radio>
          <el-radio :label="2">指定人员</el-radio>
          <el-radio :label="3" v-show="ruleForm.type == 2">发起人自选</el-radio>
          <el-radio :label="4" v-show="ruleForm.type == 2">连续多级主管</el-radio>
          <el-radio :label="5" v-show="ruleForm.type == 2">主管</el-radio>
          <el-radio :label="6">角色</el-radio>
          <el-radio :label="7" v-show="ruleForm.type == 2">发起人自己</el-radio>
        </el-radio-group>
      </el-form-item>
      <span class="c409eff fs12" v-show="ruleForm.changeOptType == 1 && ruleForm.type == 1">
        默认所有人都可发起此审批
      </span>
      <span v-show="ruleForm.changeOptType == 7" class="cbbb fs12">发起人自己作为审批人进行审批</span>
      <!-- <el-form-item>
      </el-form-item> -->
      <div class="mb20">
        <el-button v-if="ruleForm.changeOptType == 2" type="primary" :icon="Plus" size="small" round
          @click="openCmpt(2)">
          选择人员</el-button>
        <el-button v-if="ruleForm.changeOptType == 6" type="primary" :icon="Plus" size="small" round
          @click="openCmpt(1)">
          选择角色</el-button>
        <el-select v-if="ruleForm.type == 2 && ruleForm.changeOptType == 3" v-model="ruleForm.more" placeholder="Select"
          size="small">
          <el-option label="自选一个人" :value="1" />
          <el-option label="自选多个人" :value="2" />
        </el-select>
      </div>

      <el-form-item class="basics">
        <div class="show-people" v-show="ruleForm.changeOptType == 2 && ruleForm.type != 0">
          <el-tag type="" v-for="(item, index) in ruleForm.user.peoples" size="small" :key="index"
            @close="remove(ruleForm.user.peoples, index)" closable>
            {{ item.name }}
          </el-tag>
          <el-button v-show="ruleForm.user.peoples.length > 2" size="small" type="text"
            @click="ruleForm.user.peoples = []">清除全部</el-button>
        </div>
        <div class="show-people" v-show="ruleForm.changeOptType == 6">
          <el-tag type="" v-for="(item, index) in ruleForm.user.departs" size="small" :key="index"
            @close="remove(ruleForm.user.departs, index)" closable>
            {{ item.depart_name }}
          </el-tag>
          <el-button v-show="ruleForm.user.departs.length > 2" size="small" type="text"
            @click="ruleForm.user.departs = []">清除全部</el-button>
        </div>
      </el-form-item>

      <el-form-item v-show="ruleForm.type == 2" label="审批期限（为 0 则不生效）">
        <el-select v-model="ruleForm.limit_timeType" size="small">
          <el-option v-for="item in dateOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <span class="ml20">时长：</span>
        <el-input-number v-model="ruleForm.limit_time" :min="0" :max="10" size="small" />
        <span class="ml20">{{ ruleForm.limit_timeType == 1 ? '天' : '小时' }}</span>
      </el-form-item>
      <el-form-item label="指定主管" v-show="ruleForm.changeOptType == 5">
        <span>发起的第</span>
        <el-input-number class="m10" v-model="ruleForm.limit_time" :min="1" size="small" />
        <span>级主管</span>
        <div class="ftsm c409eff">直接主管为 第 1 级主管</div>
      </el-form-item>
      <el-form-item label="多人审批时审批方式" v-show="(ruleForm.more == 2 || checedData.length >= 2) && ruleForm.type == 2">
        <el-radio-group v-model="ruleForm.examineModel">
          <el-radio :label="1">按选择顺序依次审批</el-radio>
          <el-radio :label="2">会签（可同时审批，每个人必须同意）</el-radio>
          <el-radio :label="3">或签（有一人同意即可）</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="审批终点" v-show="ruleForm.changeOptType == 4">
        <el-radio-group v-model="ruleForm.terminus">
          <el-radio :label="1">直到最上层主管</el-radio>
          <el-radio :label="2">不超过发起人的</el-radio>
        </el-radio-group>
        <span v-show="ruleForm.terminus == 2">
          <span>第</span>
          <el-input-number class="m10" v-model="ruleForm.terminus_plies" :min="1" size="small" />
          <span>级主管</span>
        </span>
      </el-form-item>
      <el-form-item v-show="ruleForm.changeOptType == 4 || ruleForm.changeOptType == 5" label="审批人为空时">
        <el-radio-group v-model="ruleForm.approverisNull">
          <el-radio :label="1">自动通过</el-radio>
          <el-radio :label="2">自动转交管理员</el-radio>
          <el-radio :label="3">转交指定人员</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" @click="changGraphNode(ruleFormRef)">确定</el-button>
      </el-form-item>
    </el-form>

    <PeopledialogVisible v-model="checedData" :ckStatus="openStatus" v-model:dialogVisible="openComptDialog">
    </PeopledialogVisible>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from "vue";
import { Plus } from "@element-plus/icons-vue";
import graphForm from "./graphForm";
import PeopledialogVisible from "@/components/PeopleChoseDialog/index.vue";
export default defineComponent({
  components: {
    PeopledialogVisible,
  },

  setup() {
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

    const checedData = ref([]);
    const openStatus = ref<number>(0);
    const openComptDialog = ref<boolean>(false);
    const { rules, ruleForm, ruleFormRef, disabled, changGraphNode } =
      graphForm();

    // 打开选择器弹窗
    const openCmpt = (val: number) => {
      openComptDialog.value = true;
      openStatus.value = val;
      if (val == 1) {
        checedData.value = ruleForm.value.user.departs;
      }
      if (val == 2) {
        checedData.value = ruleForm.value.user.peoples;
      }
    };

    watch(checedData, (newVal) => {
      if (openStatus.value == 1) {
        ruleForm.value.user.departs = newVal;
      }
      if (openStatus.value == 2) {
        ruleForm.value.user.peoples = newVal;
      }
    });

    const remove = (val: Array<any>, idx: number) => {
      val.splice(idx, 1);
    };

    return {
      Plus,
      openComptDialog, //弹窗打开状态
      openStatus,
      dateOptions,
      rules,
      checedData, //绑定选好的数据
      ruleForm,
      ruleFormRef,
      disabled,
      openCmpt,
      changGraphNode,
      remove,
    };
  },
});
</script>

<style scoped lang="scss">
.form {}

.basics {
  border-bottom: 1px solid #ccc;
}

.show-people {
  .el-tag {
    margin-right: 10px;
  }
}
</style>