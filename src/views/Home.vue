<script lang="ts" setup>
    import menuList from "@/routers/routerPage/pages"
    import { ref } from "vue"
    import { useRouter } from "vue-router"
    const activeIndex = ref(0)
    const router = useRouter()
    const switchMenu = (item:any,index:any)=>{
        activeIndex.value=index
        router.push({
            name:item.name
        })
    }
    const preface = menuList[0].children[0].children.slice(0, 3) //快速上手
    const components = menuList[0].children[0].children.slice(3) //组件
</script>
<template>
    <header>
        <div class="head_container">
            <img src="../assets/Kxx-UI-logo.png" alt=""/>
            <div class="tools">
                <a href="">首页</a>
                <a href="">组件</a>
                <a href="">更新日志</a>
                <a href="">问题反馈</a>
            </div>
        </div>      
    </header>
    <!-- <hr/> -->
    <section>
        <div class="page_container">
            <aside>
                <div class="preface">
                    <div class="title">快速上手</div>
                    <li v-for="(item,index) in preface" :key="index"
                    :class="{active:activeIndex==index}"
                    @click="switchMenu(item,index)">
                        {{ item.name }}
                    </li>
                </div>
                <div class="components">
                    <div class="title">组件</div>
                    <li v-for="(item,index) in components" :key="index"
                    :class="{active:activeIndex==index+preface.length}"
                    @click="switchMenu(item,index+preface.length)">
                        {{ item.name }}
                    </li>
                </div>
            </aside>
            <article>
                <RouterView></RouterView> 
            </article>
        </div>
    </section>
 
</template>
<style lang="scss" scoped>
header{
    position: fixed;
    width: 100%;
    height: 90px;
    left: 0;
    top: 0;
    z-index: 1000; //位于顶层
    background-color: white;
    .head_container{
        height: 80px;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-between;
        // width: 1140px;
        width: 86%;
        min-width: 500px;
        margin: auto;
        border-bottom: 1px solid var(--default-border-color);
        
    }
    img{
        width: 200px;
        height: 60px;
        margin-left:30px;
    }
    .tools{
        height: 50px;
        // width: 80%;
        padding-top: 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: center;
        a {
            margin: 10px;
            padding: 5px;
            text-decoration: none;
            outline: none;	
            color: #333;
            font-size: 18px;
            border-bottom: 2px solid rgba(0, 0, 0, 0); //去除抖动
        }
        a:hover {
            color: #0e80eb;
            border-bottom: 2px solid #0e80eb;
        }
    } 
}
// hr{
//     width: 1140px;
//     border: 1px solid var(--default-border-color);
//     border-radius: 5px;
//     margin-top: 90px;
// }
section{
    padding-top: 40px;
   .page_container{
    display: flex;
    // width: 1140px;
    width: 92%;
    min-width: 500px;
    margin:auto;
    aside{
        width: 18%;
        height: auto;
        overflow-y: auto;
        .title {
            padding:0 10px;
            margin: 0 0 10px 0;
            box-sizing: border-box;
            font-size: 14px;
            color: #999;
            line-height:40px;
            border-bottom: 1px solid var(--default-border-color);
        }
        li{
            list-style: none;
            line-height:40px;
            padding:0 10px;
            box-sizing:border-box;
            cursor: pointer;
            font-size: 14px;
            // font-family: "Times New Roman", Times, serif;
            // font-family: Arial, Helvetica, sans-serif;
            // font-family: "Lucida Console", "Courier New", monospace;
            &.active{
                border-right: 4px solid #0e80eb;
                color: #0e80eb;
                background: rgba(14, 125,235,.1);
            }
        }
        li:hover {
            color: #0e80eb;
        }
    }
    article{
        flex: 1;
        height: auto;
        overflow-y:auto;
        padding: 15px 30px;
        border-left: 2px solid var(--default-border-color);
        box-sizing: border-box;
    }
}   
}
 
</style>