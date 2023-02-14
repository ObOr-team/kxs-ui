import DefaultTheme from 'vitepress/theme'
import kButton from '../../../src/views/Button/index.vue'
import "../../../src/style.scss"
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('kButton', kButton)
  }
}