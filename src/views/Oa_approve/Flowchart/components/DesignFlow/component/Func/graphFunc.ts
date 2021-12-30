const graphFunc = (graph: any) => {
    graph.centerContent(); //画布居中
    graph.on("node:mouseenter", ({ node }: any) => {
        node.attr("body", {
            stroke: "#000",
            fill: "#F39C12",
        });
    });
    graph.on("node:mouseleave", ({ node }: any) => {
        node.attr("body", {
            stroke: "#F39C12",
            fill: "#F39C12",
        });
    });
    graph.on("node:delete", ({ view, e }: any) => {
        e.stopPropagation()
        view.cell.remove()
        // node.attr("body", {
        //     stroke: "#000",
        //     fill: "#F39C12",
        // });
    });
    graph.on("node:click", ({ node, e }: any) => {
        node.attr("body", {
            stroke: "#000",
            fill: "#F39C12",
        });
        console.log('1234');

    });
    // 创建节点
    graph.createNode({
        width: 100,
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
    })
}

export default graphFunc
