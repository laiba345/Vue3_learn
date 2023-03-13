<template>
    <div class="child">
      <h3>我是Child组件(子), {{ car.name }} -- {{ car.price }}</h3>
      <Son />
    </div>
  </template>
  
  <script >
    import { inject } from 'vue';
    import Son from './Son.vue';
    export default {
        name: 'Child', 
        components: { Son }, 
        setup() {
            let car = inject('car')
            return { car }
        }

    }
  </script>
  
  <style>
    .child {
      background-color: skyblue;
      padding: 10px;
    }
  </style>