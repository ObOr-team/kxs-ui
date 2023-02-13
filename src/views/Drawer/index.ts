import kDrawer from "./index.vue";
kDrawer.install =(app:any) => {
    app.component(kDrawer.name,kDrawer);
};
export default kDrawer;