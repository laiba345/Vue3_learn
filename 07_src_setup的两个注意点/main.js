// 引入的不再是Vue构造函数，引入的是一个名为createApp的工厂函数
// 区别：构造函数：首字母大写 + new关键字调用  工厂函数直接调用
// Vue3中是通过createApp来创建相应的函数操作
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象 -- app(类似于之前Vue2中的vm，但app比vm更”轻“)
// app的本质就是一般对象
// createApp(App).mount('#app')
// createApp是用来创建相应的实例对象的
const app = createApp(App)
// 挂载
app.mount('#app')

// Vue2的写法
/* const vm = new Vue({
    render: h => h(App)
})
vm.$mount('#app') */


