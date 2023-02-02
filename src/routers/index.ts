//该文件专门用于创建整个应用的路由器
import {createRouter,createWebHashHistory} from "vue-router"
import routerPages from "./routerPage/pages"
//创建路由
const router = createRouter({
    history:createWebHashHistory(),
    routes:[...routerPages]
})
//暴露路由
export default router