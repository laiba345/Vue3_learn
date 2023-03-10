<template>
    <h1>一个人的信息</h1>
    姓:<input type="text" v-model="person.firstName">
    <br>
    名:<input type="text" v-model="person.lastName">
    <br>
    <!-- 全名:<span>{{ person.fullName }}</span> -->
    <br>
    全名:<input type="text" v-model="person.fullName">
</template>
  
<script>
// 引入渲染函数
import { reactive, computed } from 'vue'
export default {
    name: 'Demo',
    // setup是没有this的，我们是不需要使用的
    setup() {
        // 数据
        let person = reactive({
            firstName: '章',
            lastName: '三',
        })
        // 计算属性
        /* let fullName = computed(() => {
            return person.firstName + '-' + person.lastName
        }) */
        // 直接将计算属性移植到人的身上即可
        // 简写形式
        /* person.fullName = computed(() => {
            return person.firstName + '-' + person.lastName
        }) */

        // 完整写法 -- 考虑读和写
        person.fullName = computed({
            get() {
                return person.firstName + '-' + person.lastName
            }, 
            set(value) {
                const nameArr = value.split('-')
                person.firstName = nameArr[0]
                person.lastName = nameArr[1]
            }
        })
        return {
            person, 
            
        }
    }
}
</script>
  