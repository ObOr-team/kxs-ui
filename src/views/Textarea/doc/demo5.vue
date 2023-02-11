<template>
    <div class="container borderBox">
        <k-textarea v-model="textVal" :maxlength="20"></k-textarea>
        <k-preview compName="Textarea/doc" demoName="demo5"/>
    </div>
    
</template>
<script lang="ts" setup>
    import {ref} from 'Vue'
    const textVal =ref('我被限制只能输入二十个字！')
</script>
<style lang="scss" scoped>

</style>