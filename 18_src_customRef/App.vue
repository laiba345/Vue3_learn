<template>
  <input type="text" v-model="keyWords">
  <h3>{{ keyWords }}</h3>
</template>

<script>
import { ref, customRef } from 'vue';
export default {
  name: 'App',
  setup() {
    /* 
      ref - 精装修
      customRef - 毛胚
    */
    // 自定义一个ref，名为：myRef
    function myRef(value) {
      let timer
      // 第一个return是把忙活一圈的ref交出去
      // customRef也只是一个工厂函数，里面两个参数
      return customRef((track, trigger) => {
        // 第二个是语法要求
        return {
          get() {
            console.log('有人在myRef容器中读取数据了')
            track() // 通知Vue追踪value的变化（提前和get商量一下，让他认为这个value是有用的）
            return value // 3
          },
          set(newValue) {
            console.log(`有人在myRef容器中的数据修改了${newValue}`)
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue // 1
              trigger() // 通知Vue去重新解析模版 // 2
            }, 500);
          }
        }
      })
    }

    // let keyWords = ref('hello') // 只用Vue提供的ref
    let keyWords = myRef('hello') // 使用程序员自定义的ref

    return {
      keyWords,
      myRef
    }
  }
}
</script>
