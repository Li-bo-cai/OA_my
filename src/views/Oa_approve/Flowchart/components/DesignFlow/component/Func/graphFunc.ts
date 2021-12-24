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
    graph.on("node:click ", ({ node }: any) => {
        node.attr("body", {
            stroke: "#ccc",
            fill: "#ccc",
        });
    });
}

export default graphFunc
