<template>
    <h3>我是App组件(祖)</h3>
    <h3>我是App组件(祖)</h3>
    <h3>我是App组件(祖)</h3>
</template>

<script>
  import { reactive, toRefs, ref, readonly, isRef, isReactive, isReadonly, isProxy } from 'vue';
  export default {
    name: 'App',
    setup() {
      let car = reactive(
        { name: '奔驰', price: '40w' }
      )
      let sum = ref(0)
      let car2 = readonly(car)

      console.log(isRef(sum))
      console.log(isReactive(car))
      console.log(isReadonly(car2))
      console.log(isProxy(car))
      console.log(isProxy(sum)) // false

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