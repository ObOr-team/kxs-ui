<template>
    <div class="k-tree-item-box">
        <li v-for="(item,index) in options" :key="index"
         @click.stop="isOpen(item)"
        > 
        {{ item.label}}
            <ul v-show="item.isOpened" v-if="item.children&&item.children.length">
                <k-tree
                :options="item.children"
                >
                </k-tree>
            </ul>
        </li>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
    name:"kTree",
}
</script>
<script lang="ts" setup>
const props = defineProps({
    options:{
        type:Array as any,
        default:()=>{return []}
    }
})
const newOptions = ref(props.options)
const isOpen = (item:any)=>{
    item.isOpened=!item.isOpened
    // console.log(item)
}
</script>
<style lang="scss" scoped>

li{
        cursor: pointer;
        &:hover{
               background: #f0f0f0;
        }
        //修改li的图标
        // list-style-image:url(../../assets/right-deltoid.png) ;
        //采用背景修改图标，
        //  list-style-type: none;
        // background: url("../../assets/right-deltoid.png") no-repeat 0rem 0.2rem;
        background-size: 1rem 1rem;
        text-indent: 2em;
        // line-height: 40px;
}
.k-tree-item-box{
      width: 100%;
      height:100%;
      margin: 0 10px 10px;
    //   &:hover{
    //     background:#f5f5f5 ;
    //   }
    //   span.k-tree-lable-span{
    //     width:14px;
    //     height:14px;
    //     display: inline-block;
    //     line-height: 14px;
    //     transition: all .2s ease;
    //     i{
    //       width:100%;
    //       height:100%;
    //       font-size:12px;
    //       display: inline-block;
    //       color:#969696;
          
    //     }
    //   }
 }
</style>