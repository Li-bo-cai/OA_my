import { defineComponent } from '@vue/runtime-dom';

function drag(vm: any) {
    return {
        mounted(el: any, binding: any) {
            const oDiv = el; //获取当前元素
            debugger
            oDiv.onmousedown = function (e: any) {
                //鼠标按下，计算当前元素距离可视区的距离
                const disX: number = e.clientX - oDiv.offsetLeft;
                const disY: number = e.clientY - oDiv.offsetTop;
                document.onmousemove = function (e) {
                    //通过事件委托，计算移动的距离 
                    const l: number = e.clientX - disX;
                    const t: number = e.clientY - disY;
                    //移动当前元素 
                    oDiv.style.left = l + 'px';
                    oDiv.style.top = t + 'px';
                    //将此时的位置传出去
                    binding.value({ x: e.pageX, y: e.pageY })
                }
                document.onmouseup = function (e: any) {
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
            }
        }
    }
}

const vm = defineComponent({
    setup() {
        const el = '#box'
        const val = '123'
        const style = {
            width: '100px',
            height: '100px',
            background: 'aqua',
            position: 'absolute',
            right: '30px',
            top: 0
        }
        //接受传来的位置数据，并将数据绑定给data下的val
        const greet = (val: any) => {
            vm.val = val;
        }
        return {
            el,
            val,
            style,
            greet
        };
    },
});
export default drag(vm)