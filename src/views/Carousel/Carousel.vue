<template>
    <div>
      <h3>● 基础轮播图</h3>
      <k-carousel  
        :imgData="imgData"
        :autoplay="2000"
        :showPointer="true"
        :isHorizontal="true"
      >
      </k-carousel>
      <h4>关闭指示点</h4>
      <k-carousel  
        :imgData="imgData"
        :autoplay="2000"
        :showPointer="false"
        :isHorizontal="true"
      >
      </k-carousel>
    </div>
    <div>
      <h3>● 垂直轮播图</h3>
      <k-carousel  
        :imgData="imgData"
        :autoplay="2000"
        :showPointer="true"
        :isHorizontal="false"
      >
      </k-carousel>
    </div>
</template>

<script lang="ts" setup>
import KCarousel from "../../components/kcarousel/KCarousel.vue"
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