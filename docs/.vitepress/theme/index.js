import DefaultTheme from 'vitepress/theme'
import VuetomTheme from 'vitepress-theme-vuetom/docs'
import kButton from '../../../components/button.vue'
import kInput from '../../../components/input.vue'
import kRadio from '../../../components/radio.vue'
import kSelect from '../../../components/select.vue'
import kSpace from '../../../components/space.vue'
import kCarousel from '../../../components/carousel.vue'
import kOptfile from '../../../components/optfile.vue'
import kCarouselcard from '../../../components/carouselcard.vue'
import kTextarea from '../../../components/textarea.vue'
import kIcon from '../../../components/icon/icon.vue'
import kDialog from '../../../components/dialog.vue'
import kDropdown from '../../../components/dropdown.vue'
import kTree from '../../../components/tree.vue'
import kTable from '../../../components/table.vue'
import kMenu from '../../../components/menu.vue'
import kNav from '../../../components/nav.vue'
import "./custom.scss"
// import "../../../src/style.scss"
import "../../../components/scss/style.scss"

const components = [kButton,kInput,kRadio,kSelect,kSpace,kCarousel,kCarouselcard
  ,kOptfile,kTextarea,kIcon,kDialog,kDropdown,kTree,kTable,kMenu,kNav]
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