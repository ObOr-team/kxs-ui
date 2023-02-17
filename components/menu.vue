<template>
 <span ref="menuRef" 
 :class="[isPerpendicular]">
      <slot></slot>
    </span>

</template>

<script lang="ts">
  export default {
    name: 'kMenu',
  
  }
</script>
<script lang="ts" setup>
import { defineProps,computed,ref } from 'vue'
    const props = defineProps({
        index:{
            type:Number,
        },
        Perpendicular:{
            type:Boolean,
            default:false
        },
    })
    const isPerpendicular = computed(()=>{
        return props.Perpendicular? "isPerpendicular":""
    })
    const menuRef=ref(null)
    console.log(menuRef.value)
</script>

<style lang="scss" scoped>
span{
    border: 1px solid rgb(230,230,230);
    box-shadow: 0px 0px 0px 0px;
    background-color: white;
    // display: inline-block;
    width: fit-content;
    border-radius: 10px;
    display: flex;
}
.isPerpendicular{
    // display: flex;
    flex-direction: column;
    border-radius: 10px;
}
</style>