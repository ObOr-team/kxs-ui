import DefaultTheme from 'vitepress/theme'
import "../../../src/style.scss"
import "./custom.scss"
import kButton from '../../../components/button.vue'
import kInput from '../../../components/input.vue'
import kRadio from '../../../components/radio.vue'
import kSelect from '../../../components/select.vue'

const components = [kButton,kInput,kRadio,kSelect]

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // app.component(kButton.name, kButton)
    components.forEach((item)=>{ 
          app.component(item.name,item);
      }
    )
  }
}


