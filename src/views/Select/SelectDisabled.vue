<script lang="ts" setup>
    //引入组件
    import KSelect from "@/components/kselect/KSelect.vue"
</script>
<template>
    <div>
        <div>
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
        </div>

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

        <k-preview compName="Select" demoName="SelectDisabled"/>
    </div>
</template>