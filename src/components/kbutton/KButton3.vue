<template>
    <button
    class="btn" 
    :class="[type,isDisabled]"
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
    disabled:{
            type:Boolean,
            default:false
    },        
})
const isDisabled = computed(()=>{
        return props.disabled? "isDisabled":""
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
&:not(.isDisabled):hover{
        background-color: var(--btn-color-default-lighter);
}
}
.primary{
color: var(--btn-color-white);
background-color: var(--btn-color-primary);
border-color: var(--btn-color-primary);
&:not(.isDisabled):hover{
        background-color: var(--btn-color-primary-lighter);
}
}
.success{
color: var(--btn-color-white);
background-color: var(--btn-color-success);
border-color: var(--btn-color-success);
&:not(.isDisabled):hover{
        background-color: var(--btn-color-success-lighter);
}
}
.info{
color: var(--btn-color-white);
background-color: var(--btn-color-info);
border-color: var(--btn-color-info);
&:not(.isDisabled):hover{
        background-color: var(--btn-color-info-lighter);
}
}
.warming{
color: var(--btn-color-white);
background-color: var(--btn-color-warming);
border-color: var(--btn-color-warming);
&:not(.isDisabled):hover{
        background-color: var(--btn-color-warming-lighter);
}
}
.danger{
color: var(--btn-color-white);
background-color: var(--btn-color-danger);
border-color: var(--btn-color-danger);
&:not(.isDisabled):hover{
        background-color: var(--btn-color-danger-lighter);
}
}
.isDisabled{
    opacity: 0.5;
    cursor: no-drop;
}
</style>