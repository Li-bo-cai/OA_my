<template>
  <div class="right_box">
    <div class="title">
      <img src="@/assets/images/bumenrenyuan@3x.png" alt=""><span>部门人员</span>
    </div>
    <div class="safft_table">
      <el-table :header-cell-style="{backgroundColor:'#f7f8fa'}" :data="staff.data" empty-text="暂无数据">
        <el-table-column prop="number" label="员工工号">
        </el-table-column>
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="depart_name" label="部门">
        </el-table-column>
        <el-table-column prop="role_name" label="职位">
        </el-table-column>
        <el-table-column prop="phone" label="联系方式">
        </el-table-column>
        <el-table-column prop="state_text" label="当前状态">
        </el-table-column>
      </el-table>
    </div>
    <div class="pagin_ation">
      <el-pagination background :hide-on-single-page="true" :page-sizes="[10, 15, 20, 25]" layout="total, prev, pager, next, sizes" :total="staff.total" @size-change="handleSizeChange" @current-change="handleCurrentChange">
      </el-pagination>
    </div>

  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  ref,
  toRefs,
} from "vue";

export default defineComponent({
  setup() {
    const { proxy }: any = getCurrentInstance();
    const usVuex = proxy.usVuex;

    const RightBoxInfo = ref(
      computed(() => {
        return usVuex.useState("organzationModule");
      })
    );
    let { staff, depart_id, page, per_page } = toRefs(RightBoxInfo.value);

    // 改变页面数量
    const handleSizeChange = (num: number) => {
      usVuex.useMutations("organzationModule", "SET_PER_PAGE", num);
      usVuex.useActions("organzationModule", "GET_STAFF", {
        depart_id: depart_id.value,
        page: 1,
        per_page: num,
      });
    };
    // 改变页数
    const handleCurrentChange = (num: number) => {
      usVuex.useMutations("organzationModule", "SET_PAGE", num);
      usVuex.useActions("organzationModule", "GET_STAFF", {
        depart_id: depart_id.value,
        page: num,
        per_page: per_page.value,
      });
    };

    return {
      staff,
      handleSizeChange,
      handleCurrentChange,
    };
  },
});
</script>

<style scoped lang="scss">
.right_box {
  padding: 40px 20px;
}
.title {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  & > img {
    width: 22px;
    height: 22px;
    margin-right: 10px;
  }
  & > span {
    font-size: 14px;
    font-weight: 500;
    color: #323233;
  }
}
.safft_table {
  margin-bottom: 20px;
}
.pagin_ation {
  display: flex;
  flex-direction: row-reverse;
}
</style>