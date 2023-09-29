<template>
    <h2>当前求和为: {{ sum }}</h2>
    <button @click="sum++">点我加1</button>
</template>
  
<script>
// 引入渲染函数
// 组合API其实就是一堆内置函数
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
export default {
    name: 'Demo',
    // setup是没有this的，我们是不需要使用的
    setup() {
        // 数据
        let sum = ref(0)

        // 2、通过组合式API的形式去使用生命周期钩子
        // 组合式API的形式，是函数钩子里面放的是
        // 执行比配置项更快
        // 生命周期分类:创建前后、挂载前后、更新前后、销毁前后
        onBeforeMount(() => {
            console.log('---onBeforeMount---')
        })
        onMounted(() => {
            console.log('---onMounted---')
        })
        // 更新前后
        onBeforeUpdate(() => {
            console.log('---onBeforeUpdate---')
        })
        onUpdated(() => {
            console.log('---onUpdated---')
        })
        onBeforeUnmount(() => {
            console.log('---onBeforeUnmount---')
        })
        onUnmounted(() => {
            console.log('---onUnmounted---')
        })
        return {
            sum,
        }
    },
    // 通过配置项的形式使用生命周期钩子
    //#region 
    /* beforeCreate() {
        console.log('---beforeCreate---')
    }, 
    created() {
        console.log('---created---')
    }, 
    beforeMount() {
        console.log('---beforeMount---')
    }, 
    mounted() {
        console.log('---mounted---')
    }, 
    beforeUpdate() {
        console.log('---beforeUpdate---')
    }, 
    updated() {
        console.log('---updated---')
    }, 
    beforeUnmount() {
        console.log('---beforeUnmount---')
    }, 
    unmounted() {
        console.log('---unmounted---')
    } */
    //#endregion
}
</script>
  