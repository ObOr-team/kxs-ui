<script lang="ts" setup>
    import {RouterLink} from "vue-router"
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
</script>
<template>
    <header>
        <div class="head_container">
            <img src="../assets/Kxx-UI-logo.png" alt=""/> 
        </div>
    </header>
    <hr/>
    <section>
           <div class="page_container">
            <aside>
                <li v-for="(item,index) in menuList[0].children" :key="index"
                :class="{active:activeIndex==index}"
                @click="switchMenu(item,index)">
                    {{ item.name }}
                </li>
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
    // left: 0;
    top: 0;
    // z-index: 1500;
    .head_container{
        height: 80px;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        width: 1140px;
        margin:auto;
    }
    img{
        width: 200px;
        height: 60px;
        margin-left:30px;
    }
}
hr{
    width: 1140px;
    border: 2px solid var(--default-border-color);
    border-radius: 5px;
    margin-top: 80px;
}
section{
   .page_container{
    display: flex;
    width: 1140px;
    margin:auto;
    aside{
        width: 18%;
        height: auto;
        overflow-y: auto; 
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
    }
    article{
        flex: 1;
        height: auto;
        overflow-y:auto;
        padding: 15px 30px;
        border: 4px solid var(--default-border-color);
        box-sizing: border-box;
    }
}   
}
 
</style>