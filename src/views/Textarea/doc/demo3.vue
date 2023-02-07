<template>
    <div class="container">
        <k-textarea v-model="textVal" readonly></k-textarea>
    </div>
    <k-preview compName="Textarea/doc" demoName="demo3"/>
</template>
<script lang="ts" setup>
    import {ref} from 'Vue'
    const textVal =ref('哈哈哈，我只能被你阅读，不能被你输入！')
</script>
<style lang="scss" scoped>

</style>