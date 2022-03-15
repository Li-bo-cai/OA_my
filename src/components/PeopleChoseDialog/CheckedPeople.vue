<template>
  <div class="checked-people">
    <el-scrollbar>
      <div v-if="showData == 1">
        <div class="checked-item" v-for="(item,index) in showCheckData" :key="index">
          <div class="depart-name">
            <el-icon class="postcard">
              <postcard />
            </el-icon>
            {{item.depart_name}}
          </div>
          <el-icon class="close" @click="delete_checked(item,index)">
            <close />
          </el-icon>
        </div>
      </div>
      <div v-if="showData == 2">
        <div>已选择{{showCheckData.length}}人</div>
        <div class="checked-item" v-for="(item,index) in showCheckData" :key="index">
          <div class="people-name">
            <el-icon class="avatar">
              <avatar />
            </el-icon>
            {{item.name}}
          </div>
          <el-icon class="close" @click="delete_checked(item,index)">
            <close />
          </el-icon>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, toRefs } from "vue";
import mitt from "@/utils/mitt";
import $common from "@/utils/common";

export default defineComponent({
  props: {
    showData: {
      type: Number,
      required: true,
      default: 1,
    },
    checkedData: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const { showData, checkedData } = toRefs(props);
    const showCheckData: any = ref([]);
    showCheckData.value = checkedData.value;

    onMounted(() => {
      mitt.on("change-check", changecheck);
      mitt.on("change-check-group", changecheckgroup);
      mitt.on("delete-checkbox", deletecheckbox);
    });

    onUnmounted(() => {
      mitt.off("change-check", changecheck);
      mitt.off("change-check-group", changecheckgroup);
      mitt.off("delete-checkbox", deletecheckbox);
    });

    // 监听change-check 全选事件发生时的传值
    const changecheck = (e: any) => {
      if (showData.value == 1) {
        showCheckData.value = e;
      }
      if (showData.value == 2) {
        if (e.status) {
          showCheckData.value = $common.doweightObject(
            showCheckData.value.concat(e.value),
            "id"
          );
        } else {
          e.value.forEach((item: any, index: number) => {
            showCheckData.value = $common.deleteAppoint(
              showCheckData.value,
              "id",
              item.id
            );
          });
        }
        reply();
      }
    };

    // 监听change-check-group事件传递的数组
    const changecheckgroup = (e: any) => {
      showCheckData.value = $common.doweightObject(
        showCheckData.value.concat(e),
        "id"
      );
      reply();
    };

    //监听checkbox的取消选中状态
    const deletecheckbox = (e: any) => {
      // console.log(e);
      showCheckData.value = $common.deleteAppoint(
        showCheckData.value,
        "id",
        e.id
      );
      reply();
    };

    // 点击删除按钮时触发事件
    const delete_checked = (itm: any, index: number) => {
      showCheckData.value.splice(index, 1);
      if (showData.value == 1) {
        mitt.emit("delete-check", itm);
      }
      if (showData.value == 2) {
        mitt.emit("delete-check-people", showCheckData.value);
      }
      reply();
    };

    // 返回最终结果 通知外界
    const reply = () => {
      mitt.emit("all-showData", showCheckData.value);
    };

    return {
      showCheckData,
      delete_checked,
    };
  },
});
</script>

<style scoped lang="scss">
.checked-people {
  height: 50vh;
  width: 45%;
  border: 1px solid #ccc;
  padding: 10px;
  background: #d4d4d5;
  border-radius: 10px;
  overflow: hidden;
  .checked-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 2px;
    cursor: pointer;
    &:hover {
      background: rgb(177, 177, 177);
    }
  }
  .depart-name {
    padding: 4px;
    margin-bottom: 5px;
    .postcard {
      color: rgba(141, 123, 173, 0.918);
    }
  }
  .people-name {
    padding: 4px;
    margin-bottom: 5px;
    .avatar {
      color: rgb(128, 204, 255);
    }
  }
  .close {
    padding: 5px;
  }
}
</style>