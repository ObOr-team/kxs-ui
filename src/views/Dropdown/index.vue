<template>
<div class="k-dropdown-default" @click="handleClick" @mouseover="mouseover" @mouseleave="mouseleave">
    <div class="k-dropdown-menu">
        <span>{{title}}</span>
        <i class="k-icon-down_line"></i>
    </div>
    <transition name="slide-fade">
        <div class="k-dropdown-item" v-if="isShow">
                <ul>
                     <li v-for="(item,index) in options" :key="index">
                         <!-- <i :class="item.icon"></i> -->
                        {{item.label}}
                    </li>
                </ul>
        </div>
    </transition>

</div>
</template>

<script lang="ts">
export default {
    name: "kDropdown",
}
</script>
<script lang="ts" setup>
import {ref,} from 'vue'
const isShow = ref(false)
const proprs = defineProps({
    title: String,
    options: {
        type: Array,
        default: () => {
            return []
        }
    },
    size:{
		type:String,
		default:'default'
	},
})
const mouseover = () =>{
    isShow.value = true
}
const mouseleave = () =>{
    isShow.value = false
}
const handleClick = () =>{
	isShow.value = !isShow.value
}
</script>

<style lang="scss" scoped>
.k-dropdown-default{
    width: fit-content;
    .k-dropdown-menu{
        font-size: 13px;
		color:#444d55;
		cursor: pointer;
		line-height: 35px;
        border: 1px solid var(--default-border-color);
        border-radius: 10px;
        padding: 0px 5px;
        
    }
    .k-dropdown-item {
        border: 1px solid var(--default-border-color);
        border-radius: 10px;
        height: auto;
        // position: absolute;
		height: auto;
		overflow: hidden;
		box-sizing: border-box;
		left:0;
		z-index: 99;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
            ul {
                height: 100%;
                overflow-y: auto;
                padding: 3px 0px;
                box-sizing: border-box;
                margin: 0;
                li {
                    list-style: none;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    font-size: 13px;
                    color: #626262;
                    cursor: pointer;
                    padding: 0px 15px;
                    box-sizing: border-box;
                    font-weight: initial;
                    &:hover{
						background:rgba(96, 98, 102,.1);
						color:#0e80eb
					}
                }
            }
    }
}

.slide-fade-enter-active {
    transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: .5;
}
</style>
