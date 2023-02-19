<template>
    <input   @input="iptChange"/>
    {{ modelValue }}
</template>

<script lang="ts">
    export default {
        name: "kLayout",
    }
</script>
<script lang="ts" setup>
    import {ref} from 'vue'
    const props=defineProps({
        modelValue:{
            type:String,
            default:"哈哈哈"
        }
    })
    const emit = defineEmits(['update:modelValue'])
    const iptChange = (e:any) => {
           emit('update:modelValue', e.target.value)
           console.log(props.modelValue)
    }

</script>
<style lang="scss" scoped>

</style>