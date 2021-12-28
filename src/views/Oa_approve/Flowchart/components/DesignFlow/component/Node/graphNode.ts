import  { Graph } from '@antv/x6'
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
          refX2: -20,     //左右偏移量
          y: 3,           //上下偏移量
          width: 16,      //宽度
          height: 16,     //高度
          rx: 10,         //画圆 半径
          ry: 10,
          fill: 'rgba(255,255,0,0.01)',  //透明度
          stroke: 'red',
          cursor: 'pointer',
          event: 'node:delete',
        },
        btnText: {
          fontSize: 14,
          fill: 'red',
          text: 'x',
          refX: '100%',
          refX2: -15,
          y: 15,
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
            shape:'custom-node',
            attrs: {
                body: {
                    fill: '#F39C12',
                    stroke: '#F39C12',
                    strokeDasharray: '10,2',
                },
                label: {
                    text: 'Hello',
                    fill: '#333',
                    fontSize: 13,
                    cursor: 'pointer',
                }
            },
            ports:[
              {
                id: 'port1',
                attrs: {
                  circle: {
                    r: 6,
                    magnet: true,
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    fill: '#fff',
                  },
                },
              },
            ]
        },
        // {
        //     id: 'node2', // String，节点的唯一标识
        //     x: 70,      // Number，必选，节点位置的 x 值
        //     y: 150,      // Number，必选，节点位置的 y 值
        //     width: 15,   // Number，可选，节点大小的 width 值
        //     height: 15,  // Number，可选，节点大小的 height 值
        //     label: '+', // String，节点标签
        //     attrs: {
        //         body: {
        //             fill: '#F39C12',
        //             stroke: '#F39C12',
        //             rx: 16,
        //             ry: 16,
        //         },
        //         label: {
        //             text: '+',
        //             fill: '#333',
        //             fontSize: 18,
        //             fontWeight: 'bold',
        //             cursor: 'pointer',
        //             fontVariant: 'small-caps',
        //         },
        //     },
        // },
    ],
    // 边
    edges: [{
        // source: 'node1', // String，必须，起始节点 id
        // target: 'node2', // String，必须，目标节点 id
    }],
};

export default graphData