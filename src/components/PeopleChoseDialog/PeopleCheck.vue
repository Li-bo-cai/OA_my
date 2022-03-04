<template>
  <div class="all-people-check">
    <el-scrollbar>
      <el-checkbox v-if="peoples.length!=0" v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
      <el-checkbox-group v-if="peoples" v-model="checkedPerson" @change="handleCheckedPersonChange">
        <el-checkbox v-for="item in peoples" :key="item.id" :label="item">{{item.name}}</el-checkbox>
      </el-checkbox-group>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import mitt from "@/utils/mitt";
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
export default defineComponent({
  setup() {
    const checkAll = ref(false);
    const isIndeterminate = ref(false);
    const checkedPerson = ref([]);
    let peoples = ref([]);

    onMounted(() => {
      mitt.on("people-check", peoplecheck);
    });

    onUnmounted(() => {
      mitt.on("people-check", peoplecheck);
    });

    // 接收组件传递的people-check
    const peoplecheck = (e: any) => {
      peoples.value = e;
      // console.log(e);
    };

    const handleCheckAllChange = (val: boolean) => {
      checkedPerson.value = val ? peoples.value : [];
      isIndeterminate.value = false;
    };
    const handleCheckedPersonChange = (value: []) => {
      const checkedCount = value.length;
      checkAll.value = checkedCount === peoples.value.length;
      isIndeterminate.value =
        checkedCount > 0 && checkedCount < peoples.value.length;
      mitt.emit("change-check", value);
    };
    return {
      checkAll,
      peoples,
      checkedPerson,
      isIndeterminate,
      handleCheckAllChange,
      handleCheckedPersonChange,
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