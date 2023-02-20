import DefaultTheme from 'vitepress/theme'
import VuetomTheme from 'vitepress-theme-vuetom/docs'
import kButton from '../../../components/button/button.vue'
import kInput from '../../../components/input/input.vue'
import kRadio from '../../../components/radio/radio.vue'
import kSelect from '../../../components/select/select.vue'
import kSpace from '../../../components/space/space.vue'
import kCarousel from '../../../components/carousel/carousel.vue'
import kOptfile from '../../../components/optfile/optfile.vue'
import kCarouselcard from '../../../components/carousel/carouselcard.vue'
import kTextarea from '../../../components/textarea/textarea.vue'
import kIcon from '../../../components/icon/icon.vue'
import kDialog from '../../../components/dialog/dialog.vue'
import kDropdown from '../../../components/dropdown/dropdown.vue'
import kTree from '../../../components/tree/tree.vue'
import kTable from '../../../components/table/table.vue'
import kMenu from '../../../components/navigation/menu.vue'
import kNav from '../../../components/navigation/nav.vue'
import "./custom.scss"
// import "../../../src/style.scss"
import "../../../components/style/style.scss"

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