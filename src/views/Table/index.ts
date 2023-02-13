import KTable from "./index.vue";
KTable.install =(app:any) => {
    app.component(KTable.name,KTable);
};
export default KTable;