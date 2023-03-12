<template>
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>薪资:{{ job.j1.salary }}</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
</template>
  
<script>
import { reactive, toRef, toRefs } from 'vue'
export default {
    name: 'Demo',
    // setup是没有this的，我们是不需要使用的
    setup() {
        let person = reactive({
            name: '章三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })
        // const name1 = person.name
        // console.log('%%%', name1)

        // const name2 = toRef(person, 'name')
        // console.log('###', name2)

        // toRefs -- 因为是将里面的每个数据都弄出去了，很关键
        const x = toRefs(person)
        console.log('***', x)

        return {
            // person,
            // person
            /* name:person.name,  // 这里其实就是字符串
            age:person.age, 
            salary:person.job.j1.salary */

            // 上面就相当于此
            /* name:'章三',
            age:18, 
            salary:20 */

            // 常用
            // name: toRef(person, 'name'),
            // age: toRef(person, 'age'),
            // // 第一个参数传一个参数即可
            // salary: toRef(person.job.j1, 'salary')

            ...toRefs(person)
        }
    }
}
</script>
  