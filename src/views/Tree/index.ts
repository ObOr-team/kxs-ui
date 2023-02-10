import kTree from "./index.vue";
kTree.install =(app:any) => {
    app.component(kTree.name,kTree);
};
export default kTree;