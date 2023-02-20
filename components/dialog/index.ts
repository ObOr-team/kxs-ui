import kDialog from './dialog.vue';
kDialog.install =(app:any) => {
    app.component(kDialog.name,kDialog);
};
export default kDialog;