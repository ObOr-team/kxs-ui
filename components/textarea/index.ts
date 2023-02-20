import kTextarea from "./textarea.vue";
kTextarea.install =(app:any) => {
    app.component(kTextarea.name,kTextarea);
};
export default kTextarea;