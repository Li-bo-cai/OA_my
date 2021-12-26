import  { Graph, Shape } from '@antv/x6'
// 节点注册
Graph.registerNode('custom-node',{
    markup:[{
        tagName: 'rect',
        selector: 'body',
      },
      {
        tagName: 'text',
        selector: 'label',
      },
      {
        tagName: 'g',
        children: [
          {
            tagName: 'text',
            selector: 'btnText',
          },
          {
            tagName: 'rect',
            selector: 'btn',
          },
        ],
      }],
      attrs: {
        btn: {
          refX: '100%',
          refX2: -28,
          y: 4,
          width: 24,
          height: 18,
          rx: 10,
          ry: 10,
          fill: 'rgba(255,255,0,0.01)',
          stroke: 'red',
          cursor: 'pointer',
          event: 'node:delete',
        },
        btnText: {
          fontSize: 14,
          fill: 'red',
          text: 'x',
          refX: '100%',
          refX2: -19,
          y: 17,
          cursor: 'pointer',
          pointerEvent: 'none',
        },
        body: {
          fill: '#ffffff',
          stroke: '#333333',
          strokeWidth: 2,
          refWidth: '100%',
          refHeight: '100%',
        },
        label: {
          fontSize: 14,
          fill: '#333333',
          refX: '50%',
          refY: '50%',
          textAnchor: 'middle',
          textVerticalAnchor: 'middle',
        },
      },
    },
    true,
)
const graphData = {
    // 节点
    nodes: [
        {
            id: 'node1', // String，可选，节点的唯一标识
            x: 40,       // Number，必选，节点位置的 x 值
            y: 40,       // Number，必选，节点位置的 y 值
            width: 80,   // Number，可选，节点大小的 width 值
            height: 40,  // Number，可选，节点大小的 height 值
            label: 'hello', // String，节点标签
            Shape:'custom-node',
            attrs: {
                body: {
                    fill: '#F39C12',
                    stroke: '#000',
                    strokeDasharray: '10,2',
                },
                label: {
                    text: 'Hello',
                    fill: '#333',
                    fontSize: 13,
                }
            },
        },
        {
            id: 'node2', // String，节点的唯一标识
            x: 70,      // Number，必选，节点位置的 x 值
            y: 150,      // Number，必选，节点位置的 y 值
            width: 15,   // Number，可选，节点大小的 width 值
            height: 15,  // Number，可选，节点大小的 height 值
            label: '+', // String，节点标签
            attrs: {
                body: {
                    fill: '#F39C12',
                    stroke: '#000',
                    rx: 16,
                    ry: 16,
                },
                label: {
                    text: '+',
                    fill: '#333',
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontVariant: 'small-caps',
                },
            },
        },
    ],
    // 边
    edges: [{
        source: 'node1', // String，必须，起始节点 id
        target: 'node2', // String，必须，目标节点 id
    }],
};

export default graphData