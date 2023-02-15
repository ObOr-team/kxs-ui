---
title: 自定义语法
head:
  - - meta
    - name: description
      content: 自定义 Markdown 语法
  - - meta
    - name: keywords
      content: markdown custom 
---

<k-button type="default">Default</k-button>
<k-button type="primary">Primary</k-button>
<k-button type="success">Success</k-button>
<k-button type="info">Info</k-button>
<k-button type="warming">Warming</k-button>
<k-button type="danger">Danger</k-button>
# {{ $frontmatter.title }}

## 信息框

```md
::: tip 使用TIPS代替
提示信息
:::

::: info
信息消息
:::

::: warning
警告消息
:::

::: danger
危险消息
:::

::: details Details
详细信息
:::
```

效果如下：

::: tip 使用TIPS代替
提示内容
:::

::: info
INFO消息
:::

::: warning
WARNING消息 <a>a链接</a>
:::

::: danger
DANGER消息 [md链接](./example.md)
:::

::: details Details
详细信息
:::
