<template>
    <div class="son">
      <h3>我是Son组件(孙), {{ car.name }} -- {{ car.price }}</h3>
    </div>
  </template>
  
  <script>
    import { inject } from 'vue';
    export default {
        name: 'Son', 
        setup() {
            let car = inject('car')
            // console.log(car)
            // 获取到相应的数据需要return出去
            return { car }
        }
    }
</script>
  
  <style>
    .son {
      background-color: orange;
      padding: 10px;
    }
  </style>