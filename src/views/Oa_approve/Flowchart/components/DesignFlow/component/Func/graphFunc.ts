import { Graph } from "@antv/x6";

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
    // 节点双击
    graph.on("node:contextmenu", ({ node, e }: any) => {
        e.stopPropagation()
        const data = node.store.data
        const newWidth = data.position.x + data.size.width + 10
        const newHeight = data.position.y + data.size.height / 2
        // console.log(newWidth,newHeight);

        const node3 = graph.createNode({
            x: newWidth,
            y: newHeight,
            width: 80,
            height: 40,
            attrs: {
                label: {
                    text: "Rect",
                    fill: "#6a6c8a",
                },
                body: {
                    stroke: "#31d0c6",
                    strokeWidth: 2,
                },
            },
            shape: 'custom-node',
        })
        graph.addNode(node3)
        node.attr("body", {
            stroke: "#000",
            fill: "#F39C12",
        });
        console.log(node);
    });
    // 节点单击事件
    graph.on('node:click', ({ node }: any) => {
        reset()
        node.attr('body/stroke', 'black')
    })
    // 边的单击事件
    graph.on('edge:click', ({ view, edge }: any) => {
        reset()
        edge.appendLabel({
            attrs: {
                label: {
                    text: 'Eege',
                }
            },
        })
        edge.attr('line/stroke', 'orange')
        edge.prop('labels/0', {
            attrs: {
                body: {
                    stroke: 'orange',
                },
            },
        })
    })
    // 边的双击事件
    graph.on('edge:dblclick', ({ view, edge }: any) => {
        view.cell.remove()
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
