<template>
  <div class="app">
    <h3>我是App组件(祖), {{ name }} -- {{ price }}</h3>
    <Child />
  </div>
</template>

<script>
  import { reactive, toRefs, provide } from 'vue';
  import Child from './components/Child.vue';
  export default {
    name: 'App',
    components: { Child },
    setup() {
      let car = reactive(
        { name: '奔驰', price: '40w' }
      )
      // 直接通过provide传递出去
      // 前面是属性名后面是属性值,进行相关操作即可
      provide('car', car) // 给自己的后代组件传递数据
      return {
        ...toRefs(car)
      }
    }
  }
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>