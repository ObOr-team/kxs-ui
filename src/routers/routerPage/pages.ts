export default[{
    //首页路径
    path:'/',
    component:()=>import ("@/views/Home.vue") ,
    children:[
        // 快速上手
        {
            path:'/',
            name:"参与贡献",
            component:()=>import ("@/views/preface/contribute.md") 
        },
        {
            path:'log',
            name:"更新日志",
            component:()=>import ("@/views/preface/log.md") 
        },
        {
            path:'install',
            name:"安装使用",
            component:()=>import ("@/views/preface/install.md") 
        },
        // 组件
        {
            //button
            path:'button',
            name:"Button 按钮",
            component:()=>import ("@/views/Button//doc/doc.md") 
        },
        {
            //form
            path:'form',
            name:"From 表单",
            component:()=>import ("@/views/Form/Form.md") 
        },
        {
            //dialog
            path:'dialog',
            name:"Dialog 对话框",
            component:()=>import ("@/views/Dialog/Dialog.md") 
        },
        {
            //textarea
            path:'textarea',
            name:"Textarea 文本域",
            component:()=>import ("@/views/Textarea/doc/doc.md") 
        }
        ,
        {
            //space
            path:'space',
            name:"Space 间距",
            component:()=>import ("@/views/Space/doc/doc.md") 
        },
        {
            //radio
            path:'radio',
            name:"Radio 单选",
            component:()=>import ("@/views/Radio/doc/doc.md") 
        }
    ]
}]