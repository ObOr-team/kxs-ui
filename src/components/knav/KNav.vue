<template>
       <div @click="itemClick(index)"  id="huoquID">
            <a   
            :class="[isDisabled,isPerpendicular,isActive]" 
            :index="index" 
            class="aaa"
            href="#" >
            <i :class="front" ></i>
                <slot></slot>
            <i :class="behind" ></i>
        </a>
</div>
   
</template>

<script lang="ts" setup>
import { defineProps,computed,toRef} from 'vue'
        const props = defineProps({
        index:{
            type:Number,
        },
        active:{
            type:String,
            default:""
        },
        disabled:{
            type:Boolean,
            default:false
        },
        round:{
            type:Boolean,
            default:false
        },
        Perpendicular:{
            type:Boolean,
            default:false
        },
        frontIcon:{
            type:String,
            default:""
        },
        behindIcon:{
            type:String,
            default:""
        },
    })

    const round = toRef(props,"round");
    const isRound = computed(()=>{
        return round.value? "isRound":""
    }) 

    const isDisabled = computed(()=>{
        return props.disabled? "isDisabled":""
    })

    const isPerpendicular = computed(()=>{
        return props.Perpendicular? "isPerpendicular":""
    })
    const front = computed(()=>{
        return props.frontIcon? `iconfont icon-${props.frontIcon}`:""
    })
    const behind = computed(()=>{
        return props.behindIcon? `iconfont icon-${props.behindIcon}`:""
    })
    const isActive = computed(()=>{
        return props.active? "isActive":""
    })  
    const itemClick = () =>{
        let indextwo = props.index
        let yusnu = document.querySelector(`a[index='${indextwo}']`)
        let navList = document.getElementsByClassName('aaa')           
        for(let i=1;i <= navList.length;i++){
            let yunsu2 = document.querySelector(`a[index='${i}']`)
            yunsu2?.removeAttribute('id')
            if(i == indextwo){
                yunsu2?.setAttribute('id','isActive')
            }else{

            } 
        } 
         console.log(navList.length);
    }
</script>

<style lang="scss" scoped>
.isDisabled{
    opacity: 0.5;
    cursor: no-drop;
}
.isPerpendicular{
    display: flex;
}
#isActive{
       &:not(.isDisabled){
    color: dodgerblue;
    border: 1px solid rgb(236,245,255);
    background-color: rgb(236,245,255);
        } 
}
    a{
        text-decoration:none;
        cursor:pointer;
        box-sizing: border-box;
        padding: 15px 20px;
        display: inline-block;
/*         &:not(.isDisabled):hover{
            color:blue;
        }    */
    }
          a:link{
            color:black;
        }
        a:visited{
            color:black;
        }  
     
</style>