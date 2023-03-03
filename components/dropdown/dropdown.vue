<template>
<div :class="[`k-dropdown-${size}`]" @click="handleClick" @mouseover="mouseover" @mouseleave="mouseleave">
    <div class="k-dropdown-menu">
        <span>{{title}}</span>
        <i class="k-icon-down_line"></i>
    </div>
    <transition name="slide-fade">
        <div class="k-dropdown-item" v-if="isShow">
                <ul>
                     <li v-for="(item,index) in options" :key="index">
                         <i :class="item.icon"></i>
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
        type: Array as any,
        default: () => {
            return []
        }
    },
    size:{
		type:String,
		default:'default'
	},
    trigger:{
		type:String,
		default:"hover"
	},

})
const mouseover = () =>{
    if(proprs.trigger=='hover'){
		isShow.value = true
	}
}
const mouseleave = () =>{
    isShow.value = false
}
const handleClick = () =>{
    if(proprs.trigger=='click'){
		isShow.value = !isShow.value
	}
}
</script>

<style lang="scss" scoped>
.k-dropdown-default{
    display: inline-block;
    position: relative;
    .k-dropdown-menu{
        font-size: 14px;
		color:#444d55;
		cursor: pointer;
		line-height: 35px;
        border: 1px solid var(--default-border-color);
        border-radius: 10px;
        padding: 0px 5px;
        width: fit-content;
    }
    .k-dropdown-item {
		// box-sizing: border-box;
        
        // width: 100px;

        height: auto;
        overflow: hidden;
        position: absolute;
        top: 42px;
        z-index: 99;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
        border: 1px solid var(--default-border-color);
            ul {
                height: 100%;
                overflow-y: auto;
                padding: 3px 0px;
                box-sizing: border-box;
                margin: 0;
                li{
                    display: flex;
					list-style: none;
					height: 30px;
					line-height: 30px;
					text-align: center;
					font-size: 14px;
					color:#626262;
					cursor: pointer;
					padding:0px 15px;
					box-sizing: border-box;
					font-weight: initial;
					i{
						margin-right:4px;
					}
					&:hover{
						background:rgba(96, 98, 102,.1);
						color:#0e80eb
					}
				}
            }
    }
}
.k-dropdown-small{
    width: fit-content;
    display: inline-block;
    height: 40px;
    position: relative;
    .k-dropdown-menu{
        font-size: 12px;
		color:#444d55;
		cursor: pointer;
		line-height: 30px;
        border: 1px solid var(--default-border-color);
        border-radius: 10px;
        padding: 0px 5px;
        
    }
    .k-dropdown-item {
		// box-sizing: border-box;
        // width: 100%;
        height: auto;
        overflow: hidden;
        position: absolute;
        top: 42px;
        z-index: 99;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
        border: 1px solid var(--default-border-color);

            ul {
                height: 100%;
                overflow-y: auto;
                padding: 3px 0px;
                margin: 0;
                li{
                    display: flex;
					list-style: none;
					height: 30px;
					line-height: 30px;
					text-align: center;
					font-size: 12px;
					color:#626262;
					cursor: pointer;
					padding:0px 15px;
					font-weight: initial;
					i{
						margin-right:4px;
					}
					&:hover{
						background:rgba(96, 98, 102,.1);
						color:#0e80eb
					}
				}
            }
    }
}
.k-dropdown-mini{
    width: fit-content;
    display: inline-block;
    height: 40px;
    position: relative;
    .k-dropdown-menu{
        font-size: 10px;
		color:#444d55;
		cursor: pointer;
		line-height: 25px;
        border: 1px solid var(--default-border-color);
        border-radius: 10px;
        padding: 0px 5px;
        
    }
    .k-dropdown-item {
		// box-sizing: border-box;
        // width: 100%;
        height: auto;
        overflow: hidden;
        position: absolute;
        top: 42px;
        z-index: 99;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
        border: 1px solid var(--default-border-color);
            ul {
                height: 100%;
                overflow-y: auto;
                padding: 3px 0px;
                box-sizing: border-box;
                margin: 0;
                li{
                    display: flex;
					list-style: none;
					height: 30px;
					line-height: 30px;
					text-align: center;
					font-size: 10px;
					color:#626262;
					cursor: pointer;
					padding:0px 15px;
					box-sizing: border-box;
					font-weight: initial;
					i{
						margin-right:4px;
					}
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
