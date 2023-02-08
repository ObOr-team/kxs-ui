<script lang="ts" setup>
    //引入组件
    import KSelect from "../../components/kselect/KSelect.vue"
    
</script>
<template>
<div>
    <div>
        <h3>●  基础</h3>
        <k-select type="default" round placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        <k-select type="primary" round placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        <k-select type="success" round placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        <k-select type="info" round placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        <k-select type="danger" round placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        <div>
            <k-select type="default" placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        <k-select type="primary" placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        <k-select type="success" placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        <k-select type="info" placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        <k-select type="danger" placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        </div>
    </div>   
    <div>
        <h3>●  禁用</h3>
        <k-select type="default" round disabled placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        <k-select type="primary" round disabled placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        <k-select type="success" round disabled placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        <k-select type="info" round disabled placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        <k-select type="danger" round disabled placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        <div>
            <k-select type="default" disabled placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        <k-select type="primary" disabled placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        <k-select type="success" disabled placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        <k-select type="info" disabled placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        <k-select type="danger" disabled placeholder="请选择">
          <option value='Javascript'>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>
        </div>
    </div>
    <div>
        <h3>●  级联</h3>

        <k-select id="second" type="default" round placeholder="请选择">
          <option value='Javascript' selected>Javascript</option>
          <option value='C++'>C++</option>
          <option value='PHP'>PHP</option>
          <option value='Java'>Java</option>
        </k-select>


    </div>
    <div>
        <h3>●  多选</h3>

    </div>

</div>

</template>
