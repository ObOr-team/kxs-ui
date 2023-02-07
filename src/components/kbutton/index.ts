import kButton from "./KButton.vue";
kButton.install =(app:any) => {
    app.component(kButton.name,kButton);
};
export default kButton;