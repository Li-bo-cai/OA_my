import { Graph } from "@antv/x6";
import store from "@/store";
import VUex from '@/utils/usVuex'
import {insiseGraphForm} from '@/store/modules/graph'

const graphStore:VUex = new VUex(store)

const tools = [{
    name: 'button-remove',
    args: {
        x: '100%',
        y: 0,
        offset: { x: -10, y: 10 },
    },
}]

const graphFunc = (graph: Graph) => {
    graph.centerContent(); //画布居中
    // // 节点移入
    // graph.on("node:mouseenter", ({ node }: any) => {
    //     node.attr("body", {
    //         stroke: "#000",
    //         fill: "#F39C12",
    //     });
    // });
    // // 节点移出
    // graph.on("node:mouseleave", ({ node }: any) => {
    //     node.attr("body", {
    //         stroke: "#F39C12",
    //         fill: "#F39C12",
    //     });
    // });
    // 节点删除
    graph.on("node:delete", ({ view, e }: any) => {
        e.stopPropagation()
        view.cell.remove()
    });
    // // 节点双击
    // graph.on("node:contextmenu", ({ node, e }: any) => {
    // });
    // // 节点单击事件
    graph.on('node:click', ({ node }: any) => {
        reset()
        node.attr('body/stroke', 'black')
        console.log(node,'这串数据将要存入仓库');
        const data = node.store.data
        const type = data.type
        const gForm:insiseGraphForm = {
            id:data.id,
            name:data.attrs.label.text,
            type:type,
        }
        graphStore.useMutations('graphModule','SET_GFORM',gForm)
        if(type==0){
            graphStore.useMutations('graphModule','SET_DISABLED',true)
            return

        }else if(type == 4){
            graphStore.useMutations('graphModule','SET_DISABLED',true)
            node.addTools(tools)
            return
        }
        node.addTools(tools)
        graphStore.useMutations('graphModule','SET_DISABLED',false)
    })
    // 节点移除事件
    graph.on('node:removed',({node}:any)=>{
        graphStore.useMutations('graphModule','SET_DISABLED',true)
        // console.log(node);
    })
    // // 边的单击事件
    // graph.on('edge:click', ({ view, edge }: any) => {
    // })
    // 边的移入
    graph.on('edge:mouseenter', ({ edge }) => {
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
    })
    //   边的移出
    graph.on('edge:mouseleave', ({ edge }) => {
        edge.removeTools()
    })

    function reset() {
        graph.drawBackground({ color: '#fff' })
        const nodes = graph.getNodes()
        const edges = graph.getEdges()
        nodes.forEach((node: any) => {
            node.attr('body/stroke', 'orange')
            node.removeTools()
        })
        edges.forEach((edge: any) => {
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
}

export default graphFunc
