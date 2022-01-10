const createNode = (graph: any) => {
    const nodeCopy = graph.createNode({
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
        shape: 'custom-node',
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
    })

    const nodeCircle = graph.createNode({
        width: 60,
        height: 60,
        attrs: {
            body: {
                rx: 30,
                ry: 30,
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

        shape: 'custom-node',
    })

    const nodeRect = graph.createNode({
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
        shape: 'custom-node',
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
    })

    return {
        nodeRect,
        nodeCopy,
        nodeCircle,
    }
}

export default createNode