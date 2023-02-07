<template>
    <div class="container">
        <k-textarea v-model="textVal"></k-textarea>
    </div>
    <k-preview compName="Textarea/doc" demoName="demo1"/>
</template>
<script lang="ts" setup>
    import {ref} from 'Vue'
    const textVal =ref('')
</script>
<style lang="scss" scoped>

</style>