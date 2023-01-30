<script lang="ts" setup>
    import dia from './Dialog.vue'
</script>

<dia/>  

## API
|      **参数**      | 说明                                               |   类型   | 默认值  | 举例                                           |
| :----------------: | -------------------------------------------------- | :------: | :-----: | ---------------------------------------------- |
|      **type**      | 提示框类型：info、confirm、warning、error          |  string  | "info"  | `<k-dialog type = "error"></k-dialog>`         |
|   **themeColor**   | 主题颜色，包括头部背景颜色、图标颜色、确认按钮颜色 |  string  |    -    | `<k-dialog themeColor="#1ABC9C"></k-dialog>`   |
|   **titleColor**   | 标题文字颜色                                       |  string  | "white" | `<k-dialog titleColor="#1ABC9C"></k-dialog>`   |
|  **contentColor**  | 提示框内容文字颜色                                 |  string  | "black" | `<k-dialog contentColor="#1ABC9C"></k-dialog>` |
|   **titleText**    | 标题文本                                           |  string  |    -    | `<k-dialog titleText="标题"></k-dialog>`       |
|  **contentText**   | 提示框内容文本                                     |  string  |    -    | `<k-dialog contentText="内容"></k-dialog>`     |
| **confirmBtnText** | 确认按钮文本                                       |  string  | "确认"  | `<k-dialog confirmBtnText="YES"></k-dialog>`   |
| **cancelBtnText**  | 取消按钮文本                                       |  string  | "取消"  | `<k-dialog cancelBtnText="NO"></k-dialog>`     |
|    **closable**    | 是否显示右上角的关闭按钮                           | boolean  |  true   | `<k-dialog :closable=false></k-dialog>`        |
|   **footerBtn**    | 底部按钮类型：both、confirm、cancel、null          |  string  | "both"  | `<k-dialog footerBtn="confirm"></k-dialog>`    |
|     **width**      | 对话框整体宽度                                     |  string  | "500px" | `<k-dialog width="600px"></k-dialog>`          |
|     **height**     | 对话框整体高度                                     |  string  | "200px" | `<k-dialog height="170px"></k-dialog>`         |
|    **location**    | 提示框位置：top、center                            |  string  |  "top"  | `<k-dialog location="center"></k-dialog>`      |
|  **confirmClick**  | 确定按钮点击事件                                   | function |    -    | `<k-dialog :confirmClick=函数></k-dialog>`   |
|  **cancelClick**   | 取消按钮点击事件                                   | function |    -    | `<k-dialog :cancelClick=函数></k-dialog>`    |