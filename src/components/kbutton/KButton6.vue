<template>
    <button
    class="btn" 
    :class="[type]"
    >
    <i :class="icon" ></i>
        <i :class="front" ></i>
            <slot></slot>
        <i :class="post" ></i>
    </button>
</template>
<script lang="ts" setup>
import {defineProps,computed,toRef} from 'vue'
const props = defineProps({
    type:{
        type:String,
        default:"",
    },
    frontIcon:{
            type:String,
            default:""
    },
    postIcon:{
            type:String,
            default:""
    },
    icon:{
            type:String,
            default:""
    },             
})
const front = computed(()=>{
        return props.frontIcon? `iconfont icon-${props.frontIcon}`:""
    })
    const post = computed(()=>{
        return props.postIcon? `iconfont icon-${props.postIcon}`:""
    })
    const icon = computed(()=>{
        return props.icon? `iconfont icon-${props.icon}`:""
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