import {Dom,Addon} from '@antv/x6'


export const creatednd = ()=>{
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