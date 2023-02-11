<script setup>
    import demo1 from './demo1.vue' 
    import demo2 from './demo2.vue' 
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
    import demo5 from './demo5.vue'
    import demo6 from './demo6.vue'
</script>
## Radio单选

### ● 基本使用
<p> radio 组件的基本使用，需要一个主要的<code>options</code>参数。</p>
<demo1/>
<k-preview compname="Radio" demoname="demo1"/>

### ● 禁用选项
<p>可以针对 options 下某个选项来添加<code>disabled</code> 属性实现禁用选项。</p>
<demo2/>
<k-preview compname="Radio" demoname="demo2"/>

### ● 垂直排列
<p>可以通过添加<code>column</code>属性为实现垂直排列。</p>
<demo3/>
<k-preview compname="Radio" demoname="demo3"/>

### ● 自定义颜色
<p>可以通过设置<code>customColor</code>属性的值自定义你喜欢的颜色。</p>
<demo4/>
<k-preview compname="Radio" demoname="demo4"/>

### ● 自定义数据格式
<p>默认options接收label和value作为显示和值绑定，你可以使用<code>labelFiled</code>和<code>valueFiled</code>来重新确定字段的绑定，更方便的匹配不同格式的数据。</p>
<demo5/>
<k-preview compname="Radio" demoname="demo5"/>

### ● 获取点击的数据
<p>可以通过绑定<code>change</code>事件,获取点击的数据</p>
<demo6/>
<k-preview compname="Radio" demoname="demo6"/>