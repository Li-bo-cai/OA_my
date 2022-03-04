<template>
  <div class="checked-people">
    <div v-if="showData == 1">
      <div class="checked-item" v-for="(item,index) in checkedDate" :key="index">
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
      <div class="checked-item" v-for="(item,index) in checkedDate" :key="index">
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
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, toRefs } from "vue";
import mitt from "@/utils/mitt";

export default defineComponent({
  props: {
    showData: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  setup(props) {
    const { showData } = toRefs(props);
    let checkedDate = ref();
    const changecheck = (e: any) => {
      console.log("====>", e);

      checkedDate.value = e;
    };
    onMounted(() => {
      mitt.on("change-check", changecheck);
    });
    onUnmounted(() => {
      mitt.off("change-check", changecheck);
    });

    const delete_checked = (itm: any, index: number) => {
      checkedDate.value.splice(index, 1);
      if (showData.value == 2) {
        mitt.emit("delete-check", itm);
      }
    };
    return {
      checkedDate,
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