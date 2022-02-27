<template>
  <div>
    <el-dialog v-model="dialogVisible" title="人员名单选择器" width="50%" center :before-close="handleClose">
      <div class="people-dialog">
        <AllPeople :showData="data"></AllPeople>
        <CheckedPeople></CheckedPeople>
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
import AllPeople from "./Allpeople.vue";
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
    AllPeople,
    CheckedPeople,
  },
  setup(props, context) {
    const { dialog, checked } = toRefs(props);
    const dialogVisible = dialog;
    const checkedData = checked;

    const handleClose = () => {
      context.emit("closeDialog", false);
    };

    return {
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