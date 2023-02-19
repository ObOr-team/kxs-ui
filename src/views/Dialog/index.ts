import kDialog from './index.vue';
kDialog.install =(app:any) => {
    app.component(kDialog.name,kDialog);
};
export default kDialog;