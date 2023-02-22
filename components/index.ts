import kButton from "./Button/index";
import kTextarea from "./Textarea/index";
import kSpace from "./Space/index";
import kRadio from "./Radio/index";
import kTree from "./Tree/index";
import KSelect from "./Select/index";
import kOptfile from "./OptFile/index";
import kInput from "./Input/index";
import kDialog from "./Dialog/index";
import kCarousel from "./Carousel";
import kTable from "./Table/index";
import kDropdown from "./Dropdown/index";
import './style/style.scss'





const component =[kButton,kTextarea,kSpace,kRadio,kTree,KSelect,kOptfile,kTable,
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
 export {kButton,kTextarea,kSpace,kRadio,kTree,KSelect,kOptfile,kInput,kCarousel,kTable,
    kDialog,kDropdown};
 export default TUI;
//  ,KPagination,KSwitch,KColor,KCheckbox,KLayout,KOutfile,
// KBacktop,KMenu,KProgress,KDrawer,KDivider 这段引入出问题 稍后修改。