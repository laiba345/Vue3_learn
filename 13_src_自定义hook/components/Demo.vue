<template>
    <h2>当前求和为: {{ sum }}</h2>
    <button @click="sum++">点我加1</button>
    <hr>
    <h2>当前点击时鼠标的坐标为:x:{{ point.x }}, y:{{ point.y }}</h2>
</template>
  
<script>
// 引入渲染函数
// 组合API其实就是一堆内置函数
import { ref } from 'vue'
// 想要使用的话，也是需要进行使用操作，后续进行引入即可
import usePoint from '../hooks/usePoint'
export default {
    name: 'Demo',
    // setup是没有this的，我们是不需要使用的
    setup() {
        // 数据
        let sum = ref(0)
        // 是函数，可以直接进行调用
        // 调用相关函数,最终得到的就是具体的点的坐标; 
        let point = usePoint()
        /* let point = reactive({
            x: 0,
            y: 0
        }) */
    /*     function savePoint(event) {
            console.log(event.pageX, event.pageY)
            point.x = event.pageX
            point.y = event.pageY
        }

        onMounted(() => {
            window.addEventListener('click', savePoint)
        })

        onBeforeUnmount(() => {
            window.removeEventListener('click', savePoint)
        })
 */
        return {
            sum,
            point
        }
    },
}
</script>
  