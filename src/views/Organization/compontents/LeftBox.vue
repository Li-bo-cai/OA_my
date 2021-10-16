<template>
  <div class="treeBox">
    <el-tree :data="tree" :props="defaultProps" accordion empty-text="暂无数据" node-key="id" ref="tree" @node-click="handleTreeClick">
      <template #default="{ node, data }">
        <span :class="{tr:data.attribute==1,tr2:data.attribute==2,selectText:leaderText==node.id}">{{node.label}}</span>
        <span style="font-size: 14px;color: #969699;margin-left: 10px;" :class="{selectText:leaderText==node.id}">({{ data.number }})</span>
        <span style="display:inblick">
          <img class="imgStyle" :src="switchImgUrl==node.id?require('@/assets/images/s-add.png'):require('@/assets/images/add.png')" @click.stop="openLayer(node)" />
        </span>
      </template>
    </el-tree>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  onMounted,
  reactive,
  ref,
} from "vue";
import { insideCheck } from "@/api/organization/organization.api";
export default defineComponent({
  setup() {
    const { proxy }: any = getCurrentInstance();
    const usVuex = proxy.usVuex;

    let a!: number;
    let staffInfo: insideCheck = reactive({
      depart_id: a,
      page: 1,
      per_page: a,
    });
    const switchImgUrl = ref("");
    const leaderText = ref("");

    const handleTreeClick = (data: any, node: any) => {
      leaderText.value = node.id;
      staffInfo.depart_id = node.data.id;
      const Info = ref(
        computed(() => {
          return usVuex.useState("organzationModule", "per_page");
        })
      );
      staffInfo.per_page = Info.value;
      usVuex.useMutations("organzationModule", "SET_DEPART_ID", node.data.id);
      usVuex.useMutations("organzationModule", "SET_PRINCIPAL", node.data.name);
      usVuex.useMutations("organzationModule","SET_DEPART_name",node.data.depart_name);
      usVuex.useActions("organzationModule", "GET_STAFF", staffInfo);
    };

    // 获取部门公司树
    const tree = ref(
      computed(() => {
        return usVuex.useState("organzationModule", "tree");
      })
    );

    onMounted(() => {
      usVuex.useActions("organzationModule", "GET_TREE");
    });

    const defaultProps = reactive({
      label: "depart_name",
      children: "children",
    });

    const openLayer = (item: any) => {
      console.log("123");
    };

    return {
      leaderText,
      switchImgUrl,
      tree,
      defaultProps,
      handleTreeClick,
      openLayer,
    };
  },
});
</script>

<style scoped lang="scss">
.treeBox {
  overflow: hidden;
  .tr {
    font-size: 16px;
    font-weight: 600;
    color: #323233;
  }
  .tr2 {
    font-size: 16px;
    font-weight: 400;
    color: #646466;
  }
  .selectText {
    color: #5777e7;
  }
  .imgStyle {
    position: absolute;
    right: 10px;
    width: 22px;
    height: 22px;
  }
  ::v-deep .el-tree-node__content {
    display: block;
    padding: 9px 0;
    height: auto;
  }
  ::v-deep .el-tree-node:focus > .el-tree-node__content {
    background-color: #f2f5ff !important;
  }
  ::v-deep .el-tree-node__content:hover {
    background-color: #f2f5ff !important;
  }
  ::v-deep .el-table--fit {
    border-right: 1px solid #edeef2;
    border-left: 1px solid #edeef2;
    border-top: 1px solid #edeef2;
    border-radius: 8px 8px 0px 0px;
  }
  ::v-deep .el-autocomplete-suggestion__wrap .el-scrollbar__wrap {
    margin-bottom: 0 !important;
  }
}
</style>