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
        // 计算属性也是通过调用钩子来实现操作
        // 简写形式
        /* person.fullName = computed(() => {
            return person.firstName + '-' + person.lastName
        }) */

        // 完整写法 -- 考虑读和写 -- 书写getter和setter都要出来
        // 如果比较复杂的话,就需要通过在computed中配置对象来操作了,
        // 其中对象中,如果比较复杂的话,可以通过对象的复杂写法来实现
        person.fullName = computed({
            get() {
                return person.firstName + '-' + person.lastName
            }, 
            set(value) {
                // 中间有个分隔，用split('-')进行分割
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
  