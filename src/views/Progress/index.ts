import kProgress from "./index.vue";
kProgress.install =(app:any) => {
    app.component(kProgress.name,kProgress);
};
export default kProgress;