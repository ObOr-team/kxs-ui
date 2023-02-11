<template>
    <div class="contentBox"  v-if="router.currentRoute.value.path=='/'">
      <div class="imgLogo">
        <img src="../assets/Kxx-UI-logo.png" alt="mzl-ui" />
      </div>
      <h3>一套适合开发者使用的轻量级UI组件库，完美支持vue3</h3>
      <div class="tiBox">
        <p>
          完美支持vite+vue3版本，更小的体积，更快的响应，更强的拓展性，让我们一起向未来，拥抱这精彩的vue世界！
        </p>
        <div class="buttonGroups">
          <k-button
            type="primary"
            round
            style="padding: 15px 50px; margin-right: 2vw; font-size: 17px"
            @click="toComponents"
            >立即上手</k-button
          >
          <k-button
            round
            icon="m-icon-github"
            style="padding: 15px 50px; margin-left: 2vw; font-size: 17px"
            @click="goGuthub"
            >Github</k-button
          >
        </div>
        <div class="cardBox">
          <li>
            <p>更小的体积</p>
            <div>组件体积更小，灵活使用，按需使用。</div>
          </li>
          <li>
            <p>更快的响应</p>
            <div>配合vue3的composition API，更快的相应。</div>
          </li>
          <li>
            <p>更强的拓展性</p>
            <div>给开发者几乎所有的机会来自定义组件，满足一切项目使用场景。</div>
          </li>
          <li>
            <p>更完美的支持</p>
            <div>专为vue3版本开发。</div>
          </li>
          <li>
            <p>更友好的渲染</p>
            <div>极少的代码量，极简配置项。</div>
          </li>
        </div>
        <div class="links">
          <p class="titles">链接</p>
          <span @click="goGuthub">Github</span>
          <span @click="goToNpm">NPM</span>
          <!-- <span>关于MZL_UI</span> -->
          <span @click="verSion">更新日志</span>
          <!-- <span>关于作者</span> -->
          <p class="titles">贡献人员</p>
          <li
            v-for="(item, index) in devoteList"
            :key="index"
            title="点击跳转至Ta的Github主页"
            @click="toDevoteGithub(item)"
          >
            <div class="">
              <img :src="item.img" alt="" />
              <span :style="{ color: item.name == 'Ningstyle' ? '#000' : '' }">{{
                item.name
              }}</span>
            </div>
          </li>
        </div>
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