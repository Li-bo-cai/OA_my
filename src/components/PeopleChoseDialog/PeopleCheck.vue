<template>
  <div class="all-people-check">
    <el-scrollbar>
      <el-checkbox v-if="peoples.length!=0" v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
      <el-checkbox-group v-if="peoples" v-model="checkedPerson" @change="handleCheckedPersonChange">
        <el-checkbox v-for="item in peoples" :key="item.id" :label="item" @change="trychange(item,$event)">{{item.name}}</el-checkbox>
      </el-checkbox-group>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import mitt from "@/utils/mitt";
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
export default defineComponent({
  setup() {
    const checkAll = ref(false); //当前多选框是否全选
    const isIndeterminate = ref(false); //多选框状态
    const checkedPerson = ref([]); //选中的数据
    let peoples = ref([]); //接口返回可选择人数
    let allPeople = ref<any>([]); //选中后总的人数存放位置

    onMounted(() => {
      mitt.on("people-check", peoplecheck);
      mitt.on("delete-check-people", deleteCheckPeople);
    });

    onUnmounted(() => {
      mitt.off("people-check", peoplecheck);
      mitt.off("delete-check-people", deleteCheckPeople);
    });

    // 接收组件传递的people-check
    const peoplecheck = (e: any) => {
      peoples.value = e;
      // console.log(e);
    };

    // 最终数据删除传递事件
    const deleteCheckPeople = (e: any) => {
      checkedPerson.value.forEach((item, index) => {
        // console.log(e);
      });
    };

    //全选按钮
    const handleCheckAllChange = (val: boolean) => {
      checkedPerson.value = val ? peoples.value : [];
      isIndeterminate.value = false;
      mitt.emit("change-check", checkedPerson.value);
    };

    //checkbox-group的change事件
    const handleCheckedPersonChange = (value: []) => {
      const checkedCount = value.length;
      checkAll.value = checkedCount === peoples.value.length;
      isIndeterminate.value =
        checkedCount > 0 && checkedCount < peoples.value.length;
      mitt.emit("change-check", value);
    };

    //checkbox 的change事件
    const trychange = (value: any, e: boolean) => {
      console.log(value, e);
      if (!e) {
        mitt.emit("delete-checkbox", value);
      }
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