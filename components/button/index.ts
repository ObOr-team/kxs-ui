import kButton from "./button.vue";
kButton.install =(app:any) => {
    app.component(kButton.name,kButton);
};
export default kButton;