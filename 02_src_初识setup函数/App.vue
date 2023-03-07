<template>
  <h1>我是App组件</h1>
  <h2>姓名{{ name }}</h2>
  <h2>年龄{{ age }}</h2>
  <h2>年龄{{ age }}</h2>
  <button @click="sayHello">说话(Vue3所配置的-sayHello)</button>
  <hr>
  <hr>
  <button @click="sayWelcome">说话(Vue2所配置的-sayWelcome)</button>
</template>

<script>
// 引入渲染函数
import { h } from 'vue'
export default {
  name: 'App',
  // Vue2中的书写形式可以在Vue3中书写，是向下兼容的
  // 但是不推荐使用 不推荐Vue2和Vue3混用
  data() {
    return {
      sex:'男', 
    }
  }, 
  methods:{
    sayWelcome() {
      alert('欢迎来到尚硅谷学习')
    }
  }, 
  // 此处只是测试一下setup，暂时不考虑响应式的问题
  // 返回一个对象（常用）
  setup() {
    // 数据
    let name = '章三'
    let age = 18
    // 方法
    function sayHello() {
      alert(`我叫${name}, 我${age}岁了, 你好啊`)
    }
    return {
      name, 
      age, 
      sayHello
    }
    // 模板template写了什么已经不重要了，返回的是下面的渲染函数（了解）
    // return () =>  h('h1', '尚硅谷') 
  }
}
</script>
