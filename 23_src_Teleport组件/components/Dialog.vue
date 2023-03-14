<template>
    <div>
        <button @click="isShow = true">点我弹个窗</button>
        <!-- 也可以定位到某些CSS选择器当中 -->
        <teleport to='body'>
            <div v-if="isShow" class="mask">
                <div class="dialog">
                    <h3>我是一个弹窗</h3>
                    <h4>我是一个弹窗</h4>
                    <h4>我是一个弹窗</h4>
                    <h4>我是一个弹窗</h4>
                    <button @click="isShow = false">关闭弹窗</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'Dialog',
    setup() {
        let isShow = ref(false)
        return {
            isShow
        }
    }
}
</script>

<style>
.mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
}

.dialog {
    position: absolute;
    /* 下面三句表示将元素进行移动到屏幕正中间 */
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 300px;
    height: 300px;
    background-color: green;
}
</style>