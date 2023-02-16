<template>
    <div class="k-radio">
        <div 
        class="k-item-radio" 
        v-for="(item,index) in options" 
        :key="index"
        @click="change(item,index)"
        :class="{'k-item-disabled-radio':item.disabled}"
        >
            <span :class="{active:radioIndex==index}"></span>
            {{item[filedLabel]}}
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name:"kRadio"
}
</script>
<script lang="ts" setup>
import { ref } from 'vue';
    const props =defineProps({
        options:{
            type:Array,
            default:()=>[],
        },
        column:{
            type:Boolean,
            default:false
        },
        customColor:{
            type:String,
            default:"#8b8c8d"
        },
        filedLabel:{
            type:String,
            default:"label"
        },
        filedValue:{
            type:String,
            default:"value"
        }
    })
    const radioIndex = ref(0);
    const emit=defineEmits(['change'])
    const change =(e:any,index:any)=>{
        if(!e.disabled){
            radioIndex.value=index;
            emit('change',e)
        }
    }
    const iscolumn =ref('inline-flex')
    props.column? iscolumn.value='flex':iscolumn.value='inline-flex' 
</script>
<style lang="scss" scoped>
    .k-radio{
        width: auto;
        height: auto;
        overflow: hidden;
        .k-item-radio{
            width: auto;
            height: auto;
            overflow: hidden;
            display: v-bind(iscolumn);
            line-height: 20px;
            cursor: pointer;
            font-size: 14px;
            margin:0px 10px 10px;
            user-select: none;
            span{
                width: 14px;
                //overflow: hidden;
                height: 14px;
                // display: inline-block;
                background: #fff;
                border: 1px solid #b1b4b8;
                border-radius: 50%;
                margin: 3px 8px 0 0;
                // transition: transform .15s ease-in;
                position: relative;
                &::after{
	                // display:inline-block;
                    border-radius: 50%;
                    width: 6px;
                    height: 6px;
                    content: "";
                    background-color: rgb(253, 250, 250);
                    position: absolute;
                    left: 29%;
                     top: 25%;
                    // margin: -2px 0 0 -2px;
                    // transition: transform .15s ease-in-out;
                }
            }
            span.active{
                background:v-bind('props.customColor');
            }
        }

    }
    .k-item-disabled-radio{
        cursor: no-drop !important;
        color: #a6a8ac;
        span{
            background: #f1f3f5 !important;
            &::after{
                background-color: rgb(173, 168, 168) !important;
            }
        }
    }

</style>