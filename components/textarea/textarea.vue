<template>
    <div :class="kClass">
        <textarea name="" id="" 
        :cols="cols" 
        :rows="rows"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        :maxlength="maxlength"
        @input="input"
        @focus="focus"
        @blur="blur"
        >
    </textarea>
    <div class="max-length-inline">
        {{n}}/{{maxlength}}
    </div>
    </div>
</template>

<script lang="ts">
export default {
    name:"kTextarea"
}
</script>

<script lang="ts" setup>
import {computed,ref} from 'vue'
    const props =defineProps({
        modelValue:String,
        disabled:Boolean,
        readonly:Boolean,
        placeholder:String,
        maxlength:Number,
        resize:{
            type:Boolean,
            default:true
        },
        rows:{
            type:Number,
            default:5
        },
        cols:{
            type:Number,
            default:60
        }
    })
    const n =ref(0);
    const emit = defineEmits(['update:modelValue','focus','blur'])
    const input = (e:any) =>{
        n.value=e.target.value.length
        emit('update:modelValue',e.target.value)
    }
    const updateValue = () => {
        emit('update:modelValue', '传一个新的值')
    }
    const focus = (e:any) =>{
        emit('focus',e)
    }
    const blur = (e:any) =>{
        emit('blur',e)
    }
    const kClass = computed(()=>{
        return{
            'k-textarea':true,
            'k-textarea-disabled':props.disabled
        }
    })
</script>


<style lang="scss" scoped>
    .k-textarea{
        height: auto;
        display: inline-block;
        overflow: hidden;
        position: relative;
        margin-left: 10px;
        textarea{
            resize: none;
            width: 100%;
            outline:none;
            padding: 8px 8px;
            border-radius: 5px;
            font-size: 10px;
            font-family: auto;
            cursor: pointer;
            color:var(--default-text-color);
            border: 1px solid var(--btn-color-gray);
            &:focus{
                border: 1px solid var(--active-border-color);
            }

        }
    }
    .max-length-inline{
        width: 100%;
        line-height: 20px;
        font-size: 12px;
        text-align: right;
        padding: 0 10px;
        color: #aeafb3;
        position: absolute;
        box-sizing: border-box;
        bottom: 10px;
    }
    .k-textarea-disabled{
        textarea{
            cursor: no-drop;
        }
    }
    textarea::placeholder{
        color:rgb(197, 201, 201);
    }
</style>