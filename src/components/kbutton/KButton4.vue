<template>
    <button
    class="btn" 
    :class="[type,size]"
    >
        <slot></slot>
    </button>
</template>
<script lang="ts" setup>
import {defineProps,computed,toRef} from 'vue'
const props = defineProps({
    type:{
        type:String,
        default:"",
    },        
    size:{
        type:String,
        default:"default"
    },        
})

</script>
<style lang="scss" scoped>
.btn{
padding: 10px 15px;
font-size: 14px;
color: var(--btn-color-gray);
background-color: var(--btn-color-white);
border: solid 1px var(--btn-color-default);
border-radius: 8px;
cursor: pointer;
margin: 10px;
}
.default{
color: var(--btn-color-gray);
background-color: var(--btn-color-white);
border: solid 1px var(--btn-color-default);
}
.small{
    padding: 5px 8px;
    font-size: 7px;
}
.large{
    padding: 12px 21px;
    font-size: 21px;
}
</style>