<script setup>
    import demo1 from './demo1.vue' 
    import demo2 from './demo2.vue' 
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
    // import demo5 from './demo5.vue'
    // import demo6 from './demo6.vue'
</script>

## Select下拉框

### ● 基本用法 
<p>select 下拉框基本使用示例,需要一个主要的<code> options </code>参数</p>
<demo1/>

### ● 禁用状态 
<p>可以设置 <code> disabled </code> 属性来实现禁用状态参数</p>
<demo2/>

### ● 选项禁用 
<p>可以针对 options 下某个选项来添加 <code> disabled </code>属性实现禁用选项</p>
<demo3/>

### ● 匹配不同格式的数据 
<p>默认 options 接收 label 和 value 作为显示和值绑定，你可以根据<code>labelFiled</code>和<code> valueFiled</code> 来重新确定字段的绑定，更方便的匹配不同格式的数据。</p>
<demo4/>