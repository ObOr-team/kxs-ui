<template>
    <button
    class="btn" 
    :class="[type,isRound,isPlain]"
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
    round:{
        type:Boolean,
        default:false
    },
    plain:{
        type:Boolean,
        default:false
    },
})
const round =toRef(props,"round");
const isRound = computed(()=>{
        return round.value? "isRound":""
})
const isPlain = computed(()=>{
        return props.plain? "isPlain":""
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
</style>