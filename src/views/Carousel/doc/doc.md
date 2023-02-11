<script lang="ts" setup>
    import demo1 from './demo1.vue' 
    import demo2 from './demo2.vue' 
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
</script>
### ● 基础轮播图  
<p>在有限空间内，循环播放同一类型的图片、文字等内容</p>
<demo1/>
    <k-preview compname="carousel" demoname="demo1"/>

### ● 指示点
<p><code>showPointer</code>属性定义了是否显示指示器。 默认情况下设置为 true ，设置为 false 则不会显示指示器。</p> 
<demo2/>
<k-preview compname="carousel" demoName="demo2"/> 

### ● 垂直轮播图
<p><code>isHorizontal</code>属性定义了是否垂直显示轮播图。 默认情况下设置为 true，显示为水平轮播图。设置为 false 则可以让轮播图在垂直方向上显示。</p> 
<demo3/>
<k-preview compname="carousel" demoName="demo3"/> 

### ● 卡片式播图
<p>当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格。交互效果不弱于标准轮播图。</p> 
<demo4/> 
<k-preview compname="carousel" demoname="demo4"/>