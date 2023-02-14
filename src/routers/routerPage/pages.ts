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
            path:'install',
            name:"安装使用",
            component:()=>import ("@/views/preface/install.md") 
        },
        {
            path:'log',
            name:"更新日志",
            component:()=>import ("@/views/preface/log.md") 
        },
        {
            path:'/home',
            name:"参与贡献",
            component:()=>import ("@/views/preface/contribute.md") 
        },
        // 组件
        {
            //button
            path:'button',
            name:"Button 按钮",
            component:()=>import ("@/views/Button/doc/doc.md") 
        },
        {
            //icon
            path:'icon',
            name:"Icon 图标",
            component:()=>import ("@/views/Icon/doc/doc.md") 
        },
        {
            //dropdown
            path:'dropdown',
            name:"Dropdown 下拉菜单",
            component:()=>import ("@/views/Dropdown/doc/doc.md") 
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
            //carousel
             path:'carousel',
             name:"Carousel 轮播图",
             component:()=>import ("@/views/Carousel/doc/doc.md") 
         },
        {
            //radio
            path:'radio',
            name:"Radio 单选",
            component:()=>import ("@/views/Radio/doc/doc.md") 
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
        },
        {
            //form
            path:'form',
            name:"Form 表单",
            component:()=>import ("@/views/Form/doc/doc.md") 
        },
        {
            //table
            path:'table',
            name:"Table 表格",
            component:()=>import ("@/views/Table/doc/doc.md") 
        },
        {
            //tree
            path:'tree',
            name:"Tree 树形控件",
            component:()=>import ("@/views/Tree/doc/doc.md") 
        },
        {
             //input
             path:'input',
             name:"Input 输入框",
             component:()=>import ("@/views/Input/doc/doc.md") 
        },

        {
            // switch
            path:'switch',
            name:'Switch 开关',
            component:()=>import("@/views/Switch/doc/doc.md")
        },
        {
            // color
            path:'color',
            name:'Color 颜色',
            component:()=>import("@/views/Color/doc/doc.md")
        },
        {
            // checkbox
            path:'checkbox',
            name:'Checkbox 多选',
            component:()=>import("@/views/Checkbox/doc/doc.md")
        },
        {
            // layout
            path:'layout',
            name:'Layout 布局',
            component:()=>import("@/views/Layout/doc/doc.md")
        },
        {
            // outfile
            path:'outfile',
            name:'Outfile 上传文件',
            component:()=>import("@/views/Outfile/doc/doc.md")
        },
        {
            // backtop
            path:'backtop',
            name:'Backtop 回到顶部',
            component:()=>import("@/views/Backtop/doc/doc.md")
        },
        {
            // menu
            path:'menu',
            name:'Menu 菜单',
            component:()=>import("@/views/Menu/doc/doc.md")
        },
        {
            // progress
            path:'progress',
            name:'Progress 进度条',
            component:()=>import("@/views/Progress/doc/doc.md")
        },
        {
            // drawer
            path:'drawer',
            name:'Drawer 抽屉',
            component:()=>import("@/views/Drawer/doc/doc.md")
        },
        {
            // divider
            path:'divider',
            name:'Divider 分割线',
            component:()=>import("@/views/Divider/doc/doc.md")
        }
        ]
    }]

}]