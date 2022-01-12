import { Chart } from "@antv/g2"
import { nextTick } from "vue"

class SelfChart {
    container: string;
    constructor(container: string) {
        this.container = container
    }
    createChart() {
        return new Chart({
            container: this.container, // 指定图表容器 ID
            width: 600, // 指定图表宽度
            height: 200, // 指定图表高度
        })
    }
}

export default () => {
    const data = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
    ];

    nextTick(() => {
        // const chart = new Chart({
        //     container: 'chart', // 指定图表容器 ID
        //     width: 600, // 指定图表宽度
        //     height: 200, // 指定图表高度
        // })
        // chart.data(data);
        // // Step 2: 载入数据源
        // chart.scale('population', { nice: true });
        // chart.coordinate().transpose();
        // chart.tooltip({
        //     showMarkers: false
        // });
        // chart.interaction('active-region');
        // // Step 3: 创建图形语法，绘制柱状图
        // chart.interval().position('genre*sold');
        // // Step 4: 渲染图表
        // chart.render();
    })
    return {

    }
}