import kDivider from "./index.vue";
kDivider.install =(app:any) => {
    app.component(kDivider.name,kDivider);
};
export default kDivider;