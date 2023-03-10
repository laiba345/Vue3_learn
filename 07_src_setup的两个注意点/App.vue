<template>
  <!-- hello是自定义事件的名字 -->
  <Demo @hello="showHelloMsg" msg="你好啊" school="尚硅谷是">
    <template v-slot:asd>
      <span>尚硅谷</span>
    </template>
  </Demo>
</template>

<script>
// 引入渲染函数
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  components: { Demo },
  setup() {
    function showHelloMsg(value) {
      alert(`你好啊，你触发了hello事件，我收到的参数是:${value}`)
    }
    return {
      showHelloMsg
    }
  }
}
</script>
