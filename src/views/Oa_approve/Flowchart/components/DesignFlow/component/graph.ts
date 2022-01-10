import { Graph, Shape, Dom, Addon } from "@antv/x6";
import { nextTick, onBeforeUnmount, reactive } from "vue";
import graphData from "./Node/graphNode";
import graphFunc from "./Func/graphFunc";

export const createGraphic = () => {

    const graph: Graph = new Graph({
        panning: {
            enabled: true,
            modifiers: "shift",
        },
        container: document.querySelector('#container') as HTMLDivElement,
        width: 800,
        height: 600,
        interacting: {
            nodeMovable: true, //是否允许节点移动
        },
        background: {
            color: "#fff", // 设置画布背景颜色
        },
        grid: {
            size: 10, // 网格大小 10px
            visible: true, // 渲染网格背景
        },
        minimap: {
            enabled: true,
            container: document.querySelector('.map') as HTMLDivElement,
            width: 150,
            height: 80,
            padding: 10,
            graphOptions: {
                async: true,
                createCellView(cell) {
                    // 在小地图中不渲染边
                    if (cell.isEdge()) {
                        return null;
                    }
                },
            },
        },
    });
    // let dnd: Addon.Dnd = reactive<any>(null)
    const { Dnd } = Addon 
    const dnd = new Dnd({
        target: graph,
        scaled: false,
        animation: true,
        validateNode(droppingNode, options) {
            return droppingNode.shape === "html"
                ? new Promise<boolean>((resolve) => {
                    const { draggingNode, draggingGraph } = options;
                    const view = draggingGraph.findView(draggingNode)!;
                    const contentElem = view.findOne('foreignObject > body > div');
                    // console.log(Dom,contentElem);
                    Dom.addClass(contentElem, "validating");
                    setTimeout(() => {
                        Dom.removeClass(contentElem, "validating");
                        resolve(true);
                    }, 3000);
                })
                : true;
        },
    })

    nextTick(() => {
        graph.fromJSON(graphData); //数据被加载
        graphFunc(graph); //调用方法
    })

    // nodeCircle = graph.createNode({
    //     width: 60,
    //     height: 60,
    //     attrs:{
    //         body: {
    //             rx: 60,
    //             ry: 60,
    //         },
    //     },
    //     shape: "html",
    //     html: () => {
    //         const wrap = document.createElement("div");
    //         wrap.style.width = "58px";
    //         wrap.style.height = "58px";
    //         wrap.style.display = "flex";
    //         wrap.style.alignItems = "center";
    //         wrap.style.justifyContent = "center";
    //         wrap.style.border = "1px solid rgb(49, 208, 198)";
    //         wrap.style.background = "#fff";
    //         wrap.style.borderRadius = "50%";
    //         wrap.innerText = "Circle";
    //         return wrap;
    //     },
    // });

    onBeforeUnmount(() => {
        graph.dispose(); //画布被销毁
    });

    return {
        graph,
        dnd,
    }
};
