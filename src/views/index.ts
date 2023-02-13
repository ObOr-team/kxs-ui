import kButton from "./Button/index";
import kTextarea from "./Textarea/index";
import kPreview from "./Preview/index";
import kSpace from "./Space/index";
import kRadio from "./Radio/index";
import kTree from "./Tree/index";
import KSelect from "./Select/index";
import kOptfile from "./Optfile/index";
import kInput from "./Optfile/index";
import kDialog from "./Dialog/index";
import kCarousel from "./Carousel/index1";
import kCarouselcard from "./Carousel/index2";
import kTable from "./Table/index";
import KPagination from "./pagination/index";

import KSwitch from "./Switch/index.vue";
import KColor from "./Color/index.vue";
import KCheckbox from "./Checkbox/index.vue";
import KLayout from "./Layout/index.vue";
import KOutfile from "./Optfile/index.vue";
import KBacktop from "./Backtop/index.vue";
import KMenu from "./Menu/index.vue";
import KProgress from "./Progress/index.vue";
import KDrawer from "./Drawer/index.vue";
import KDivider from "./Divider/index.vue";





const component =[kButton,kTextarea,kPreview,kSpace,kRadio,kTree,KSelect,
    kOptfile,kInput,kCarousel,kCarouselcard,kDialog,kTable,KPagination,KSwitch,KColor,KCheckbox,KLayout,KOutfile,KBacktop,KMenu,KProgress,KDrawer,KDivider];
const install =(app:any)=>{
    component.forEach((item)=>{
        app.use(item);
    })
};
 const TUI = {
    install,
 }
 export {kButton,kTextarea,kPreview,kSpace,kRadio,kTree,KSelect,kOptfile,kInput,kCarousel,
    kDialog,kTable,KPagination,KSwitch,KColor,KCheckbox,KLayout,KOutfile,KBacktop,KMenu,KProgress,KDrawer,KDivider};
 export default TUI;