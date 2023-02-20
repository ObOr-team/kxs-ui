import kTree from "./tree.vue";
kTree.install =(app:any) => {
    app.component(kTree.name,kTree);
};
export default kTree;