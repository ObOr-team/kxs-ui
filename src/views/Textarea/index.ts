import kTextarea from "./index.vue";
kTextarea.install =(app:any) => {
    app.component(kTextarea.name,kTextarea);
};
export default kTextarea;