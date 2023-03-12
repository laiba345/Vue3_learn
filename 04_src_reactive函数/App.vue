<template>
  <h1>我是App组件</h1>
  <!-- 但是模版中读取数据时不用.value -->
  <h2>姓名{{ person.name }}</h2>
  <h2>年龄{{ person.age }}</h2>
  <h2>工作名称{{ person.job.type }}</h2>
  <h2>工作薪水{{ person.job.salary }}</h2>
  <h2>爱好{{ person.hobby }}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
// 引入渲染函数
import { h, ref, reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    /* let name = ref('章三') // RefImpl{...  value}  getter setter
    let age = ref(18)
    let job = reactive({
      type: '前端工程师',
      salary: '30K',
      // 深层次的内容也是可以通过reactive读取到的
      a: {
        b: {
          c: 666
        }
      }, 
    })
    let hobby = reactive(['打游戏', '吃饭', '学习']) */

    let person = reactive({
      name: '章三',
      age: 18,
      job: {
        type: '前端工程师',
        salary: '30K',
        // 深层次的内容也是可以通过reactive读取到的
        a: {
          b: {
            c: 666
          }
        },
      },
      hobby: ['抽烟', '喝酒', '烫头']
    })

    // 方法
    function changeInfo() {
      // name = '李四'
      // age = 19
      // name.value = '李四'
      // age.value = 19
      // console.log(job)
      // job.value.type = 'UI工程师'
      // job.value.salary = '60K'
      // job.type = 'UI工程师'
      // job.salary = '60K'
      // hobby[0] = '刷知乎'
      person.name = '李四'
      person.age= 48
      person.job.type = 'UI设计师'
      person.job.salary = '50K'
      person.job.a.b.c = 999
      person.hobby[0] = '微笑'
    }
    return {
      /* name,
      age,
      job,
      // 上面书写了以后千万记得return出去
      changeInfo,
      hobby */
      // 能用简写形式就用简写形式
      person,
      changeInfo
    }
  }
}
</script>
