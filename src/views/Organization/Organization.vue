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
            <p>运营2组</p>
            <p>负责人: <span>暂无</span></p>
          </div>
          <div class="edit">
            <el-button type="primary">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </div>
        </div>
        <!-- 右下盒子 -->
        <div class="right_botton_box">
          <p>右下盒子</p>
        </div>
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.vue";
import Pagination from "../../components/Pagination/Pagination.vue";
import LeftBox from "./compontents/LeftBox.vue";
export default defineComponent({
  components: {
    Breadcrumb,
    Pagination,
    LeftBox,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.origanization_body {
  display: flex;
  width: 100%;
  border: 1px solid #edeef2;
  border-radius: 8px;
  .left_box {
    flex: 1;
    .letf_top_box {
      border-right: 1px solid #edeef2;
      .el-button {
        margin-left: 20px;
      }
    }
  }
  .right_box {
    flex: 3;
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
}
</style>