import { Addon, Dom, Graph } from "@antv/x6";
import { Dnd } from "@antv/x6/lib/addon";
import { Node } from "@antv/x6";

export default class GraphX6 {
    container: HTMLElement | null
    map: HTMLElement | null
    graph: Graph | undefined;
    dnd: Dnd | undefined;
    constructor(selecter: string, map: string) {
        this.container = document.querySelector(selecter)
        this.map = document.querySelector(map)
        this.graph
        this.dnd
        this.init()
        this.dndInit()
    }
    init() {
        this.graph = new Graph({
            panning: {
                enabled: true,
                modifiers: "shift",
            },
            container: this.container as HTMLElement,
            width: (this.container as HTMLElement).clientWidth,
            height: (this.container as HTMLElement).clientHeight,
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
                container: this.map as HTMLDivElement,
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
        })
    }
    dndInit() {
        const { Dnd } = Addon
        this.dnd = new Dnd({
            target: this.graph as Graph,
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
    }
    createNode(metadata: Node.Metadata) {
        return this.graph?.createNode(metadata)
    }
}