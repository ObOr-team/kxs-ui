//该文件专门用于创建整个应用的路由器
import {createRouter,createWebHistory} from "vue-router"
//创建路由
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            //首页路径
            path:'/',
            component:()=>import ("../views/Home.vue") ,
            children:[
                {
                    //button
                    path:'button',
                    component:()=>import ("../views/Button/Button.md") 

                },
                {
                    //form
                    path:'form',
                    component:()=>import ("../views/Form/Form.md") 
                }
            ]
        },
    ],
})
//暴露路由
export default router