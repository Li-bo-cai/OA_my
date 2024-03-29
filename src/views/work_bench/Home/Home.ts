import { Chart, registerTheme } from "@antv/g2"
import { computed, nextTick, onMounted, reactive, watch } from "vue"
import { usVuex } from '@/main'

const homeStore = usVuex

registerTheme('newTheme', {
    defaultColor: 'red',
    minColumnWidth: 12,
});

class SelfChart {
    container: string;
    // width: number;
    // height: number;
    chart: Chart;
    constructor(container: string) {
        this.container = container
        // this.width = (document.querySelector('#' + this.container) as HTMLDivElement).clientWidth
        // this.height = (document.querySelector('#' + this.container) as HTMLDivElement).clientHeight
        this.chart = new Chart({
            container: this.container, // 指定图表容器 ID
            autoFit: true,
            // width: this.width, // 指定图表宽度
            // height: 200, // 指定图表高度
            height: 200, // 指定图表高度
            padding: 'auto',
            appendPadding: [0, 30, 0, 0]
        })
    }
    createChart(data: any) {
        this.chart.data(data);
        // Step 2: 载入数据源
        this.chart.scale('population', { nice: true });
        // tooltip 是否设置提示
        // this.chart.tooltip({
        //     showMarkers: false
        // });
        // Step 4: 渲染图表
        this.chart.render();
    }
}

export default () => {

    const allData = reactive<any>(computed(() => {
        return homeStore.useState('homeModule', 'chartData')
    }))

    const createFunc = (obj: any) => {
        for (const key in obj) {
            const spaceChart = new SelfChart(key)
            spaceChart.chart.coordinate().transpose();
            spaceChart.chart.interaction('active-region');
            const keyArr = Object.keys(obj[key].data[0])
            spaceChart.chart.interval().position(`${keyArr[0]}*${keyArr[1]}`); //'type*obj'
            // 添加文本标注
            obj[key].data.forEach((item: any) => {
                const DatakeyArr = Object.keys(item)
                spaceChart.chart
                    .annotation()
                    .text({
                        position: [item[DatakeyArr[0]], item[DatakeyArr[1]]],
                        content: item[DatakeyArr[1]],
                        style: {
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fill: '#fff',
                        },
                        offsetX: 20,
                    })
            });
            spaceChart.chart.tooltip({
                itemTpl: '<li style="padding-bottom:10px"><div style="background-color:{color};" class="g2-tooltip-marker"></div>数据: {value}</li>'//定义标头
            });
            spaceChart.createChart(obj[key].data)
        }
    }

    const createTimeChart = (value: any) => {
        const timeChart = new Chart({
            container: 'overtime', // 指定图表容器 ID
            autoFit: true,
            height: 400, // 指定图表高度
            padding: 'auto',
            appendPadding: [0, 30, 0, 0]
        })
        timeChart.coordinate().transpose().scale(1, -1);
        timeChart.height = 800
        timeChart.scale({
            value: {
                max: 100,
                min: 0,
                alias: '单位·小时',
            },
        });

        timeChart.axis('group', {
            label: {
                style: {
                    fill: '#aaaaaa',
                    fontSize: 12,
                },
            },
            tickLine: null,
            title: null,
        });
        timeChart.axis('value', {
            label: {
                style: {
                    fill: '#aaaaaa',
                    fontSize: 12,
                },
            },
            title: {
                style: {
                    fontSize: 12,
                    fontWeight: 300,
                },
                position: 'end'
            },
        });
        timeChart.legend({
            position: 'bottom', // 设置图例的显示位置
            itemGap: 20, // 图例项之间的间距
            maxRow: 2, //设置最大行数
            flipPage: false, //是否进行分页
        });
        timeChart.tooltip({
            shared: true,
            showMarkers: false,
        });

        timeChart
            .interval()
            .position('group*value')
            .color('top')
            .adjust([
                {
                    type: 'dodge',
                    marginRatio: 0.3,
                },
            ])
            .label('name', () => {
                const offset = 4;
                const shadowBlur = 2;
                const fill = 'white';
                return {
                    offset,
                    style: {
                        fill,
                        stroke: null,
                        shadowBlur,
                        shadowColor: 'rgba(0, 0, 0, .45)',
                    }
                };
            });

        timeChart.data(value);

        timeChart.interaction('active-region');
        // timeChart.interaction('legend-highlight');
        // timeChart.theme('newTheme');
        timeChart.render()
    }

    onMounted(() => {
        homeStore.useActions('homeModule', 'GET_HOME_DATA')
    })

    watch(allData, (newVal) => {
        nextTick(() => {
            createFunc(newVal.staff)
            createTimeChart(newVal.overtime)
        })
    })
    return {
        allData,
    }
}