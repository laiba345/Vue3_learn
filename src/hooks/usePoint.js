import { reactive, onMounted, onBeforeUnmount } from 'vue'
// 默认暴露的特点，最后起什么名字需要看最后引入的起什么名字
export default function() {
    // 存储鼠标打点相关的数据
    let point = reactive({
        x: 0,
        y: 0
    })

    // 实现鼠标打点相关的方法
    function savePoint(event) {
        console.log(event.pageX, event.pageY)
        point.x = event.pageX
        point.y = event.pageY
    }

    // 实现鼠标打点相关的生命周期钩子
    onMounted(() => {
        window.addEventListener('click', savePoint)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })

    return point
}