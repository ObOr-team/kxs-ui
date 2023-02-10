<template>
    <div v-if="router.currentRoute.value.path=='/'">
         <k-button @click="IntoHome()" class="btn-position">起步上手</k-button>
    </div>
    <RouterView></RouterView>
</template>
<script lang="ts" setup>      
import { useRouter } from "vue-router"
      const router = useRouter()
      const IntoHome = ()=>{
        //路由跳转
          router.push({
              path:'home'
          })
  } 
// 输出当前页面路由的路径和名字
// console.log(router.currentRoute.value.path)
// console.log(router.currentRoute.value.name)
</script>
<style lang="scss" scoped>
div{
    position: relative;
    .btn-position{
        background-color: rgb(223, 220, 218);
        top: 406px;
        left: 837px;
        position: absolute;
    }
}

</style>