<template>
    <h2>我是Test组件</h2>
    <h2>当前点击时鼠标的坐标为:x:{{ point.x }}, y:{{ point.y }}</h2>
</template>

<script>
// 书写了某个组件就应该进行使用
import usePoint from '../hooks/usePoint'
export default {
    name: 'Test',
    setup() {
        // 引入外部的数据，然后实现
        const point = usePoint()
        return {
            point
        }
    }
}
</script>