
const group = {
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
}

const createNode = (graph: any) => {
    const nodeRect = graph.createNode({
        width: 120,
        height: 50,
        attrs: {
            label: {
                text: "人员选择",
                fill: '#333',
            },
            other: {
                type: 1,
                changeOptType: 1,
                limit_timeType: 1,
                limit_time: 0,
                more: 1,
                examineModel: 1,
                terminus: 1,
                terminus_plies: 1,
                approverisNull: 1,
                hasBeen: false,
                user: {
                    type: 1,
                    peoples: [],
                    departs: [],
                    otherInfo: ''
                }
            },
            body: {
                fill: '#F39C12',
                stroke: '#F39C12',
                strokeWidth: 2,
            },
        },
        ports: {
            groups: group,
            items: [{
                id: 'port1',
                group: 'out',
            }]
        }
    })

    const nodeTerm = graph.createNode({
        width: 120,
        height: 80,
        attrs: {
            label: {
                text: "条件分支",
                fill: '#333',
            },
            body: {
                fill: '#F39C12',
                stroke: '#F39C12',
                strokeWidth: 2,
                refPoints: '0,10 10,0 20,10 10,20',
            },
            other: {
                type: 4,
            }
        },
        shape: 'custom-polygon',
        ports: {
            groups: group,
            items: [{
                id: 'port1',
                group: 'out',
            }]
        }
    })

    const nodeCircle = graph.createNode({
        width: 60,
        height: 60,
        shape: 'circle',
        attrs: {
            body: {
                fill: '#F39C12',
                stroke: '#F39C12',
            },
            label: {
                text: '结束',
                fill: '#333',
                fontSize: 13,
                type: 4,
            },
        },
    })

    return {
        nodeRect,
        nodeTerm,
        nodeCircle,
    }
}

export default createNode


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
