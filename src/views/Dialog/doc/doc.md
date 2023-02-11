<script lang="ts" setup>
    // import dia from './Dialog.vue'
    import typ from './DialogType.vue'
    import size from './DialogSize.vue'
    import themecolor from './DialogThemeColor.vue'
    import location from './DialogLocation.vue'
    import btn from './DialogButton.vue'
    import click from './DialogClick.vue'
    import loading from './DialogLoading.vue'
</script>

## Dialog 对话框

### ● 类型
<p>通过<code>type</code>属性来设置对话框的类型</P>
<typ/>
<k-preview  compname="Dialog" demoname="DialogType"/>

### ● 自定义大小
<p>通过<code>width</code>和<code>height</code>属性来设置对话框的整体宽度和高度</P>
<size/>
<k-preview  compname="Dialog" demoname="DialogSize"/>

### ● 自定义主题颜色
<p>通过<code>themeColor</code>属性来设置对话框的主题颜色</P>
<themecolor/>
<k-preview  compname="Dialog" demoname="DialogThemeColor"/>

### ● 位置
<p>通过<code>location</code>属性来设置对话框的位置</P>
<location/>
<k-preview  compname="Dialog" demoname="DialogLocation"/>

### ● 按钮
<p>通过<code>closable</code>属性来设置是否展示对话框的关闭按钮</P>
<p>通过<code>footerBtn</code>属性来设置对话框的底部按钮的展示情况</P>
<btn/>
<k-preview compname="Dialog" demoname="DialogButton"/>


### ● 点击事件
<p>通过<code>confirmClick</code>和<code>cancelClick</code>属性来注册对话框的确认按钮和取消按钮的点击事件</P>
<click/>
<k-preview  compname="Dialog" demoname="DialogClick"/>

### ● 异步确认
<p>通过<code>confirmLoading</code>属性来设置异步确认按钮</P>
<loading/>
<k-preview  compname="Dialog" demoname="DialogLoading"/>

### Dialog Attributes
|      参数      |                        说明                        |   类型   | 默认值  |
| :----------------: | :------------------------------------------------: | :------: | :-----: |
|      type      |     提示框类型：info、confirm、warning、error      |  string  | "info"  |
|   themeColor   | 主题颜色，包括头部背景颜色、图标颜色、确认按钮颜色 |  string  |    -    |
|   titleColor   |                    标题文字颜色                    |  string  | "white" |
|  contentColor  |                 提示框内容文字颜色                 |  string  | "black" |
|   titleText    |                      标题文本                      |  string  |    -    |
|  contentText   |                   提示框内容文本                   |  string  |    -    |
| confirmBtnText |                    确认按钮文本                    |  string  | "确认"  |
| cancelBtnText  |                    取消按钮文本                    |  string  | "取消"  |
|    closable    |              是否显示右上角的关闭按钮              | boolean  |  true   |
|   footerBtn    |     底部按钮类型：both、confirm、cancel、null      |  string  | "both"  |
|     width      |                   对话框整体宽度                   |  string  | "500px" |
|     height     |                   对话框整体高度                   |  string  | "200px" |
|    location    |              提示框位置：top、center               |  string  |  "top"  |
|  confirmClick  |                  确定按钮点击事件                  | function |    -    |
|  cancelClick   |                  取消按钮点击事件                  | function |    -    |
| confirmLoading |                    异步确认按钮                    | boolean  |  false  |