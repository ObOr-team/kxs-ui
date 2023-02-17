# Nav 导航栏
## ● 横向 
<p>导航栏的基础用例。</P>
<div class="borderBox">
       <k-menu>
            <k-nav>横向导航栏1</k-nav>
            <k-nav>横向导航栏2</k-nav>
            <k-nav>横向导航栏3</k-nav>
            <k-nav>横向导航栏4</k-nav>
            <k-nav>横向导航栏5</k-nav>
      </k-menu>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-menu>
            <k-nav>横向导航栏1</k-nav>
            <k-nav>横向导航栏2</k-nav>
            <k-nav>横向导航栏3</k-nav>
            <k-nav>横向导航栏4</k-nav>
            <k-nav>横向导航栏5</k-nav>
      </k-menu>
</template>

  ```
</details>

## ● 竖向 
<p>通过添加<code>Perpendicular</code>属性来设置导航栏竖向</P>
<div class="borderBox">
        <k-menu Perpendicular>
            <k-nav >竖向导航栏1</k-nav>
            <k-nav >竖向导航栏2</k-nav>
            <k-nav >竖向导航栏3</k-nav>
            <k-nav >竖向导航栏4</k-nav>
            <k-nav >竖向导航栏5</k-nav>       
        </k-menu>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-menu Perpendicular>
            <k-nav >竖向导航栏1</k-nav>
            <k-nav >竖向导航栏2</k-nav>
            <k-nav >竖向导航栏3</k-nav>
            <k-nav >竖向导航栏4</k-nav>
            <k-nav >竖向导航栏5</k-nav>       
        </k-menu>
</template>

  ```
</details>

## ● 禁用选项 
<p>通过给选项添加<code>disabled</code>属性来设置导航项的禁用状态</P>
<div class="borderBox">
        <k-menu>
            <k-nav disabled>竖向导航栏1</k-nav>
            <k-nav >竖向导航栏2</k-nav>
            <k-nav disabled >竖向导航栏3</k-nav>
            <k-nav >竖向导航栏4</k-nav>
            <k-nav disabled>竖向导航栏5</k-nav>       
        </k-menu>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-menu>
            <k-nav disabled>竖向导航栏1</k-nav>
            <k-nav>竖向导航栏2</k-nav>
            <k-nav disabled>竖向导航栏3</k-nav>
            <k-nav>竖向导航栏4</k-nav>
            <k-nav disabled>竖向导航栏5</k-nav>       
        </k-menu>
</template>

  ```
</details>

## ● 带图标 
<p>默认通过<code>icon</code>给导航项添加前置图标，可通过<code>postIcon</code>改为添加后置图标</P>
<div class="borderBox">
        <k-menu>
            <k-nav icon="k-icon-star_line">导航栏1</k-nav>
            <k-nav icon="k-icon-star_line">导航栏2</k-nav>
            <k-nav icon="k-icon-star_line">导航栏3</k-nav>
            <k-nav icon="k-icon-star_line">导航栏4</k-nav>
            <k-nav icon="k-icon-star_line">导航栏5</k-nav>
        </k-menu>
        <k-menu>
            <k-nav postIcon="k-icon-star_line">导航栏1</k-nav>  
            <k-nav postIcon="k-icon-star_line">导航栏2</k-nav> 
            <k-nav postIcon="k-icon-star_line">导航栏3</k-nav>  
            <k-nav postIcon="k-icon-star_line">导航栏4</k-nav>  
            <k-nav postIcon="k-icon-star_line">导航栏5</k-nav>      
        </k-menu>
</div>
<details>
<summary class="pre-code-tag">展示代码</summary>

  ```vue
<template>
        <k-menu>
            <k-nav icon="k-icon-star_line">导航栏1</k-nav>
            <k-nav icon="k-icon-star_line">导航栏2</k-nav>
            <k-nav icon="k-icon-star_line">导航栏3</k-nav>
            <k-nav icon="k-icon-star_line">导航栏4</k-nav>
            <k-nav icon="k-icon-star_line">导航栏5</k-nav>
        </k-menu>
        <k-menu>
            <k-nav postIcon="k-icon-star_line">导航栏1</k-nav>  
            <k-nav postIcon="k-icon-star_line">导航栏2</k-nav> 
            <k-nav postIcon="k-icon-star_line">导航栏3</k-nav>  
            <k-nav postIcon="k-icon-star_line">导航栏4</k-nav>  
            <k-nav postIcon="k-icon-star_line">导航栏5</k-nav>      
        </k-menu>
</template>

  ```
</details>

## ● Attributes 参数
|      参数     | 说明                                   |   类型   | 可选值                                                    | 默认值 |
| :----------------: | :---------------------------------:   | :------: | :------------------------------------------:            | :-------: |
| Perpendicular      | 是否为竖向导航栏                    |  boolean  | —| false|        |
|  disabled        | 是否禁用                          |  boolean  | —| false|
|   postIcon     | 图标类名(在后)                             |  string   | — | 	—   |
|  icon         | 图标类名(在前)                               |  string   | — | 	—   |
