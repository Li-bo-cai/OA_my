import {init,dndInit} from "@/utils/graph";
import { nextTick, onBeforeUnmount, ref } from "vue";
import graphData from "./Node/graphNode";
import { graphFunc } from "./Func/graphFunc";
import createNode from "./Node/graphCreateNode";

export const createGraphic = () => {
    const graph = ref()
    const dnd = ref()
    
    
    const startDrag = (e: any) => {
        const { nodeRect, nodeCopy, nodeCircle } = createNode(graph.value);
        const target = e.currentTarget;
        const type = target.getAttribute("data-type");
        let node: any;

        if (type == "rect") {
            node = nodeRect;
        } else if (type == "copy") {
            node = nodeCopy;
        } else if (type == "circle") {
            node = nodeCircle;
        }
        dnd.value.start(node, e);
    };

    nextTick(() => {
        graph.value = init()
        dnd.value = dndInit(graph.value)
        graph.value.fromJSON(graphData); //数据被加载
        graphFunc(graph.value); //调用方法
    })

    onBeforeUnmount(() => {
        graph.value.dispose(); //画布被销毁
    });

    return {
        startDrag,
    }
};
