<template>
  <button @click="isShowDemo = !isShowDemo">切换/隐藏</button>
  <!-- 组件身上用v-if来表示显示与隐藏 -->
  <Demo v-if="isShowDemo"/>
</template>

<script>
// 引入渲染函数
import Demo from './components/Demo.vue'
import { ref } from 'vue';
// import Test from './components/Test.vue';
export default {
  name: 'App',
  components: { Demo },
  setup() {
    let isShowDemo = ref(true)

    return {
      isShowDemo, 
    }
  }
}
</script>
