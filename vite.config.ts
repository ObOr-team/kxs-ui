import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import path from 'path' // 需安装此模块
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include:[/\.md$/,/\.vue$/],
    }),
    Markdown()
  ],
  build: {
    outDir:"kxs-ui",
    lib: {
      entry: path.resolve(__dirname, './components/index.ts'),
      name: 'kxs-ui',
      fileName: (format) => `kxs-ui.${format}.ts`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }

  // resolve: {
  //   alias: {  // 这里就是需要配置resolve里的别名
  //     "@": path.join(__dirname, "./src"), // path记得引入
  //     // 'vue': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
  //   },
  // }
})
// module.exports = {
//   //此部分configureWebpack被我改为了
//   configureVite: {
//     module: {
//       rules: [
//         {
//           test: /\.md$/,
//           use: ["text-loader"]
//         }
//       ]
//     }
//   }
// };
