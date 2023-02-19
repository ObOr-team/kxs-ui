import kPreview from "./preview.vue";
kPreview.install =(app:any) => {
    app.component(kPreview.name,kPreview);
};
export default kPreview;