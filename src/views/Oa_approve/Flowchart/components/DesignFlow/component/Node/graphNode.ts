import { Graph } from '@antv/x6'

const ports = {
  groups: {
    top: {
      position: 'top',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    right: {
      position: 'right',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    bottom: {
      position: 'bottom',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    left: {
      position: 'left',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
  },
  items: [
    {
      group: 'top',
    },
    {
      group: 'right',
    },
    {
      group: 'bottom',
    },
    {
      group: 'left',
    },
  ],
}
// 节点注册
Graph.registerNode(
  'custom-polygon',
  {
    inherit: 'polygon',
    width: 66,
    height: 36,
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: '#5F95FF',
        fill: '#EFF4FF',
      },
      text: {
        fontSize: 12,
        fill: '#262626',
      },
    },
    ports: {
      ...ports,
      items: [
        {
          group: 'top',
        },
        {
          group: 'bottom',
        },
      ],
    },
  },
  true,
)
// 注册边
Graph.registerEdge(
  'bpmn-edge',
  {
    inherit: 'edge',
    attrs: {
      line: {
        stroke: '#A2B1C3',
        strokeWidth: 2,
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
      label: 'begin', // String，节点标签
      event: 'none',
      attrs: {
        body: {
          fill: '#F39C12',
          stroke: '#F39C12',
          strokeDasharray: '10,2',
        },
        label: {
          text: '开始',
          fill: '#333',
          fontSize: 13,
          cursor: 'pointer',
        },
        other:{
          type:0,
        }
      },
      ports: {
        groups: {
          out: {
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
        items: [{
          id: 'port1',
          group: 'out',
        }]
      }
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
  // edges: [{
  //     source: 'node1', // String，必须，起始节点 id
  //     target: 'node2', // String，必须，目标节点 id
  // }],
};

export default graphData