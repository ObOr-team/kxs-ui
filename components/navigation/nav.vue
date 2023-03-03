<template>
       <div @click="itemClick()"  id="huoquID">
            <a   
            :class="[isDisabled,isPerpendicular,isActive]" 
            :index="index" 
            class="aaa"
            href="#" >
            <i :class="icon" ></i>
                <slot></slot>
            <i :class="post" ></i>
        </a>
</div>
   
</template>
<script lang="ts">
  export default {
    name: 'kNav',
  
  }
</script>
<script lang="ts" setup>
import { defineProps,computed,} from 'vue'
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
        Perpendicular:{
            type:Boolean,
            default:false
        },
        icon:{
            type:String,
            default:""
        },
        postIcon:{
            type:String,
            default:""
        },
    })

    const isDisabled = computed(()=>{
        return props.disabled? "isDisabled":""
    })

    const isPerpendicular = computed(()=>{
        return props.Perpendicular? "isPerpendicular":""
    })
    const post = computed(()=>{
        return props.postIcon? `${props.postIcon}`:""
    })
    const icon = computed(()=>{
        return props.icon? `${props.icon}`:""
    })
    const isActive = computed(()=>{
        return props.active? "isActive":""
    })  
    const itemClick = () =>{
        let indextwo = props.index
        // let yusnu = document.querySelector(`a[index='${indextwo}']`)
        let navList = document.getElementsByClassName('aaa')           
        for(let i=1;i <= navList.length;i++){
            let yunsu2 = document.querySelector(`a[index='${i}']`)
            yunsu2?.removeAttribute('id')
            if(i == indextwo){
                yunsu2?.setAttribute('id','isActive')
            }else{

            } 
        } 
        //  console.log(navList.length);
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
div{
    display: inline-block;
    &:hover{
            color: var(--btn-color-white);
            background-color: var(--primary);
        }
}
</style>