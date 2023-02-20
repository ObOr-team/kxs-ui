import kDropdown from "./dropdown.vue";
kDropdown.install =(app:any) => {
    app.component(kDropdown.name,kDropdown);
};
export default kDropdown;