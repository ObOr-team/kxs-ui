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

const component =[kButton,kTextarea,kPreview,kSpace,kRadio,kTree,KSelect,kOptfile,kInput,kDialog];
const install =(app:any)=>{
    component.forEach((item)=>{
        app.use(item);
    })
};
 const TUI = {
    install,
 }
 export {kButton,kTextarea,kPreview,kSpace,kRadio,kTree,KSelect,kOptfile,kInput,kDialog};
 export default TUI;