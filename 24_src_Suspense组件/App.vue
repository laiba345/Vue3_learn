<template>
  <div class="app">
    <h3>我是App组件(祖)</h3>
    <!-- 搭配异步引入进行使用 -->
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>稍等, 加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
  // import Child from './components/Child.vue'; 静态引入
  import { defineAsyncComponent } from 'vue';
  const Child = defineAsyncComponent(() => import('./components/Child.vue')) // 异步引入
  export default {
    name: 'App',
    components: { Child },
  }
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>