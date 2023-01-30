<template>
 <span id="k-menu" 
 :class="[isPerpendicular]">
      <slot></slot>
    </span>

</template>

<script lang="ts" setup>
import { defineProps,computed,toRef } from 'vue'
    const props = defineProps({
        index:{
            type:Number,
        },
        round:{
            type:Boolean,
            default:false
        },
        Perpendicular:{
            type:Boolean,
            default:false
        },
    })

    const round = toRef(props,"round");
    const isRound = computed(()=>{
        return round.value? "isRound":""
    })


    const isPerpendicular = computed(()=>{
        return props.Perpendicular? "isPerpendicular":""
    })

</script>

<style lang="scss" scoped>
span{
    border: 1px solid rgb(230,230,230);
    box-shadow: 0px 0px 0px 0px;
    background-color: white;
    display: inline-block;
}
.isPerpendicular{
    display: flex;
}
</style>