<template>
    <h2>当前求和为: {{ sum }}</h2>
    <button @click="sum++">点我加1</button>
    <hr>
    <h2>当前的信息为:{{ msg }}</h2>
    <button @click="msg += '!'">修改信息</button>
</template>
  
<script>
// 引入渲染函数
// 组合API其实就是一堆内置函数
import { reactive, ref, watch } from 'vue'
export default {
    name: 'Demo',
    // setup是没有this的，我们是不需要使用的 里面都是工厂函数
    setup() {
        // 数据
        let sum = ref(0)
        let msg = ref('你好啊')
        let person = ref({
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

        /* watch(person.value, (newValue, oldValue) => {
            console.log('sum的值变了', newValue, oldValue)
        }) */
        watch(person, (newValue, oldValue) => {
            console.log('sum的值变了', newValue, oldValue)
        }, { deep: true })

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
  