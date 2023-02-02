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
        <h2>标题位置：面向对象队，Kxxx-UI组件库开发</h2>
    </header>
    <section>
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
    </section>
</template>
<style scoped>
header{
    border: 1px solid gray;
}
section{
    display: flex;
}
aside{
    width: 20%;
    height: auto;
    overflow-y: scroll; 
}    
li{
    list-style: none;
    line-height:40px;
    padding:0 10px;
    box-sizing:border-box;
    cursor: pointer;
} 
li.active{
    border-right: 4px solid #0e80eb;
    color: #0e80eb;
    background: rgba(14, 125,235,.1);
}
article{
    flex: 1;
    height: auto;
    overflow-y: scroll;
    padding: 0 15px;
    box-sizing: border-box;
}
</style>