--- 
title: Button 按钮
head:
  - - meta
    - name: description
      content: kx-ui Button 按钮
  - - meta
    - name: keywords
      content: Button 按钮
---

# {{ $frontmatter.title }}
## ● 基础

可以使用`type`属性指定按钮类型,通过`round`属性指定是否为圆角按钮
<div class="borderBox">
<div class="k-row">
<k-button type="default">Default</k-button>
<k-button type="primary">Primary</k-button>
<k-button type="success">Success</k-button>
<k-button type="info">Info</k-button>
<k-button type="warming">Warming</k-button>
<k-button type="danger">Danger</k-button>
</div>
<div class="k-row">
    <k-button type="default" round>Round</k-button>
    <k-button type="primary" round>Primary</k-button>
    <k-button type="success" round>Success</k-button>
    <k-button type="info" round>Info</k-button>
    <k-button type="warming" round>Warming</k-button>
    <k-button type="danger" round>Danger</k-button>
</div>
<div class="k-row">
<k-button type="default" icon="k-icon-shezhi-xianxing"></k-button>
<k-button type="default" icon="k-icon-address_book_line"></k-button>
<k-button type="default" icon="k-icon-search_line"></k-button>
<k-button type="default" icon="k-icon-volume_mute_line"></k-button>
<k-button type="default" icon="k-icon-star_line"></k-button>
<k-button type="default" icon="k-icon-shop_line"></k-button>
</div>
</div>

<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
  <template>
      <k-button type="default">Default</k-button>
      <k-button type="primary">Primary</k-button>
      <k-button type="success">Success</k-button>
      <k-button type="info">Info</k-button>
      <k-button type="warming">Warming</k-button>
      <k-button type="danger">Danger</k-button>

      <k-button type="default" round>Round</k-button>
      <k-button type="primary" round>Primary</k-button>
      <k-button type="success" round>Success</k-button>
      <k-button type="info" round>Info</k-button>
      <k-button type="warming" round>Warming</k-button>
      <k-button type="danger" round>Danger</k-button>
  
      <k-button type="default" icon="k-icon-shezhi-xianxing"></k-button>
      <k-button type="default" icon="k-icon-address_book_line"></k-button>
      <k-button type="default" icon="k-icon-search_line"></k-button>
      <k-button type="default" icon="k-icon-volume_mute_line"></k-button>
      <k-button type="default" icon="k-icon-star_line"></k-button>
      <k-button type="default" icon="k-icon-shop_line"></k-button>
  </template>
  ```
</details>


## ● 反色

使用`plain`属性指定是否为朴素按钮

<div class="borderBox">
        <div class="k-row">
            <k-button type="default" round plain>Round</k-button>
            <k-button type="primary" round plain>Primary</k-button>
            <k-button type="success" round plain>Success</k-button>
            <k-button type="info" round plain>Info</k-button>
            <k-button type="warming" round plain>Warming</k-button>
            <k-button type="danger" round plain>Danger</k-button>
      </div>
</div>

<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
            <k-button type="default" round plain>Round</k-button>
            <k-button type="primary" round plain>Primary</k-button>
            <k-button type="success" round plain>Success</k-button>
            <k-button type="info" round plain>Info</k-button>
            <k-button type="warming" round plain>Warming</k-button>
            <k-button type="danger" round plain>Danger</k-button>
</template>

  ```
</details>

## ● 禁用

使用`disabled`属性指定按钮是否被禁用

<div class="borderBox">
         <div class="k-row">
            <k-button type="default" disabled>Disabled</k-button>
            <k-button type="primary" disabled>Primary</k-button>
            <k-button type="success" disabled>Success</k-button>
            <k-button type="info" disabled>Info</k-button>
            <k-button type="warming" disabled>Warming</k-button>
            <k-button type="danger" disabled>Danger</k-button>
        </div>
</div>

<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
            <k-button type="default" disabled>Disabled</k-button>
            <k-button type="primary" disabled>Primary</k-button>
            <k-button type="success" disabled>Success</k-button>
            <k-button type="info" disabled>Info</k-button>
            <k-button type="warming" disabled>Warming</k-button>
            <k-button type="danger" disabled>Danger</k-button>
</template>

  ```
</details>

## ● 大小

使用`size`属性指定按钮的大小

<div class="borderBox">
          <div class="k-row">
            <k-button size="small">Size</k-button>
            <k-button type="warming" >Size</k-button>
            <k-button type="danger" size="large">Size</k-button>
         </div>
</div>

<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
            <k-button size="small">Size</k-button>
            <k-button type="warming" >Size</k-button>
            <k-button type="danger" size="large">Size</k-button>
</template>

  ```
</details>

## ● 块级

使用`block`属性指定是否为块级按钮

<div class="borderBox">
            <k-button type="primary" block>Block</k-button>
</div>

<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
      <k-button type="default" block>Block</k-button>
</template>

  ```
</details>

## ● 图标

<p>默认使用<code>icon</code>属性指定无按钮文字的图标</p>
<p>可以使用<code>postIcon</code>属性指定按钮文字后面的图标</p>
<div class="borderBox">
     <div class="k-row">
        <k-button type="default" icon="k-icon-star_line">Icon</k-button>
        <k-button type="default" icon="k-icon-tv_line">Icon</k-button>
        <k-button type="default" icon="k-icon-translate_line">Icon</k-button>
        <k-button type="default" icon="k-icon-add_line">Icon</k-button>
        <k-button type="default" icon="k-icon-book_open_line">Icon</k-button>
        <k-button type="default" icon="k-icon-xiazai">Icon</k-button>
    </div>
     <div class="k-row">
        <k-button type="default" postIcon="k-icon-star_line">PostIcon</k-button>
        <k-button type="default" postIcon="k-icon-tv_line">PostIcon</k-button>
        <k-button type="default" postIcon="k-icon-translate_line">PostIcon</k-button>
        <k-button type="default" postIcon="k-icon-add_line">PostIcon</k-button>
    </div>
</div>


<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
      <template>
        <k-button type="default" icon="k-icon-star_line">Icon</k-button>
        <k-button type="default" icon="k-icon-tv_line">Icon</k-button>
        <k-button type="default" icon="k-icon-translate_line">Icon</k-button>
        <k-button type="default" icon="k-icon-add_line">Icon</k-button>
        <k-button type="default" icon="k-icon-book_open_line">Icon</k-button>
        <k-button type="default" icon="k-icon-xiazai">Icon</k-button>

        <k-button type="default" postIcon="k-icon-star_line">PostIcon</k-button>
        <k-button type="default" postIcon="k-icon-tv_line">PostIcon</k-button>
        <k-button type="default" postIcon="k-icon-translate_line">PostIcon</k-button>
        <k-button type="default" postIcon="k-icon-add_line">PostIcon</k-button>
        <k-button type="default" postIcon="k-icon-book_open_line">PostIcon</k-button>
        <k-button type="default" postIcon="k-icon-xiazai">PostIcon</k-button>
</template>

  ```
</details>

## ● 加载

<p>使用<code>loading</code>指定按钮的加载状态</p>
<div class="borderBox">
     <div class="k-row">
        <k-button type="default" icon="k-icon-jiazai" loading></k-button>
        <k-button type="primary" icon="k-icon-jiazai" loading></k-button>
        <k-button type="success" icon="k-icon-jiazai" loading></k-button>
        <k-button type="info"  icon="k-icon-jiazai" loading></k-button>
        <k-button type="warming"  icon="k-icon-jiazai" loading></k-button>
        <k-button type="danger" icon="k-icon-jiazai" loading></k-button>
    </div>
</div>


<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-button type="default" icon="k-icon-jiazai" loading></k-button>
        <k-button type="primary" icon="k-icon-jiazai" loading></k-button>
        <k-button type="success" icon="k-icon-jiazai" loading></k-button>
        <k-button type="info"  icon="k-icon-jiazai" loading></k-button>
        <k-button type="warming"  icon="k-icon-jiazai" loading></k-button>
        <k-button type="danger" icon="k-icon-jiazai" loading></k-button>
</template>

  ```
</details>


## Attributes

|      参数      | 说明                                   |   类型   | 可选值                                                    | 默认值 |
| :----------------: | :---------------------------------:   | :------: | :------------------------------------------:            | :-------: |
|      size      | 尺寸                                  |  string   | small / default / large  | default           |
|   type         | 类型                                  |  string    |default/primary / success / warning / danger / info     | default   |
|   plain        | 是否朴素按钮                           |  boolean  | —| false  |
|  round         | 是否圆角按钮                           |  boolean  | —| false|
|   disabled     | 是否禁用状态                           |  boolean  |   —    | false 
|  icon          | 图标类名                               |  string   | — | 	—   |
|  loading       | 是否加载                               |  boolean   | — | false |