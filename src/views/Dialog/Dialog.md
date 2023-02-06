<script lang="ts" setup>
    // import dia from './Dialog.vue'
    import typ from './DialogType.vue'
    import size from './DialogSize.vue'
    import themecolor from './DialogThemeColor.vue'
    import location from './DialogLocation.vue'
    import btn from './DialogButton.vue'
    import click from './DialogClick.vue'
</script>

### ● 类型
<typ/>

### ● 自定义大小
<size/>

### ● 自定义主题颜色
<themecolor/>

### ● 位置
<location/>

### ● 按钮
<btn/>

### ● 点击事件
<click/>

<style>
    table{
        width: 100%; 
    }
    th {
        height: 50px;
    }
    td {
        height: 35px;
    }
    table, th, td {
        border: 1px solid var(--default-border-color);
        border-collapse: collapse;
    }
</style>

## Diolog Attributes
|      **参数**      | 说明                                               |   类型   | 默认值  |
| :----------------: | :--------------------------------------------------: | :------: | :-----: |
|      **type**      | 提示框类型：info、confirm、warning、error          |  string  | "info"  |
|   **themeColor**   | 主题颜色，包括头部背景颜色、图标颜色、确认按钮颜色 |  string  |    -    |
|   **titleColor**   | 标题文字颜色                                       |  string  | "white" |
|  **contentColor**  | 提示框内容文字颜色                                 |  string  | "black" |
|   **titleText**    | 标题文本                                           |  string  |    -    |
|  **contentText**   | 提示框内容文本                                     |  string  |    -    |
| **confirmBtnText** | 确认按钮文本                                       |  string  | "确认"  |
| **cancelBtnText**  | 取消按钮文本                                       |  string  | "取消"  |
|    **closable**    | 是否显示右上角的关闭按钮                           | boolean  |  true   |
|   **footerBtn**    | 底部按钮类型：both、confirm、cancel、null          |  string  | "both"  |
|     **width**      | 对话框整体宽度                                     |  string  | "500px" |
|     **height**     | 对话框整体高度                                     |  string  | "200px" |
|    **location**    | 提示框位置：top、center                            |  string  |  "top"  |
|  **confirmClick**  | 确定按钮点击事件                                   | function |    -    |
|  **cancelClick**   | 取消按钮点击事件                                   | function |    -    |