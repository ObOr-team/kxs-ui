<template>
    <div v-if="router.currentRoute.value.path=='/'" class="home">
        <img src="../assets/Kxx-UI-logo.png" alt=""/>
        <div class="btn-position">
            <k-button @click="IntoHome()">Start</k-button>
            <a href="https://github.com/5th-Youth-Training-OOT/Kxxx-UI" target="_blank"><k-button>Github</k-button></a>
        </div>
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
.home {
    img {
        width: 380px;
        height: 95px;
    }
    .btn-position{
        background-color: rgb(223, 220, 218);
    }
}

</style>