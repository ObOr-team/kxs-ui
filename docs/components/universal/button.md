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
## 基础

可以使用`type`属性指定按钮类型,通过`round`属性指定是否为圆角按钮
<div class="borderBox">
<k-space>
<k-button type="default">Default</k-button>
<k-button type="primary">Primary</k-button>
<k-button type="success">Success</k-button>
<k-button type="info">Info</k-button>
<k-button type="warming">Warming</k-button>
<k-button type="danger">Danger</k-button>
</k-space>
<k-space>
    <k-button type="default" round>Round</k-button>
    <k-button type="primary" round>Primary</k-button>
    <k-button type="success" round>Success</k-button>
    <k-button type="info" round>Info</k-button>
    <k-button type="warming" round>Warming</k-button>
    <k-button type="danger" round>Danger</k-button>
</k-space>
<k-space>
    <k-button type="default" icon="k-icon-shezhi-xianxing"></k-button>
    <k-button type="default" icon="k-icon-address_book_line"></k-button>
    <k-button type="default" icon="k-icon-search_line"></k-button>
    <k-button type="default" icon="k-icon-volume_mute_line"></k-button>
    <k-button type="default" icon="k-icon-star_line"></k-button>
    <k-button type="default" icon="k-icon-shop_line"></k-button>
</k-space>
</div>

<details>
<summary>展示代码</summary>

  ```vue
  <template>
  <k-space>
      <k-button type="default">Default</k-button>
      <k-button type="primary">Primary</k-button>
      <k-button type="success">Success</k-button>
      <k-button type="info">Info</k-button>
      <k-button type="warming">Warming</k-button>
      <k-button type="danger">Danger</k-button>
  </k-space>
  <k-space>
      <k-button type="default" round>Round</k-button>
      <k-button type="primary" round>Primary</k-button>
      <k-button type="success" round>Success</k-button>
      <k-button type="info" round>Info</k-button>
      <k-button type="warming" round>Warming</k-button>
      <k-button type="danger" round>Danger</k-button>
  </k-space>
  <k-space>
      <k-button type="default" icon="k-icon-shezhi-xianxing"></k-button>
      <k-button type="default" icon="k-icon-address_book_line"></k-button>
      <k-button type="default" icon="k-icon-search_line"></k-button>
      <k-button type="default" icon="k-icon-volume_mute_line"></k-button>
      <k-button type="default" icon="k-icon-star_line"></k-button>
      <k-button type="default" icon="k-icon-shop_line"></k-button>
  </k-space>
  </template>
  ```
</details>