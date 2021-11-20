import { App } from 'vue';

export default {
    install(Vue: App<Element>) {
        Vue.directive('drag', {
            mounted(el: HTMLElement, bind) {
                el.onmousedown = (e) => {
                    const elLeft = el.offsetLeft;
                    const elTop = el.offsetTop;
                    const dom = <HTMLElement>e.target;
                    if (dom.classList.contains('drag-target')) {
                        const x = e.clientX;
                        const y = e.clientY;
                        document.onmousemove = (move: MouseEvent) => {
                            // const bodyW = (document.querySelector('#outBox') as HTMLDivElement).clientWidth;
                            const bodyW = document.body.clientWidth;
                            const bodyH = document.body.clientHeight;

                            let left = elLeft - (x - move.clientX);
                            if (left < 0) {
                                left = 0;
                            }
                            if (left > bodyW - el.offsetWidth) {
                                left = bodyW - el.offsetWidth;
                            }
                            el.style.left = left + 'px'
                            let top = elTop - (y - move.clientY);
                            if (top < 0) {
                                top = 0;
                            }
                            if (top > bodyH - el.offsetHeight) {
                                top = bodyH - el.offsetHeight
                            }
                            el.style.top = top + 'px'

                            document.onmouseup = (up: MouseEvent) => {
                                document.onmousemove = null;
                                document.onmouseup = null
                            }
                            if (window.getSelection()) {
                                window.getSelection()?.removeAllRanges()
                            }
                        }
                    }
                }
            },
            unmounted(el, bind) {
                el.onmousedown = null;
            }

        })
    }
}