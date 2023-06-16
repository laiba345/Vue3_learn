<template>
    <span v-text="message"></span>
</template>

<script>
import { ref } from 'vue';
export default {
    name: "Test",
    setup() {
        let message = ref('kang')

        return {
            message
        }
    }
}

</script>

<style>
span {
    color: yellowgreen;
}
</style>