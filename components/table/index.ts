import KTable from "./table.vue";
KTable.install =(app:any) => {
    app.component(KTable.name,KTable);
};
export default KTable;