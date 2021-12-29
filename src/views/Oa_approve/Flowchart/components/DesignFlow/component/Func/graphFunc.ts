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
}

export default graphFunc
