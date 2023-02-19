<script lang="ts" setup>
    import demo1 from './demo1.vue' 
    import demo2 from './demo2.vue' 
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
    // import demo5 from './demo5.vue'
    // import demo6 from './demo6.vue'
    // import demo7 from './demo7.vue'
</script>
## Dropdown

### ● 基本用法 
<p>Dropdown 下拉菜单的基本使用，需要一个主要的<code>options</code> 参数。</p>
<div class="borderBox">
    <demo1/>
    <k-preview compname="Dropdown" demoname="demo1"/>
</div>

### ● 不同大小
<p>通过设置<code> size</code> 属性适应不同大小。</p>
<div class="borderBox">
    <demo2/>
    <k-preview compname="Dropdown" demoname="demo2"/>
</div>

### ● 带图标
<p>通过设置 options 数据的<code>icon</code> 属性展示图标</p>
<div class="borderBox">
 <demo3/>   
<k-preview compname="Dropdown" demoname="demo3"/>
</div>

### ● 点击唤醒
<p>默认是移入触发菜单，可以通过 <code>trigger</code>属性设置点击触发唤醒方式</p>
<div class="borderBox">
 <demo4/>   
<k-preview compname="Dropdown" demoname="demo4"/>
</div>