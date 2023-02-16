# Space 间距

## ● 基本用法 
<p>相邻组件间的水平间距。</p>
<div class="borderBox">
        <k-space>
            <k-button type="primary" plain>Button</k-button>
            <k-button type="info" round>Button</k-button>
            <k-button icon="k-icon-jiazai"></k-button>
            <k-button icon="k-icon-address_book_line"></k-button>
            <k-radio></k-radio>
        </k-space>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-space>
            <k-button type="primary" plain>Button</k-button>
            <k-button type="info" round>Button</k-button>
            <k-button icon="k-icon-jiazai"></k-button>
            <k-button icon="k-icon-address_book_line"></k-button>
            <k-radio></k-radio>
        </k-space>
</template>
  ```
</details>

## ● 垂直间距 
<p>通过添加<code>column</code>属性设置相邻组件间的按垂直方向排列间距。</p>
<div class="borderBox">
        <k-space column>
            <k-button type="info" plain>Button</k-button>
            <k-button icon="k-icon-trash_line"></k-button>
            <k-button icon="k-icon-unlink_line" loading></k-button>
        </k-space>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-space column>
            <k-button type="info" plain>Button</k-button>
            <k-button icon="k-icon-trash_line"></k-button>
            <k-button icon="k-icon-unlink_line" loading></k-button>
        </k-space>
</template>
  ```
</details>

## ● 间距大小 
<p>通过设置<code>size</code>的值来规定间距的大小。</p>
<div class="borderBox">
        <k-space>
            <k-button type="info" plain>Button</k-button>
            <k-button type="info" round>Button</k-button>
            <k-button icon="k-icon-shezhi-xianxing1"></k-button>
            <k-button type="info"  icon="k-icon-shop_manage_line" loading></k-button>
        </k-space>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-space>
            <k-button type="info" plain>Button</k-button>
            <k-button type="info" round>Button</k-button>
            <k-button icon="k-icon-shezhi-xianxing1"></k-button>
            <k-button type="info"  icon="k-icon-shop_manage_line" loading></k-button>
        </k-space>
</template>
  ```
</details>

## ● 自动换行 
<p>通过添加<code>wrap</code>属性来设置自动换行。</p>
<div class="borderBox">
       <k-space wrap>
            <k-button>Button</k-button>
            <k-button>Button</k-button>
            <k-button>Button</k-button>
            <k-button>Button</k-button>
            <k-button>Button</k-button>
            <k-button>Button</k-button>
            <k-button>Button</k-button>
            <k-button>Button</k-button>
            <k-button>Button</k-button>
        </k-space>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
          <k-space wrap>
            <k-button>Button</k-button>
            <k-button>Button</k-button>
            <k-button>Button</k-button>
            <k-button>Button</k-button>
            <k-button>Button</k-button>
            <k-button>Button</k-button>
            <k-button>Button</k-button>
            <k-button>Button</k-button>
            <k-button>Button</k-button>
        </k-space>
</template>

  ```
</details>

## ● Attributes
|  参数  |                             说明                             |  类型   |
| :--------: | :--------------------------------------------------: | :---------: |
| inline |                 是否为水平或者垂直，默认横向                 | Boolean |
|  size  | 自定义间距大小，接收两个参数，<br />第一个为垂直间距，第二个为水平间距，<br />当inline为false是，只需要一个参数设置垂直间距即可 |  Array  |