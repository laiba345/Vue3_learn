<template>
    <h1>我是App组件</h1>
    <!-- 但是模版中读取数据时不用.value -->
    <h2>姓名{{ person.name }}</h2>
    <h2>年龄{{ person.age }}</h2>
    <button @click="test">测试：触发一下Demo组件的Hello事件</button>
</template>
  
<script>
// 引入渲染函数
import { reactive } from 'vue'
export default {
    name: 'Demo',
    props: ['msg', 'school'],
    // Vue3中接收到父组件的事件用emits属性接收
    emits: ['hello'], // 我知道了，你给我绑定了一个hello事件
    /* beforeCreate() {
        console.log('----beforeCreate----')
    }, */
    /* 
        setup的两个注意点
        - 在beforeCreate之前执行一次，this是undefined
        - 参数
            - props
            - context
    */
    setup(props, context) {
        console.log('----setup----', this) // undefined 
        console.log('----props----', props)
        console.log('----context----', context)
        console.log('----context----', context.attrs) // 类似于Vue2中的$attrs
        console.log('----context----', context.emit) // 触发自定义事件
        console.log('----context----', context.slots) // 插槽
        
        let person = reactive({
            name: '章三',
            age: 18,
        })
        function test() {
            // 通过context.emit() 进行触发，并携带数据过去
            context.emit('hello', 666)
        }
        return {
            person, 
            test
        }
    }
}
</script>
  