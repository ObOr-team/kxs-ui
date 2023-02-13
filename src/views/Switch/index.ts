import kSwitch from "./index.vue";
kSwitch.install =(app:any) => {
    app.component(kSwitch.name,kSwitch);
};
export default kSwitch;