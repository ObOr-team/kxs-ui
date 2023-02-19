import kCheckbox from "./index.vue";
kCheckbox.install =(app:any) => {
    app.component(kCheckbox.name,kCheckbox);
};
export default kCheckbox;