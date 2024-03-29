import { Graph } from "@antv/x6";
import store from "@/store";
import VUex from '@/utils/usVuex'
import { insiseGraphForm } from '@/store/modules/graph'
import { computed, reactive, ref, watch } from "vue";

const graphStore: VUex = new VUex(store)

const tools = [{
    name: 'button-remove',
    args: {
        x: '100%',
        y: 0,
        offset: { x: -10, y: 10 },
    },
}]

let nowNode: any;  //当前选中节点

const gTypeFile: any = reactive(computed(() => {
    return graphStore.useState('graphModule', 'gForm')
}))

const confirmStatus = ref(computed(() => {
    return graphStore.useState('graphModule', 'confirmStatus')
}))

export const graphFunc = (graph: Graph) => {
    graph.centerContent(); //画布居中
    // // 节点移入
    // graph.on("node:mouseenter", ();
    // // 节点移出
    // graph.on("node:mouseleave", ();
    // 节点删除
    graph.on("node:delete", ({ view, e }: any) => {
        e.stopPropagation()
        view.cell.remove()
    });
    // // 节点双击
    // graph.on("node:contextmenu", ();
    // // 节点单击事件
    graph.on('node:click', nodeClick)
    // 节点移除事件
    graph.on('node:removed', ({ node }: any) => {
        graphStore.useMutations('graphModule', 'SET_DISABLED', true)
        // console.log(node);
    })
    // // 边的单击事件
    // graph.on('edge:click', )
    // 边的移入
    graph.on('edge:mouseenter', edgeMouseenter)
    //   边的移出
    graph.on('edge:mouseleave', ({ edge }) => {
        edge.removeTools()
    })


    // 边的移入事件
    function edgeMouseenter({ edge }: any) {
        edge.addTools([
            // 'source-arrowhead',
            'target-arrowhead',
            {
                name: 'button-remove',
                args: {
                    distance: "50%",
                },
            },
        ])
    }


    // 节点点击事件
    function nodeClick({ node }: any) {
        reset()
        node.attr('body/stroke', 'black')
        console.log(node, '这串数据将要存入仓库');
        const data = node.store.data

        const type = data.attrs.other.type
        const gForm: insiseGraphForm = Object.assign({ id: data.id, }, data.attrs.other)
        if (type == 0) {
            graphStore.useMutations('graphModule', 'SET_DISABLED', true)
            return
        } else if (type == 4) {
            graphStore.useMutations('graphModule', 'SET_DISABLED', true)
            node.addTools(tools)
            return
        }
        graphStore.useMutations('graphModule', 'SET_GFORM', gForm)
        node.addTools(tools)
        graphStore.useMutations('graphModule', 'SET_DISABLED', false)
        // 将点击后的node属性传递到外面
        nowNode = node
    }

    function reset() {
        graph.drawBackground({ color: '#fff' })
        const nodes = graph.getNodes()
        const edges = graph.getEdges()
        nodes.forEach((node) => {
            node.attr('body/stroke', 'orange')
            node.removeTools()
        })
        edges.forEach((edge) => {
            edge.attr('line/stroke', 'black')
            edge.prop('labels/0', {
                attrs: {
                    body: {
                        stroke: 'black',
                    },
                },
            })
        })
    }

    watch(confirmStatus, (newVal: any) => {
        if (newVal) {
            const allGraphData = graph.toJSON()
            const nowNode_Id = nowNode.id
            const getForm = graphStore.useState('graphModule', 'gForm')
            allGraphData.cells.forEach((item: any) => {
                let type = ''
                if (item.id === nowNode_Id) {
                    item.attrs.other = getForm
                    switch (gTypeFile.value.type) {
                        case 1:
                            type = '发起人'
                            break;
                        case 2:
                            type = '审批人'
                            break;
                        case 3:
                            type = '抄送人'
                            break
                    }
                    if (gTypeFile.value.changeOptType == 1) {
                        item.attrs.label.text = type + '\n' + '所有人'
                    }
                    if (gTypeFile.value.changeOptType == 2) {
                        const number = item.attrs.other.user.peoples.length;
                        item.attrs.label.text = type + '\n' + '已指定' + number + '人'
                    }
                    if (gTypeFile.value.changeOptType == 3) {
                        item.attrs.label.text = type + '\n' + (gTypeFile.value.more == 1 ? '发起人自选(一人)' : '发起人自选(多人)')
                    }
                    if (gTypeFile.value.changeOptType == 4) {
                        item.attrs.label.text = type + '\n' + '连续多级主管(全部)'
                    }
                    if (gTypeFile.value.changeOptType == 5) {
                        item.attrs.label.text = type + '\n' + (gTypeFile.value.limit_time == 1 ? '发起人的直接主管' : `发起人的第 ${gTypeFile.value.limit_time} 级主管`)
                    }
                    if (gTypeFile.value.changeOptType == 6) {
                        item.attrs.label.text = type + '\n' + "角色-人才"
                    }
                    item.attrs.label.type = gTypeFile.value.type
                }
            });

            graph.fromJSON(allGraphData); //数据被加载

            graphStore.useMutations('graphModule', 'SET_CF_STATUS', false)
        }
    })
}
