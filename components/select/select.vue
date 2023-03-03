<template>
    <div class="k-select" v-clickOutside>
        <div class="div-input-div" :disabled="disabled" :class="{'disabled-input-li':disabled}">
            <input type="text" readonly 
            :value="selectVal" 
            :disabled="disabled"
            :class="{'disabled-input-li':disabled}"
            :placeholder="placeholder"
            />
            <i :class="['k-icon-xia','input-icon'] "
            :style="[{ transform: rotate }]"
            ></i>
        </div>

        <transition name="slide-fade">
            <div class="k-position-box" v-if="positionShow">
            <li v-for="(item,index) in options" :key="index" 
            @click="change(item,index)"
            :class="{'disabled-input-li':item.disabled,'item-active-li':activeIndex==index}"
            class="item-li"
            >
                {{item[filedLabel]}}
            </li>
            </div>
        </transition>
    </div>
</template>


<script lang="ts">
export default {
    name:"kSelect"
}
</script>
<script lang="ts" setup>
    import {ref} from 'vue'
    const emit=defineEmits(['change','update:modelValue'])
    const props = defineProps({
        options:{
            type:Array as any,
            default:()=>[]
        },
        disabled:Boolean,
        placeholder:String,
        modelValue:String,
        filedLabel:{
            type:String,
            default:"label"
        },
        filedValue:{
            type:String,
            default:"value"
        }
    })
    const activeIndex=ref(-1)
    const positionShow =ref(false)
    const selectVal=ref(props.modelValue)
    const rotate = ref("rotate(0deg)");
    props.options.forEach((item:any,index:any)=>{
        if(item[props.filedValue]==props.modelValue){
            selectVal.value=item[props.filedLabel]
        }
    })
    const vClickOutside={
        beforeMount(el:any){
            // console.log(el)
            let handler =(e:any)=>{
                if(!props.disabled){
                    if(el.contains(e.target)&&e.target.className.indexOf('item-li')==-1){
                        positionShow.value=!positionShow.value
                        if (positionShow.value) {
                             rotate.value = "rotate(180deg)";
                        } else {
                        rotate.value = "rotate(0deg)";
                        }
                    }else{
                        if(e.target.className.indexOf('disabled-input-li')){
                            positionShow.value=false
                            if (positionShow.value) {
                                rotate.value = "rotate(180deg)";
                            } else {
                            rotate.value = "rotate(0deg)";
                            }
                        }
                    }
                }
             
            }
            document.addEventListener('click',handler)
        }
    }
    const change =(item:any,index:any)=>{
        if(!item.disabled){
            activeIndex.value=index
            selectVal.value = item[props.filedLabel];
            positionShow.value=false
            emit('change',item)
            emit('update:modelValue',item[props.filedLabel])
        }
    }
</script>
<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
.k-select{
    min-width: 250px;
    display: inline-block;
    height: 40px;
    position: relative;
    margin-left: 10px;
    margin-bottom: 5px;
    .div-input-div{
        border-radius: 5px;
        width: fit-content;
        border: 1px solid var(--default-border-color);
        input{
            width: 220px;
            border: none;
            // border: 1px solid var(--default-border-color);
            border-radius: 5px;
            padding: 8px 10px;
            outline: none;
            box-sizing: border-box;
            cursor: pointer;
        }
        .input-icon{
            display: inline-block;
            transform: rotate(deg);
        }
    }
    .k-position-box{
        width: 38%;
        height: auto;
        overflow: hidden;
        position: absolute;
        top: 42px;
        z-index: 99;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
        border: 1px solid var(--default-border-color);
        li{
            list-style: none;
            line-height: 40px;
            padding: 0 10px;
            cursor: pointer;
            font-size: 13px;
            &:hover{
                background: #f0f0f0;
            }
        }
    }
}
.disabled-input-li{
    cursor: no-drop !important;
    color: rgb(145, 142, 139);
    background: #f0f0f0;
}
.item-active-li{
    color: rgb(82, 129, 231);
}
.k-icon-xia:before {
    padding: 5px;
}
</style>