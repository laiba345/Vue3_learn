<template>
  <h1>我是App组件</h1>
  <!-- 但是模版中读取数据时不用.value -->
  <h2>姓名{{ name }}</h2>
  <h2>年龄{{ age }}</h2>
  <h2>工作名称{{ job.type }}</h2>
  <h2>工作薪水{{ job.salary }}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
// 引入渲染函数
import { h, ref } from 'vue'
export default {
  name: 'App',
  setup() {
    // 数据  ref - 引用对象
    // ref处理基本数据类型，使用Vue2的defineProperty
    // ref处理对象类型的数据，内部求助了Vue3.0的 reactive(里面封装了Proxy)函数 -- 根部用的是Proxy
    let name = ref('章三') // RefImpl{...  value}  getter setter
    let age = ref(18)
    let job = ref({
      type: '前端工程师',
      salary: '30K'
    })
    // 方法
    function changeInfo() {
      // name = '李四'
      // age = 19
      name.value = '李四'
      age.value = 19
      // console.log(job.value)
      // console.log(name, age)
      job.value.type = 'UI工程师'
      job.value.salary = '60K'
    }
    return {
      name,
      age,
      job, 
      // 上面书写了以后千万记得return出去
      changeInfo
    }
  }
}
</script>
