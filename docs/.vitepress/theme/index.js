import DefaultTheme from 'vitepress/theme'
import VuetomTheme from 'vitepress-theme-vuetom/docs'
import kButton from '../../../components/button.vue'
import kInput from '../../../components/input.vue'
import kRadio from '../../../components/radio.vue'
import kSelect from '../../../components/select.vue'
import kSpace from '../../../components/space.vue'
import "./custom.scss"
import "../../../src/style.scss"

const components = [kButton,kInput,kRadio,kSelect,kSpace]
export default {
  ...VuetomTheme,
  enhanceApp({ app }) {
        // app.component(kButton.name, kButton)
        components.forEach((item)=>{ 
          app.component(item.name,item);
      }
    )
  }
}