<template>
    <h2>当前求和为: {{ sum }}</h2>
    <button @click="sum++">点我++</button>
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>薪资:{{ job.j1.salary }}</h2>
    <h3>座驾信息: {{ car }}</h3>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
    <button @click="showRawPerson">输出最原始的person</button>
    <button @click="addCar">给人添加一辆车</button>
    <button @click="person.car.name += '!'">换车名</button>
    <button @click="person.car.price++">换价格</button>
</template>
  
<script>
import { reactive, ref, toRefs, toRaw, markRaw } from 'vue'
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
            },
            car:{} // 方式一
        })
        function showRawPerson() {
            const p = toRaw(person) //还原的感觉
            console.log(p)
        }
        function addCar() {
            let car = { name: '奔驰', price: 40 }
            person.car = markRaw(car) // 价格的数据发生了改变，但是不是响应式的
        }
        return {
            sum,
            person, // 方式二
            ...toRefs(person),
            showRawPerson,
            addCar
        }
    }
}
</script>
  