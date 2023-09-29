<template>
    <h2>当前求和为: {{ sum }}</h2>
    <button @click="sum++">点我加1</button>
    <hr>
    <h2>当前的信息为:{{ msg }}</h2>
    <button @click="msg+='!'">修改信息</button>
</template>
  
<script>
// 引入渲染函数
// 组合API其实就是一堆内置函数
import { reactive, ref, watch } from 'vue'
export default {
    name: 'Demo',
    // setup是没有this的，我们是不需要使用的
    setup() {
        // 数据
        let sum = ref(0)
        let msg = ref('你好啊')

        // 情况一、监视 ref所定义的一个响应式数据
        // 第三个参数，配置相应的属性操作
        // 监视的第一个参数属性,放在第一个即可
        watch(sum, (newValue, oldValue) => {
            console.log('sum变了', newValue, oldValue)
        }, {immediate:true})

        // 情况二、监视ref所定义的多个响应式数据
        // 如果有多个参数, 使用[]来收集获取即可;
        // 有多个参数的时候,使用[]来进行前后收集
        /* watch([sum, msg], (newValue, oldValue) => {
            console.log('sum或者msg变了', newValue, oldValue)
        }) */
        
        return {
            sum, 
            msg
        }
    }
}
</script>
  