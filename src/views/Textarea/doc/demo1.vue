<template>
    <div class="container borderBox">
        <k-textarea v-model="textVal"></k-textarea>
        <k-preview compName="Textarea/doc" demoName="demo1"/>
    </div>
    
</template>
<script lang="ts" setup>
    import {ref} from 'Vue'
    const textVal =ref('')
</script>
<style lang="scss" scoped>

</style>