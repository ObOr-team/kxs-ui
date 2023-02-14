import kButton from "./Button/index";
import kTextarea from "./Textarea/index";
import kPreview from "./Preview/index";
import kSpace from "./Space/index";
import kRadio from "./Radio/index";
import kTree from "./Tree/index";
import KSelect from "./Select/index";
import kOptfile from "./OptFile/index";
import kInput from "./Input/index";
import kDialog from "./Dialog/index";
import kCarousel from "./Carousel";
import kTable from "./Table/index";
import KPagination from "./pagination/index";
import KSwitch from "./Switch/index";
import KColor from "./Color/index";
import KCheckbox from "./Checkbox/index";
import KLayout from "./Layout/index";
import KOutfile from "./Outfile/index";
import KBacktop from "./Backtop/index";
import KMenu from "./Menu/index.vue";
import KProgress from "./Progress/index";
import KDrawer from "./Drawer/index";
import KDivider from "./Divider/index";
import kDropdown from "./Dropdown/index";





const component =[kButton,kTextarea,kPreview,kSpace,kRadio,kTree,KSelect,kOptfile,kTable,KLayout,
    kInput,kDialog,kDropdown
    ];
const install =(app:any)=>{
    component.forEach((item)=>{
        app.use(item);
    })
    app.use(kCarousel.KCarouselcard)
    app.use(kCarousel.KCarousel)
};
 const TUI = {
    install,
 }
 export {kButton,kTextarea,kPreview,kSpace,kRadio,kTree,KSelect,kOptfile,kInput,kCarousel,kTable,KLayout,
    kDialog,kDropdown};
 export default TUI;
//  ,KPagination,KSwitch,KColor,KCheckbox,KLayout,KOutfile,
// KBacktop,KMenu,KProgress,KDrawer,KDivider 这段引入出问题 稍后修改。