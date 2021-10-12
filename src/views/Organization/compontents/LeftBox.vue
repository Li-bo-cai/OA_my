<template>
  <div class="treeBox">
    <el-tree :data="tree" :props="defaultProps" accordion empty-text="暂无数据" node-key="id" ref="tree" @node-click="handleTreeClick">
      <!-- <span class="custom-tree-node" slot-scope="{ node, data }">
        <span :class="{tr:data.attribute==1,tr2:data.attribute==2,selectText:leaderText==node.id}">{{
                node.label
              }}</span>
        <span style="font-size: 14px;color: #969699;margin-left: 10px;" :class="{selectText:leaderText==node.id}">({{ data.number }})</span>
        <span class="operate">
          <img class="imgStyle" :src="switchImgUrl==node.id?require('@/assets/images/s-add.png'):require('@/assets/images/add.png')" @click.stop="openLayer(node)" />
        </span>
      </span> -->
    </el-tree>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  reactive,
  ref,
} from "vue";

export default defineComponent({
  setup() {
    const { proxy }: any = getCurrentInstance();
    const usVuex = proxy.usVuex;
    let tree = ref([]); //定义数据
    const handleTreeClick = () => {
      console.log("123");
    };
    onMounted(() => {
      usVuex.useActions("organzationMoudle", "GET_TREE");
    });

    const defaultProps = reactive({
      label: "depart_name",
      children: "children",
    });

    return {
      tree,
      defaultProps,
      handleTreeClick,
    };
  },
});
</script>

<style scoped>
</style>