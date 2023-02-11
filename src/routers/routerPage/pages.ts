export default[{
    //首页路径
    path:'/',
    name:"首页",
    component:()=>import ("@/views/PreHome.vue") ,
    children:[{
        //主页路劲
        path:'/home',
        name:"主页",
        component:()=>import ("@/views/Home.vue") ,
        children:[
        // 快速上手
        {
            path:'/home',
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
            name:"Form 表单",
            component:()=>import ("@/views/Form/Form.md") 
        },
        {
            //dialog
            path:'dialog',
            name:"Dialog 对话框",
            component:()=>import ("@/views/Dialog/doc/doc.md") 
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
        },
        {
            //tree
            path:'tree',
            name:"Tree 树形控件",
            component:()=>import ("@/views/Tree/doc/doc.md") 
        },
        {
            //select
            path:'select',
            name:"Select 下拉框",
            component:()=>import ("@/views/Select/doc/doc.md") 
        },
        {
            //optfile
            path:'optfile',
            name:"OptFile 文件选择",
            component:()=>import ("@/views/OptFile/doc/doc.md") 
        }
        ]
    }]

}]