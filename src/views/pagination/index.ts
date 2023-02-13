import KPagination from "./index.vue";
KPagination.install =(app:any) => {
    app.component(KPagination.name,KPagination);
};
export default KPagination;