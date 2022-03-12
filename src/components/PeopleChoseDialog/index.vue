<template>
  <div>
    <el-dialog v-model="dialogVisible" title="人员名单选择器" width="50%" center :before-close="handleClose">
      <div class="people-dialog">
        <AllDepart :showData="checkedStatus"></AllDepart>
        <PeopleCheck v-if="checkedStatus == 2"></PeopleCheck>
        <CheckedPeople :showData="checkedStatus"></CheckedPeople>
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
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  ref,
  toRefs,
} from "vue";
import mitt from "@/utils/mitt";

export default defineComponent({
  props: {
    dialog: {
      type: Boolean,
      required: true,
      default: false,
    },
    checked: {
      type: Array,
      required: true,
      default: null,
    },
    ckStatus: {
      type: Number,
      required: true,
      default: 0,
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: {
    click: null,
    closeDialog: (value: boolean) => {
      return value;
    },
  },
  components: {
    AllDepart,
    CheckedPeople,
    PeopleCheck,
  },
  setup(props, context) {
    const { dialog, checked, ckStatus } = toRefs(props);
    //组件开关
    const dialogVisible = ref(
      computed(() => {
        return dialog.value;
      })
    );
    //组件传递的数据值
    const checkedData = computed(() => {
      return checked.value;
    });
    const checkedStatus = ref(
      computed(() => {
        return ckStatus.value;
      })
    );
    const returnAll = ref<any>([]);

    onMounted(() => {
      mitt.on("all-showData", allShowdata);
      console.log(dialogVisible.value, checkedStatus.value);
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
      context.emit("closeDialog", false);
    };

    // 确定时抛出数据
    const handleConfirm = () => {
      mitt.on("get-check-data", returnAll);
      handleClose();
    };

    return {
      checkedStatus,
      dialogVisible,
      checkedData,
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