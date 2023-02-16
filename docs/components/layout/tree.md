
<script setup>
import { reactive } from "vue";
const state = reactive({
  treeOptions: [
    {
      label: "一级",
      value: "",
      children: [
        {
          label: "一级1",
          value: "",
        },
        {
          label: "一级2",
          value: "",
        },
        {
          label: "一级3",
          value: "",
          children: [
            {
              label: "一级3-1",
              value: "",
            },
            {
              label: "一级3-2",
              value: "",
              children: [
                {
                  label: "一级3-2-1",
                  value: "",
                },
                {
                  label: "一级3-2-2",
                  value: "",
                },
                {
                  label: "一级3-2-3",
                  value: "",
                },
              ],
            },
            {
              label: "一级3-3",
              value: "",
            },
          ],
        },
      ],
    },
    {
      label: "二级",
      value: "",
      children: [
        {
          label: "二级1",
          value: "",
        },
        {
          label: "二级2",
          value: "",
        },
        {
          label: "二级3",
          value: "",
          children: [
            {
              label: "二级3-1",
              value: "",
              children: [
                {
                  label: "二级3-1-1",
                  value: "",
                },
                {
                  label: "二级3-1-2",
                  value: "",
                },
                {
                  label: "二级3-1-3",
                  value: "",
                },
              ],
            },
            {
              label: "二级3-2",
              value: "",
            },
            {
              label: "二级3-3",
              value: "",
            },
          ],
        },
      ],
    },
    {
      label: "三级",
      value: "",
      children: [
        {
          label: "三级1",
          value: "",
        },
        {
          label: "三级2",
          value: "",
        },
        {
          label: "三级3",
          value: "",
          children: [
            {
              label: "三级3-1",
              value: "",
            },
            {
              label: "三级3-2",
              value: "",
            },
            {
              label: "三级3-3",
              value: "",
            },
          ],
        },
      ],
    },
  ],
});
const { treeOptions } = state;
</script>
# Tree 树形控件

## ● 基本使用
<p> tree 组件基本使用示例。</p>
<div class="borderBox">
 <k-tree :options="treeOptions"></k-tree>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
  <div>
    <k-tree :options="treeOptions"></k-tree>
  </div>
  
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  treeOptions: [
    {
      label: "一级",
      value: "",
      children: [
        {
          label: "一级1",
          value: "",
        },
        {
          label: "一级2",
          value: "",
        },
        {
          label: "一级3",
          value: "",
          children: [
            {
              label: "一级3-1",
              value: "",
            },
            {
              label: "一级3-2",
              value: "",
              children: [
                {
                  label: "一级3-2-1",
                  value: "",
                },
                {
                  label: "一级3-2-2",
                  value: "",
                },
                {
                  label: "一级3-2-3",
                  value: "",
                },
              ],
            },
            {
              label: "一级3-3",
              value: "",
            },
          ],
        },
      ],
    },
    {
      label: "二级",
      value: "",
      children: [
        {
          label: "二级1",
          value: "",
        },
        {
          label: "二级2",
          value: "",
        },
        {
          label: "二级3",
          value: "",
          children: [
            {
              label: "二级3-1",
              value: "",
              children: [
                {
                  label: "二级3-1-1",
                  value: "",
                },
                {
                  label: "二级3-1-2",
                  value: "",
                },
                {
                  label: "二级3-1-3",
                  value: "",
                },
              ],
            },
            {
              label: "二级3-2",
              value: "",
            },
            {
              label: "二级3-3",
              value: "",
            },
          ],
        },
      ],
    },
    {
      label: "三级",
      value: "",
      children: [
        {
          label: "三级1",
          value: "",
        },
        {
          label: "三级2",
          value: "",
        },
        {
          label: "三级3",
          value: "",
          children: [
            {
              label: "三级3-1",
              value: "",
            },
          ],
        },
      ],
    },
  ],
});
const { treeOptions } = state;
</script>

  ```
</details>

## ● Attributes 参数

|        参数        |  类型   |                    说明                    | 默认值 |
| :----------------: | :-----: | :----------------------------------------: | :----: |
|      options       |  Array  | 绑定树形组件的数据,具体见下方 options 配置 |   ——   |
|      multiple      | Boolean |                 是否可选择                 | false  |
|  defaultOpenNodes  |  Array  |              默认展开节点key               |   []   |
| defaultSelectNodes |  Array  |              默认选中节点key               |   []   |
|    customClass     | String  |               自定义组件类名               |   ——   |

## ● options 配置项

|   参数   |  类型   |                     说明                     | 默认值 |
| :------: | :-----: | :------------------------------------------: | :----: |
|  label   | String  | 默认文本展示字段，可设置 labelFiled 进行替换 | lable  |
| children |  Array  |                 节点子集数据                 |   ——   |
| disabled | Boolean |                   是否禁用                   |   ——   |
|    *     | String  |     其他自定拓展配置字段，如：id、vlaue      |   ——   |
