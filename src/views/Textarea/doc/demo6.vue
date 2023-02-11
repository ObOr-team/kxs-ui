<template>
    <div class="container borderBox">
        <k-textarea v-model="textVal" :resize="false"></k-textarea>
        <k-preview compName="Textarea/doc" demoName="demo6"/>
    </div>
    
</template>
<script lang="ts" setup>
    import {ref} from 'Vue'
    const textVal =ref('我这个框不能被拉大，因为被我把属性关掉了！')
</script>
<style lang="scss" scoped>

</style>