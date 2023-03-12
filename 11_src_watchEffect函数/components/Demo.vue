<template>
    <h2>当前求和为: {{ sum }}</h2>
    <button @click="sum++">点我加1</button>
    <hr>
    <h2>当前的信息为:{{ msg }}</h2>
    <button @click="msg += '!'">修改信息</button>
    <h2>当前薪资为:{{ person.job.j1.salary }}</h2>
    <button @click="person.job.j1.salary++">涨薪</button>
</template>
  
<script>
// 引入渲染函数
// 组合API其实就是一堆内置函数
import { reactive, ref, watch, watchEffect } from 'vue'
export default {
    name: 'Demo',
    // setup是没有this的，我们是不需要使用的
    setup() {
        // 数据
        let sum = ref(0)
        let msg = ref('你好啊')
        let person = reactive({
            name: '章三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })

        // 情况一、监视 ref所定义的一个响应式数据
        // 第三个参数，配置相应的属性操作
        watch(sum, (newValue, oldValue) => {
            console.log('sum变了', newValue, oldValue)
        }, { immediate: true })

        // 不用指明监视哪个属性，监视的回调中用到哪个属性，就监视哪个属性即可
        /* 
            watchEffect有点像computed
                但computed注重的是计算出来的值（回调函数的返回值）所以必须写返回值
                而watchEffect更注重的是过程(回调函数的函数体)所以不用返回值
        */
        watchEffect(() => {
            // 监视的回调中用到哪个属性，就监视哪个属性
            const x1 = sum.value
            const x2 = person.job.j1.salary
            console.log('watchEffect所指定的回调执行了')
        })

        // 情况二、监视ref所定义的多个响应式数据
        /* watch([sum, msg], (newValue, oldValue) => {
            console.log('sum或者msg变了', newValue, oldValue)
        }) */

        return {
            sum,
            msg, 
            person
        }
    }
}
</script>
  