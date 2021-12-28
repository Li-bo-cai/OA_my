import { Graph, Shape, } from "@antv/x6";

export const createGraphic = () => {
    return new Graph({
        panning: {
            enabled: true,
            modifiers: "shift",
        },
        container: document.querySelector('#container') as HTMLDivElement,
        width: 800,
        height: 600,
        interacting: {
            nodeMovable: false, //是否允许节点移动
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
                // getCellView(cell) {
                //   // 用指定的 View 替换节点默认的 View
                //   if (cell.isNode()) {
                //     return SimpleNodeView;
                //   }
                // },
                createCellView(cell) {
                    // 在小地图中不渲染边
                    if (cell.isEdge()) {
                        return null;
                    }
                },
            },
        },
    });
};

