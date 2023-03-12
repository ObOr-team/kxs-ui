<template>
        <button
        :disabled="disabled"
        :class="classObj"
        :style="[blockCss]"
        >
        <div :class="icon" ></div>
            <slot></slot>
        <i :class="post" ></i>
        </button>
</template>
<script lang="ts">
    export default {
         name:"kButton",
    }
</script>
<script lang="ts" setup>
import {computed,toRef} from 'vue'
import '../style/style.scss'
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
        postIcon:{
            type:String,
            default:""
        },
        icon:{
            type:String,
            default:""
        },
        loading:{
            type:Boolean,
            default:false
        },
    })
    //可以通过toRef处理响应式数据
    const round =toRef(props,"round");
    const blockCss = computed(()=>{
        return props.block? {display:"block",width:"100%" }:""
    })
    const post = computed(()=>{
        return props.postIcon? `${props.postIcon}`:""
    })
    const icon = computed(()=>{
        return props.icon? `${props.icon}`:""
    })
    const classObj = computed(()=>{
        return [
            'btn',
            `${props.type}`,
            props.plain? "isPlain":"",
            round.value? "isRound":"",
            props.disabled? "isDisabled":"",
            props.loading? "isLoading":"",
            `${props.size}`
        ]
    })
</script>
<style lang="scss" scoped>
.btn{
    padding: 10px 15px;
    font-size: 14px;
    color: var(--btn-color-gray);
    background-color: var(--btn-color-white);
    border: solid 1px var(--default);
    border-radius: 8px;
    cursor: pointer;
    box-sizing: border-box;
}
// .btn:first-child{
//     margin-left: 10px;
// }
.default{
    color: var(--btn-color-gray);
    background-color: var(--btn-color-white);
    border: solid 1px var(--default);
    &:not(.isDisabled):hover{
        background-color: var(--btn-color-default-lighter);
    }
    &.isPlain{
        &:hover{
        color: var(--primary);
        border: solid 1px var(--primary);
        }
    }
}
.primary{
    color: var(--btn-color-white);
    background-color: var(--primary);
    border-color: var(--primary);
    &:not(.isDisabled):hover{
        background-color: var(--btn-color-primary-lighter);
    }
    &.isPlain{
        background-color: var(--btn-color-primary-lighter);
        color: var(--primary);
        &:hover{
            color: var(--btn-color-white);
            background-color: var(--primary);
        }
    }
}
.success{
    color: var(--btn-color-white);
    background-color: var(--success);
    border-color: var(--success);
    &:not(.isDisabled):hover{
        background-color: var(--btn-color-success-lighter);
    }
    &.isPlain{
        background-color: var(--btn-color-success-lighter);
        color: var(--success);
        &:hover{
            color: var(--btn-color-white);
            background-color: var(--success);
        }
    }
    
}
.info{
    color: var(--btn-color-white);
    background-color: var(--info);
    border-color: var(--info);
    &:not(.isDisabled):hover{
        background-color: var(--btn-color-info-lighter);
    }
    &.isPlain{
        background-color: var(--btn-color-info-lighter);
        color: var(--info);
        &:hover{
            color: var(--btn-color-white);
            background-color: var(--info);
        }
    }
}
.warming{
    color: var(--btn-color-white);
    background-color: var(--warming);
    border-color: var(--warming);
    &:not(.isDisabled):hover{
        background-color: var(--btn-color-warming-lighter);
    }
    &.isPlain{
        background-color: var(--btn-color-warming-lighter);
        color: var(--warming);
        &:hover{
            color: var(--btn-color-white);
            background-color: var(--warming);
        }
    }
}
.danger{
    color: var(--btn-color-white);
    background-color: var(--danger);
    border-color: var(--danger);
    &:not(.isDisabled):hover{
        background-color: var(--btn-color-danger-lighter);
    }
    &.isPlain{
        background-color: var(--btn-color-danger-lighter);
        color: var(--danger);
        &:hover{
            color: var(--btn-color-white);
            background-color: var(--danger);
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
.isLoading{
    opacity: 0.5;
    pointer-events: none;
}
.small{
    padding: 5px 8px;
    font-size: 7px;
}
.large{
    padding: 12px 21px;
    font-size: 21px;
}
div{
    display: inline-block;
}
</style>