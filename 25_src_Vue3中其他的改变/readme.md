Vue3.0将很多API进行了调整，将全局的API (将很多的API进行了调整,将全局的API进行了调整)
- 即Vue.xxx 调整到应用实例app上
Vue.config.xxx => app.config.xxx
Vue.config.productionTip 移除
Vue.component
Vue.directive
Vue.mixin
Vue.use
Vue.prototype => app.config.globalProperties

data选项应该始终被声明为一个函数

过渡类名的更改(过渡类名的更改; )
.v-enter => .v-enter-from 

移除keyCode作为v-on的修饰符，同时也不支持config.keyCodes

移除v-on.native 修饰符
Vue3中实现
- 父组件中绑定事件
    <my-component
        v-on:close="handleComponentEvent"
        v-on:click="handleNativeClickNative"
    />
- 子组件声明自定义事件(emits配置项)
<script>
    export default {
        emits: ['close']  // 自定义事件通过emits进行触发即可
    }
</script>

移除过滤器（filter）
- 建议用方法调用或计算属性去替换过滤器

过滤器(filter); 是一种用于处理模版中文本格式化的功能; 
- 过滤器可以用来在渲染输出之前对数据进行一些简单的转换, 以改变它们的显示方式, 
- 过滤器通常用于处理文本的格式化、日期的处理,字符串的转化等 ; 
    - 并通过管道符 | 来进行相关操作的连接; 管道符号会将前面的内容传递给过滤器
'''
<div id="app">
  <p>{{ message | capitalize }}</p>
</div>

new Vue({
  el: '#app',
  data: {
    message: 'hello world'
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
})
'''




