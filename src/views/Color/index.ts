import kColor from "./index.vue";
kColor.install =(app:any) => {
    app.component(kColor.name, kColor);
};
export default kColor;