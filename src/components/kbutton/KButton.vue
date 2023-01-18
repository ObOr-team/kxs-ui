<script lang="ts" setup>
    //defineProps 宏来接收父组件传递的数据
    import {defineProps,computed,toRef} from 'vue'
    const props = defineProps({
        type:{
            type:String,
            default:"",
        },
        plain:{
            type:Boolean,
            default:false
        },
        round:{
            type:Boolean,
            default:false
        },
        disabled:{
            type:Boolean,
            default:false
        },
        size:{
            type:String,
            default:"default"
        },
        block:{
            type:Boolean,
            default:false
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
    //可以通过toRef处理响应式数据
    const round =toRef(props,"round");
    const isPlain = computed(()=>{
        return props.plain? "isPlain":""
    })
    const isRound = computed(()=>{
        return round.value? "isRound":""
    })
    const isDisabled = computed(()=>{
        return props.disabled? "isDisabled":""
    })
    const blockCss = computed(()=>{
        return props.block? {display:"block",width:"40%" }:""
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
<template>
        <button
        :disabled="disabled"
        class="btn" 
        :class="[type,isPlain,isRound,isDisabled,size]"
        :style="[blockCss]"
        >
        <i :class="icon" ></i>
        <i :class="front" ></i>
            <slot></slot>
        <i :class="post" ></i>
    
        </button>
</template>

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
    &.isPlain{
        &:hover{
        color: var(--btn-color-primary);
        border: solid 1px var(--btn-color-primary);
        }
    }
}
.primary{
    color: var(--btn-color-white);
    background-color: var(--btn-color-primary);
    border-color: var(--btn-color-primary);
    &:not(.isDisabled):hover{
        background-color: var(--btn-color-primary-lighter);
    }
    &.isPlain{
        background-color: var(--btn-color-primary-lighter);
        color: var(--btn-color-primary);
        &:hover{
            color: var(--btn-color-white);
            background-color: var(--btn-color-primary);
        }
    }
}
.success{
    color: var(--btn-color-white);
    background-color: var(--btn-color-success);
    border-color: var(--btn-color-success);
    &:not(.isDisabled):hover{
        background-color: var(--btn-color-success-lighter);
    }
    &.isPlain{
        background-color: var(--btn-color-success-lighter);
        color: var(--btn-color-success);
        &:hover{
            color: var(--btn-color-white);
            background-color: var(--btn-color-success);
        }
    }
    
}
.info{
    color: var(--btn-color-white);
    background-color: var(--btn-color-info);
    border-color: var(--btn-color-info);
    &:not(.isDisabled):hover{
        background-color: var(--btn-color-info-lighter);
    }
    &.isPlain{
        background-color: var(--btn-color-info-lighter);
        color: var(--btn-color-info);
        &:hover{
            color: var(--btn-color-white);
            background-color: var(--btn-color-info);
        }
    }
}
.warming{
    color: var(--btn-color-white);
    background-color: var(--btn-color-warming);
    border-color: var(--btn-color-warming);
    &:not(.isDisabled):hover{
        background-color: var(--btn-color-warming-lighter);
    }
    &.isPlain{
        background-color: var(--btn-color-warming-lighter);
        color: var(--btn-color-warming);
        &:hover{
            color: var(--btn-color-white);
            background-color: var(--btn-color-warming);
        }
    }
}
.danger{
    color: var(--btn-color-white);
    background-color: var(--btn-color-danger);
    border-color: var(--btn-color-danger);
    &:not(.isDisabled):hover{
        background-color: var(--btn-color-danger-lighter);
    }
    &.isPlain{
        background-color: var(--btn-color-danger-lighter);
        color: var(--btn-color-danger);
        &:hover{
            color: var(--btn-color-white);
            background-color: var(--btn-color-danger);
        }
    }
}
.isRound{
    border-radius: 50px;
}
.isDisabled{
    opacity: 0.5;
    cursor: no-drop;
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