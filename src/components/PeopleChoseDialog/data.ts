import { onMounted, onUnmounted, ref } from "vue";
import type Node from 'element-plus/es/components/tree/src/model/node'
import { ElTree } from "element-plus";
import mitt from "@/utils/mitt";
import { department_com_show2, staff_check2, insideCheck } from "@/api/organization/organization.api";


export default (props: any) => {
    type ElTreeType = InstanceType<typeof ElTree>;
    const search_people = ref<string>('')  //搜索人员
    const organizaData = ref('');
    const depart_tree = ref<ElTreeType>()   //tree节点
    const checkedTree = ref<any>([])  //被选中的树节点

    onMounted(() => {
        mitt.on('delete-check', deletecheck)
    })
    onUnmounted(() => {
        mitt.on('delete-check', deletecheck)
    })

    // 获取架构树
    const organiza = () => {
        department_com_show2().then((res) => {
            if (res.data.code == 1) {
                organizaData.value = res.data.data;
            }
        });
    };
    // 树节点选中事件
    const handleCheckedNodes = (node: Node) => {
        // console.log(node);
        if (props.showData == 1) {
            const treeArr = (depart_tree.value as ElTreeType).getCheckedNodes(true, false)
            checkedTree.value = treeArr
            mitt.emit('change-check', treeArr)
        }

    }
    // 树节点点击事件
    const handleNodeClick = (data: any, node: Node, event: any) => {
        if (props.showData == 2) {
            const param: insideCheck = {
                depart_id: data.id,
            }
            staff_check2(param).then((res) => {
                // console.log(res);
                if (res.data.code == 1) {
                    mitt.emit('people-check', res.data.data.data)
                }
            })
        }
        // nextTick(()=>{
        //     const treeArr =(depart_tree.value as ElTreeType).getCheckedNodes(true,true)
        //     console.log(treeArr);
        // })
    }
    // 监听delete-check返回后重新渲染tree
    const deletecheck = (e: any) => {
        (depart_tree.value as ElTreeType).setCheckedNodes(checkedTree.value, true)
    }


    return {
        search_people,
        organizaData,
        depart_tree,
        organiza,
        handleCheckedNodes,
        handleNodeClick
    }
}