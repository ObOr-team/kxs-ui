<template>
    <div class="container borderBox">
        <k-textarea v-model="textVal" placeholder="我这句话来提示你输入内容，只要你输入内容我这话就会消失！"></k-textarea>
        <k-preview compName="Textarea/doc" demoName="demo4"/>
    </div>
    
</template>
<script lang="ts" setup>
    import {ref} from 'Vue'
    const textVal =ref('')
</script>
<style lang="scss" scoped>

</style>