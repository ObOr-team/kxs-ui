<template>
    <div class="borderBox">
        <k-carouselcard  
        :imgData="imgData"
        :autoplay="2000"
        :showPointer="true"
      >
      </k-carouselcard>
        <k-preview compName="Carousel/doc" demoName="demo4"/>
    </div>
</template>
<script lang="ts" setup>
import kCarouselcard from "../KCarouselcard.vue";
let imgData = [
    {
        url: "https://img-blog.csdnimg.cn/bc3292108e9c4f3ab289d32ff8fba599.jpg",
        id: 0
    },
    {
        url: "https://img-blog.csdnimg.cn/96d9b0d116e943e69050d1cb09a3c068.jpg",
        id: 1
    },
    {
        url: "https://img-blog.csdnimg.cn/6309a2bf616d42449bd1a64594a31ad0.jpg",
        id: 2
    }, {
        url: "https://img-blog.csdnimg.cn/f70ea795c036419db9002a1d452ab01a.jpg",
        id: 3
    },
    {
        url: "https://img-blog.csdnimg.cn/3be574c4c3bf402689c52bf3d1c021de.png",
        id: 4
    },
]
</script>