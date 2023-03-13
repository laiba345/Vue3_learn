<template>
    <h2>当前的x.y是:{{ x.y }}</h2>
    <!-- <button @click="x.y++">点我加1</button> -->
    <!-- 而是生成新的对象来替换 ～ shallowRef -->
    <button @click="x = { y: 888 }">点我替换x</button>
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>薪资:{{ job.j1.salary }}</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
</template>
  
<script>
import { reactive, ref, toRefs, shallowReactive, shallowRef } from 'vue'
export default {
    name: 'Demo',
    // setup是没有this的，我们是不需要使用的
    setup() {
        // let person = shallowReactive({ //只考虑第一层数据的响应式
        let person = reactive({
            name: '章三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })

        // let x = ref(0)
        // let x = shallowRef(0)
        let x = shallowRef({ //非响应式的
            y: 0
        })
        console.log('****', x)
        // let x = ref({
        //     y: 0
        // })

        return {
            x,
            ...toRefs(person)
        }
    }
}
</script>
  