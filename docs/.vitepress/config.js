import useSideBar from "./sidebar/useSideBar"
import ComponentSideBar from "./sidebar/componentSideBar"

export default {
    base: '/',
    title: 'Kx UI', // 所有文档的浏览器标签title
    description: 'Kx UI组件库', // 会渲染成<meta>标签，SEO用
    themeConfig: {
        siteTitle: 'Kx UI',
        logo: '/logo.png',

        nav: [
            { text: '首页', link: '/'},
            { text: '快速上手', link: '/use/', activeMatch: '/use/' },
            { text: '组件', link: '/components/', activeMatch: '/components/' },
            { text: '问题反馈', link: 'https://github.com/5th-Youth-Training-OOT/Kxxx-UI/issues'},
        ],

        sidebar: {
            '/use/': useSideBar,
            '/components/': ComponentSideBar,
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/5th-Youth-Training-OOT/Kxxx-UI' }
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present feiye'
        },
    }
}