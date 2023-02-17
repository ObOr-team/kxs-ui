# Nav 导航栏
## ● 横向 
<div class="borderBox">
       <k-menu>
            <k-nav >横向导航栏1</k-nav>
            <k-nav >横向导航栏2</k-nav>
            <k-nav >横向导航栏3</k-nav>
            <k-nav >横向导航栏4</k-nav>
            <k-nav >横向导航栏5</k-nav>
      </k-menu>
</div>

## ● 竖向 
<div class="borderBox">
        <k-menu Perpendicular>
            <k-nav>竖向导航栏1</k-nav>
            <k-nav>竖向导航栏2</k-nav>
            <k-nav>竖向导航栏3</k-nav>
            <k-nav>竖向导航栏4</k-nav>
            <k-nav>竖向导航栏5</k-nav>       
        </k-menu>
</div>

## ● 禁用选项 
<div class="borderBox">
        <k-menu>
            <k-nav disabled>竖向导航栏1</k-nav>
            <k-nav>竖向导航栏2</k-nav>
            <k-nav disabled>竖向导航栏3</k-nav>
            <k-nav>竖向导航栏4</k-nav>
            <k-nav disabled>竖向导航栏5</k-nav>       
        </k-menu>
</div>

## ● 带图标 
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

## ● Attributes 参数
|      参数     | 说明                                   |   类型   | 可选值                                                    | 默认值 |
| :----------------: | :---------------------------------:   | :------: | :------------------------------------------:            | :-------: |
| Perpendicular      | 是否为竖向导航栏                    |  boolean  | —| false|        |
|  disabled        | 是否禁用                          |  boolean  | —| false|
|   behindIcon     | 图标类名(在后)                             |  string   | — | 	—   |
|  frontIcon         | 图标类名(在前)                               |  string   | — | 	—   |
