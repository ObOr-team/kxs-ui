import form from "./KForm.vue";
form.install =(app:any) => {
    app.component(form.name,form);
};
export default form;