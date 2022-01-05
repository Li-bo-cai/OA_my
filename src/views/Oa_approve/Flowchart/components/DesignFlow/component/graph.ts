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
    const dnd: Addon.Dnd= new Dnd({
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
    let nodeRect = reactive<any>(null)
    let nodeCircle = reactive<any>(null)
    let nodeCopy = reactive<any>(null)

    nodeRect = graph.createNode({
        width: 80,
        height: 40,
        attrs: {
            label: {
                text: "审批人",
                fill: '#333',
            },
            body: {
                fill: '#F39C12',
                stroke: '#F39C12',
                strokeWidth: 2,
            },
        },
        shape:'custom-node',
        ports:{
            groups:{
              out:{
                position: 'bottom',    // 链接桩位置
                attrs: {
                  circle: {
                    r: 6,
                    magnet: true,
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    fill: '#fff',
                  },
                },
              } 
            },
            items:[{
                id: 'port1',
                group: 'out',
              }]
          }
    })

    nodeCopy = graph.createNode({
        width: 80,
        height: 40,
        attrs: {
            label: {
                text: "抄送人",
                fill: '#333',
            },
            body: {
                fill: '#F39C12',
                stroke: '#F39C12',
                strokeWidth: 2,
            },
        },
        shape:'custom-node',
        ports:{
            groups:{
              out:{
                position: 'bottom',    // 链接桩位置
                attrs: {
                  circle: {
                    r: 6,
                    magnet: true,
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    fill: '#fff',
                  },
                },
              } 
            },
            items:[{
                id: 'port1',
                group: 'out',
              }]
          }
    })

    nodeCircle = graph.createNode({
        width: 60,
        height: 60,
        attrs:{
            body: {
                rx:30,
                ry:30,
                fill: '#F39C12',
                stroke: '#F39C12',
            },
            label: {
                text: '结束',
                fill: '#333',
                fontSize: 13,
                cursor: 'pointer',
            }
        },

        shape:'custom-node',
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
        nodeRect,
        nodeCopy,
        nodeCircle
    }
};
