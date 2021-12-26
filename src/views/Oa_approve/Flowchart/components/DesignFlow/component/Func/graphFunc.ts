const graphFunc = (graph: any) => {
    graph.centerContent(); //画布居中
    graph.on("node:mouseenter", ({ node }: any) => {
        node.attr("body", {
            stroke: "orange",
            fill: "orange",
        });
    });
    graph.on("node:mouseleave", ({ node }: any) => {
        node.attr("body", {
            stroke: "#000",
            fill: "#F39C12",
        });
    });
    graph.on("node:delete", ({ node,e }: any) => {
        e.stopPropagation()
        node.cell.remove()
        // node.attr("body", {
        //     stroke: "#000",
        //     fill: "#F39C12",
        // });
    });
}

export default graphFunc
