import kForm from "./index.vue";
kForm.install =(app:any) => {
    app.component(kForm.name,kForm);
};
export default kForm;