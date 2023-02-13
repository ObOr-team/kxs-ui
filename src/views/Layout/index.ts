import kLayout from "./index.vue";
kLayout.install =(app:any) => {
    app.component(kLayout.name,kLayout);
};
export default kLayout;