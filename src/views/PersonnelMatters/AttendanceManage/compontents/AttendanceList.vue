<template>
  <div class="att_list">

    <div class="att_search">
      <el-form ref="form" :model="formSearch" class="search">
        <el-form-item label="搜索条件">
          <el-input v-model="formSearch.name" placeholder="请输入员工姓名/工号"></el-input>
        </el-form-item>
        <el-form-item label="所属部门">
          <el-input v-model="formSearch.name" placeholder="全部"></el-input>
        </el-form-item>
        <el-form-item label="岗位">
          <el-input v-model="formSearch.name" placeholder="全部"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>重置</el-button>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="att_table">
      <el-table :data="att_tableData" :stripe="true" empty-text="暂无数据" style="width: 100%">
        <el-table-column v-for="(item,index) in tableHeaders" :key="index" :label="item.label" :prop="item.prop" align="center">
          <template v-if="item.children&&item.children.length">
            <el-table-column v-for="(child,_index) in item.children" :key="_index" :label="child.label" :prop="child.prop" align="center">
              <template v-if="child.children&&child.children.length">
                <el-table-column v-for="(date,__index) in child.children" :key="__index" :label="date.label" :prop="date.prop" align="center">
                </el-table-column>
              </template>
            </el-table-column>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagin_ation">
      <el-pagination background :hide-on-single-page="true" :current-page="attList.page" :page-sizes="[10, 15, 20, 25]" layout="total, prev, pager, next, sizes" :total="list_total" @size-change="handleSizeChange" @current-change="handleCurrentChange">
      </el-pagination>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, ref } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  computed: {
    ...mapState("attendceModule", [
      "att_tableData",
      "tableHeaders",
      "attList",
      "list_total",
    ]),
  },
  setup() {
    const { proxy }: any = getCurrentInstance();
    const usVuex = proxy.usVuex;
    const formSearch = ref({
      name: "zs",
    });
    onMounted(() => {
      usVuex.useActions("attendceModule", "GET_ATT_TABLEDATA");
    });
    // 改变页面数量
    const handleSizeChange = (num: number) => {
      usVuex.useMutations("attendceModule", "SET_PAGE", 1);
      usVuex.useMutations("attendceModule", "SET_PER_PAGE", num);
      usVuex.useActions("attendceModule", "GET_STAFF_CHECK");
    };
    // 改变页数
    const handleCurrentChange = (num: number) => {
      debugger;
      usVuex.useMutations("attendceModule", "SET_PAGE", num);
      usVuex.useActions("attendceModule", "GET_STAFF_CHECK");
    };
    return {
      formSearch,
      handleSizeChange,
      handleCurrentChange,
    };
  },
});
</script>

<style scoped lang="scss">
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1580px) {
    flex-wrap: wrap;
  }
  .el-form-item {
    margin-bottom: 20px;
  }
}
.att_table {
  margin-bottom: 30px;
}
.pagin_ation {
  display: flex;
  flex-direction: row-reverse;
}
</style>