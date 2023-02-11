<template>
    <div class="container borderBox">
        <k-textarea v-model="textVal" readonly></k-textarea>
    </div>
    
</template>
<script lang="ts" setup>
    import {ref} from 'Vue'
    const textVal =ref('哈哈哈，我只能被你阅读，不能被你输入！')
</script>
<style lang="scss" scoped>

</style>