Vue3.0将很多API进行了调整，将全局的API
- 即Vue.xxx 调整到应用实例app上
Vue.config.xxx => app.config.xxx
Vue.config.productionTip 移除
Vue.component
Vue.directive
Vue.mixin
Vue.use
Vue.prototype => app.config.globalProperties

data选项应该始终被声明为一个函数

过渡类名的更改
.v-enter => .v-enter-from 

移除keyCode作为v-on的修饰符，同时也不支持config.keyCodes

移除v-on.native 修饰符
Vue3中实现
- 父组件中绑定事件
    <my-component
        v-on:close="handleComponentEvent"
        v-on:click="handleNativeClickNative"
    />
- 子组件声明自定义事件
<script>
    export default {
        emits: ['close']  // 自定义事件通过emits进行触发即可
    }
</script>

移除过滤器（filter）
- 建议用方法调用或计算属性去替换过滤器
