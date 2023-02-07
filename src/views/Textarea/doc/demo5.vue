<template>
    <div class="container">
        <k-textarea v-model="textVal" :maxlength="20"></k-textarea>
    </div>
    <k-preview compName="Textarea/doc" demoName="demo5"/>
</template>
<script lang="ts" setup>
    import {ref} from 'Vue'
    const textVal =ref('我被限制只能输入二十个字！')
</script>
<style lang="scss" scoped>

</style>