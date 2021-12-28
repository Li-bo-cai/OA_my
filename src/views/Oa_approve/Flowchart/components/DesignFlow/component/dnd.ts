import {Dom,Addon} from '@antv/x6'

export const creatednd = (graph:any)=>{
    const { Dnd } = Addon
    return new Dnd({
        target: graph,
        scaled: false,
        animation: true,
        validateNode(droppingNode, options) {
          return droppingNode.shape === "html"
            ? new Promise<boolean>((resolve) => {
                const { draggingNode, draggingGraph } = options;
                const view = draggingGraph.findView(draggingNode)!;
                const contentElem = view.findOne(
                  "foreignObject > body > div"
                );
                Dom.addClass(contentElem, "validating");
                setTimeout(() => {
                    Dom.removeClass(contentElem, "validating");
                  resolve(true);
                }, 3000);
              })
            : true;
        },
      });
      
}

export const startDrag = (e: any,graph:any,dnd:any) => {
    const target = e.currentTarget;
    const type = target.getAttribute("data-type");
    const node =
      type === "rect"
        ? graph.createNode({
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
        : graph.createNode({
            width: 60,
            height: 60,
            shape: "html",
            html: () => {
              const wrap = document.createElement("div");
              wrap.style.width = "100%";
              wrap.style.height = "100%";
              wrap.style.display = "flex";
              wrap.style.alignItems = "center";
              wrap.style.justifyContent = "center";
              wrap.style.border = "2px solid rgb(49, 208, 198)";
              wrap.style.background = "#fff";
              wrap.style.borderRadius = "100%";
              wrap.innerText = "Circle";
              return wrap;
            },
          });

    dnd.start(node, e.nativeEvent as any);
  };