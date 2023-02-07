import kTextarea from "./Textarea/index";
import kPreview from "./Preview/index";
const component =[kTextarea,kPreview];
const install =(app:any)=>{
    component.forEach((item)=>{
        app.use(item);
    })
};
 const TUI = {
    install,
 }
 export {kTextarea,kPreview};
 export default TUI;