//该文件专门用于创建整个应用的路由器
import {createRouter,createWebHistory} from "vue-router"
//引入组件
import Home from "../views/Home.vue"

//创建路由
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            //首页路径
            path:'/',
            component:Home
        },
        {
            //button
            path:'/button',
            component:()=>import ("../views/Button.vue") 
        },
    ],
})
//暴露路由
export default router