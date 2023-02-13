import kBacktop from "./index.vue";
kBacktop.install =(app:any) => {
    app.component(kBacktop.name,kBacktop);
};
export default kBacktop;