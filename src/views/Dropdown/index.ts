import kDropdown from "./index.vue";
kDropdown.install =(app:any) => {
    app.component(kDropdown.name,kDropdown);
};
export default kDropdown;