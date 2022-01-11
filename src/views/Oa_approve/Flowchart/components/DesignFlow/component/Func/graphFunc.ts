import { Graph } from "@antv/x6";
import store from "@/store";
import VUex from '@/utils/usVuex'
import {insiseGraphForm} from '@/store/modules/graph'

const graphStore:VUex = new VUex(store)

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
    //     e.stopPropagation()
    //     const data = node.store.data
    //     const newWidth = data.position.x + data.size.width + 10
    //     const newHeight = data.position.y + data.size.height / 2
    //     const node3 = graph.createNode({
    //         x: newWidth,
    //         y: newHeight,
    //         width: 80,
    //         height: 40,
    //         attrs: {
    //             label: {
    //                 text: "Rect",
    //                 fill: "#6a6c8a",
    //             },
    //             body: {
    //                 stroke: "#31d0c6",
    //                 strokeWidth: 2,
    //             },
    //         },
    //         shape: 'custom-node',
    //     })
    //     graph.addNode(node3)
    //     node.attr("body", {
    //         stroke: "#000",
    //         fill: "#F39C12",
    //     });
    //     console.log(node);
    // });
    // // 节点单击事件
    graph.on('node:click', ({ node }: any) => {
        node.attr('body/stroke', 'black')
        console.log(node,'这串数据将要存入仓库');
        const data = node.store.data
        const gForm:insiseGraphForm = {
            id:data.id,
            name:data.attrs.label.text,
            type:data.type,
        }
        graphStore.useMutations('graphModule','SET_DISABLED',false)
        graphStore.useMutations('graphModule','SET_GFORM',gForm)
    })
    // // 边的单击事件
    // graph.on('edge:click', ({ view, edge }: any) => {
    //     reset()
    //     edge.appendLabel({
    //         attrs: {
    //             label: {
    //                 text: 'Eege',
    //             }
    //         },
    //     })
    //     edge.attr('line/stroke', 'orange')
    //     edge.prop('labels/0', {
    //         attrs: {
    //             body: {
    //                 stroke: 'orange',
    //             },
    //         },
    //     })
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
