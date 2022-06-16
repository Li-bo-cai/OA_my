<template>
  <div>
    <el-dialog :model-value="dialogVisible" title="人员名单选择器" width="50%" center :destroy-on-close="true"
      :before-close="handleClose">
      <div class="people-dialog">
        <AllDepart :showData="ckStatus" :checkedData="modelValue"></AllDepart>
        <PeopleCheck v-if="ckStatus == 2" :checkedData="modelValue"></PeopleCheck>
        <CheckedPeople :showData="ckStatus" :checkedData="modelValue"></CheckedPeople>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClose">取消</el-button>
          <el-button type="primary" @click="handleConfirm">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import AllDepart from "./AllDepart.vue";
import PeopleCheck from "./PeopleCheck.vue";
import CheckedPeople from "./CheckedPeople.vue";
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  ref,
} from "vue";
import mitt from "@/utils/mitt";

export default defineComponent({
  props: {
    // 弹窗开关状态
    dialogVisible: {
      type: Boolean,
      required: true,
      default: false,
    },
    // 弹窗显示状态
    ckStatus: {
      type: Number,
      required: true,
      default: 0,
    },
    // 组件传递的选中的值
    modelValue: {
      type: Array,
      require: true,
      default: () => [],
    },
  },
  components: {
    AllDepart,
    CheckedPeople,
    PeopleCheck,
  },
  setup(props, context) {

    // 最终收到结果的消息
    const returnAll = ref<Array<any>>([]);


    onMounted(() => {
      mitt.on("all-showData", allShowdata);
    });

    onBeforeUnmount(() => {
      mitt.off("all-showData", allShowdata);
    });

    // 获取第三数据
    const allShowdata = (e: any) => {
      returnAll.value = e;
    };

    // 关闭弹窗
    const handleClose = () => {
      context.emit("update:dialogVisible", false);
    };

    // 确定时抛出数据
    const handleConfirm = () => {
      context.emit("update:modelValue", returnAll.value);
      handleClose();
    };

    return {
      // dialogVisible,
      handleClose,
      handleConfirm,
    };
  },
});
</script>

<style scoped lang="scss">
.people-dialog {
  display: flex;
  justify-content: space-around;
}
</style>
