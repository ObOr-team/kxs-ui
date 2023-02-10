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
        type:Array,
        default:()=>{return []}
    }
})
const newOptions = ref(props.options)
const isOpen = (item:any)=>{
    item.isOpened=!item.isOpened
    console.log(item)
}
</script>
<style lang="scss" scoped>

li{
        cursor: pointer;
}
.k-tree-item-box{
      width: 100%;
      height:100%;
      margin-top: 20px;
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