<script lang="ts" setup>
    import { RouterLink} from "vue-router";
</script>
<template>
    <header>
        <h2>标题位置：面向对象队，Kxxx-UI组件库开发</h2>
    </header>
    <section>
        <aside>
            <h2>侧边栏位置</h2>
            <RouterLink to="/button">Button按钮</RouterLink><br/>
            <RouterLink to="/form">Form表单</RouterLink><br/>
            <RouterLink to="/nav">Nav导航栏</RouterLink>
         </aside>
        <article>
            <h2>内容展示</h2>
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
article{
    flex: 1;
    height: auto;
    overflow-y: scroll;
}
</style>