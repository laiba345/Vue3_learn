<template>
    <h2>当前求和为: {{ sum }}</h2>
    <button @click="sum++">点我++</button>
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>薪资:{{ job.j1.salary }}</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
</template>
  
<script>
import { reactive, ref, toRefs, readonly, shallowReadonly } from 'vue'
export default {
    name: 'Demo',
    // setup是没有this的，我们是不需要使用的
    setup() {
        let sum = ref(0)
        let person = reactive({
            name: '章三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })
        // 用处：别人组件中的数据你不能用
        // person = readonly(person)  // 只读的，变成非响应式的
        // person = shallowReadonly(person)
        sum = readonly(sum)

        return {
            sum,
            ...toRefs(person)
        }
    }
}
</script>
  