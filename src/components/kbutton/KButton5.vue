<template>
    <button
    class="btn" 
    :class="[type]"
    :style="[blockCss]"
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
    block:{
            type:Boolean,
            default:false
    },              
})
const blockCss = computed(()=>{
        return props.block? {display:"block",width:"40%" }:""
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
</style>