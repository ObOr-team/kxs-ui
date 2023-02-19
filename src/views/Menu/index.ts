import kMenu from "./index.vue";
kMenu.install =(app:any) => {
    app.component(kMenu.name,kMenu);
};
export default kMenu;