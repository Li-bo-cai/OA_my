import { Chart, Util } from "@antv/g2"
import { computed, nextTick, onMounted, reactive, ref, watch } from "vue"
import { usVuex } from '@/main'

const homeStore = usVuex

class SelfChart {
    container: string;
    width: number;
    height: number;
    chart: Chart;
    constructor(container: string) {
        this.container = container
        this.width = (document.querySelector('#' + this.container) as HTMLDivElement).clientWidth
        this.height = (document.querySelector('#' + this.container) as HTMLDivElement).clientHeight
        this.chart = new Chart({
            container: this.container, // 指定图表容器 ID
            autoFit: true,
            // width: this.width, // 指定图表宽度
            height: this.height, // 指定图表高度
            padding: 'auto',
            appendPadding: [0, 30, 0, 0]
        })
    }
    createChart(data: any) {
        this.chart.data(data);
        // Step 2: 载入数据源
        this.chart.scale('population', { nice: true });
        // tooltip 是否设置提示
        this.chart.tooltip({
            showMarkers: false
        });
        // Step 4: 渲染图表
        this.chart.render();
    }
}

export default () => {

    const allData = reactive<any>(computed(() => {
        return homeStore.useState('homeModule', 'chartData')
    }))
    const createFunc = (value: any) => {
        for (const key in value) {

            const divDom = document.createElement('div')
            divDom.id = key
            divDom.className = 'chart'
            // divDom.style.width = '300px'
            divDom.style.height = '200px'

            const chartBox: HTMLDivElement | null = document.querySelector('.chart_box');

            (chartBox as HTMLDivElement).appendChild(divDom)

            const spaceChart = new SelfChart(key)
            spaceChart.chart.coordinate().transpose();
            spaceChart.chart.interaction('active-region');
            const keyArr = Object.keys(value[key][0])
            spaceChart.chart.interval().position(`${keyArr[0]}*${keyArr[1]}`); //'type*value'
            // 添加文本标注
            value[key].forEach((item: any) => {
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
            spaceChart.createChart(value[key])
        }
    }

    onMounted(() => {
        homeStore.useActions('homeModule', 'GET_HOME_DATA')
    })

    watch(allData, (newVal, oldVal) => {
        nextTick(() => {
            createFunc(newVal.staff)
        })
    })

    nextTick(() => {
        // createFunc(allData.value)


        // const genderChart = new SelfChart('gender')
        // genderChart.chart.coordinate().transpose();
        // genderChart.chart.interaction('active-region');
        // // Step 3: 创建图形语法，绘制柱状图
        // genderChart.chart.interval().position('type*value');
        // genderChart.createChart(allData.value.gender)



        // const state = new SelfChart('state')
        // state.chart.coordinate('theta', {
        //     radius: 0.75
        // });
        // state.chart.interaction('element-single-selected');
        // const interval = state.chart
        //     .interval()
        //     .adjust('stack')
        //     .position('value')
        //     .color('type', ['#063d8a', '#1770d6', '#47abfc', '#38c060'])
        //     .style({ opacity: 0.4 })
        //     .state({
        //         active: {
        //             style: (element) => {
        //                 const shape = element.shape;
        //                 return {
        //                     matrix: Util.zoom(shape, 1.1),
        //                 }
        //             }
        //         }
        //     })
        //     .label('type', (val) => {
        //         const opacity = val === '四线及以下' ? 1 : 0.5;
        //         return {
        //             offset: -30,
        //             style: {
        //                 opacity,
        //                 fill: 'white',
        //                 fontSize: 12,
        //                 shadowBlur: 2,
        //                 shadowColor: 'rgba(0, 0, 0, .45)',
        //             },
        //             content: (obj) => {
        //                 return obj.type + '\n' + obj.value + '%';
        //             },
        //         };
        //     });
        // state.chart.interaction('element-single-selected');
        // state.createChart(city)
    })
    return {

    }
}