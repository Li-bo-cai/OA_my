<template>
  <div>
    <div class="origanization_head">
      <Breadcrumb />
    </div>
    <div class="origanization_body">
      <!-- 左边部分 -->
      <div class="left_box">
        <!-- 左上盒子 -->
        <div class="letf_top_box">
          <el-button type="primary">新增公司</el-button>
        </div>
        <!-- 左下盒子 -->
        <div class="left_botton_box">
          <LeftBox />
        </div>
      </div>
      <!-- 右边部分 -->
      <div class="right_box">
        <!-- 右上盒子 -->
        <div class="right_top_box">
          <div class="Info">
            <p>部门：{{depart_name}}</p>
            <p>负责人: <span>{{principal?principal:'暂无'}}</span></p>
          </div>
          <div class="edit">
            <el-button type="primary">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </div>
        </div>
        <!-- 右下盒子 -->
        <div class="right_botton_box">
          <RightBox />
        </div>
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, ref } from "vue";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.vue";
import Pagination from "../../components/Pagination/Pagination.vue";
import LeftBox from "./compontents/LeftBox.vue";
import RightBox from "./compontents/RightBox.vue";
export default defineComponent({
  components: {
    Breadcrumb,
    Pagination,
    LeftBox,
    RightBox,
  },
  setup() {
    const { proxy }: any = getCurrentInstance();
    const usVuex = proxy.usVuex;

    const principal = ref(
      computed(() => {
        return usVuex.useState("organzationModule", "principal");
      })
    );
    const depart_name = ref(
      computed(() => {
        return usVuex.useState("organzationModule", "depart_name");
      })
    );
    return {
      principal,
      depart_name,
    };
  },
});
</script>

<style scoped lang="scss">
.origanization_body {
  display: flex;
  width: 100%;
  overflow: hidden;
  border: 1px solid #edeef2;
  border-radius: 8px;
  .left_box {
    flex: 1;
    border-right: 1px solid #edeef2;
    min-width: 210px;
    .letf_top_box {
      .el-button {
        margin-left: 20px;
      }
    }
  }
  .right_box {
    flex: 4;
    .right_top_box {
      justify-content: space-between;
      padding: 0 20px;
      .Info {
        p:first-child {
          margin-bottom: 10px;
        }
      }
    }
  }
  .letf_top_box,
  .right_top_box {
    display: flex;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #edeef2;
  }
  .left_botton_box {
    // border-bottom: 1px solid #edeef2;
  }
}
</style>