<script lang="ts" setup>
    //引入组件
    import KSelect from "@/components/kselect/KSelect.vue"
</script>
<template>
    <div>
        <k-select id="second" type="default" round placeholder="请选择">
          <option value='Javascript' selected>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>

        <k-preview compName="Select" demoName="SelectSecond"/>
    </div>
</template>