<template>
  <div class="all-people-check">
    <el-scrollbar>
      <el-checkbox v-if="peoples.length != 0" v-model="checkAll" :indeterminate="isIndeterminate"
        @change="handleCheckAllChange">全选</el-checkbox>
      <el-checkbox-group v-model="checkedPerson" @change="handleCheckedPersonChange">
        <el-checkbox v-for="(item, index) in peoples" :key="index" :label="item" @change="trychange(item, $event)">
          {{ item && item.name }}</el-checkbox>
      </el-checkbox-group>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import mitt from "@/utils/mitt";
import $commom from "@/utils/common";
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  ref,
  toRefs,
  watch,
} from "vue";
export default defineComponent({
  props: {
    checkedData: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const { checkedData }: any = toRefs(props);
    const checkAll = ref(false); //当前多选框是否全选
    const isIndeterminate = ref(false); //多选框状态
    const checkedPerson = ref<any>([]); //选中的数据
    let peoples = ref<any>([]); //接口返回可选择人数
    const allPeople = ref<any>([]);
    allPeople.value = checkedData.value;

    onMounted(() => {
      mitt.on("people-check", peoplecheck);
      mitt.on("delete-check-people", deleteCheckPeople);
      mitt.on("all-showData", allShowdata);
    });

    onBeforeUnmount(() => {
      mitt.off("people-check", peoplecheck);
      mitt.off("delete-check-people", deleteCheckPeople);
      mitt.off("all-showData", allShowdata);
    });

    watch(
      peoples,
      (newVal: [], oldVal) => {
        checkedPerson.value = $commom.getSameArr(newVal, allPeople.value, "id");
        const checkedCount = checkedPerson.value.length;
        checkAll.value = checkedCount === peoples.value.length;
        isIndeterminate.value =
          checkedCount > 0 && checkedCount < peoples.value.length;
      },
      { deep: true }
    );

    // 接收组件传递的people-check
    const peoplecheck = (e: any) => {
      peoples.value = e;
      // console.log(e);
    };

    // 最终数据删除传递事件
    const deleteCheckPeople = (e: any) => {
      checkedPerson.value = $commom.getSameArr(peoples.value, e, "id");
    };

    //全选按钮
    const handleCheckAllChange = (val: boolean) => {
      checkedPerson.value = val ? peoples.value : [];
      isIndeterminate.value = false;
      let changeResult = {
        value: val ? checkedPerson.value : peoples.value,
        status: val,
      };
      mitt.emit("change-check", changeResult);
    };

    //checkbox-group的change事件
    const handleCheckedPersonChange = (value: []) => {
      const checkedCount = value.length;
      checkAll.value = checkedCount === peoples.value.length;
      isIndeterminate.value =
        checkedCount > 0 && checkedCount < peoples.value.length;
      mitt.emit("change-check-group", value);
    };

    //checkbox 的change事件
    const trychange = (value: any, e: boolean) => {
      if (!e) {
        mitt.emit("delete-checkbox", value);
      }
    };
    // 获取第三数据
    const allShowdata = (e: any) => {
      allPeople.value = e;
    };
    return {
      checkAll,
      peoples,
      checkedPerson,
      isIndeterminate,
      handleCheckAllChange,
      handleCheckedPersonChange,
      trychange,
    };
  },
});
</script>

<style scoped lang="scss">
.all-people-check {
  height: 50vh;
  width: 45%;
  border: 1px solid #ccc;
  padding: 10px;
  background: #d4d4d5;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 10px;
}
</style>