<template>
  <div>
    <el-dialog v-model="dialogVisible" title="人员名单选择器" width="50%" center :before-close="handleClose">
      <div class="people-dialog">
        <AllDepart :showData="data"></AllDepart>
        <PeopleCheck v-if="data==2"></PeopleCheck>
        <CheckedPeople :showData="data"></CheckedPeople>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClose">取消</el-button>
          <el-button type="primary" @click="handleClose">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import AllDepart from "./AllDepart.vue";
import PeopleCheck from "./PeopleCheck.vue";
import CheckedPeople from "./CheckedPeople.vue";
import { defineComponent, ref, toRefs } from "vue";

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
    const { dialog, checked } = toRefs(props);
    const dialogVisible = dialog;
    const checkedData = checked;
    const data = ref<number>(2);

    const handleClose = () => {
      context.emit("closeDialog", false);
    };

    return {
      data,
      dialogVisible,
      checkedData,
      handleClose,
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