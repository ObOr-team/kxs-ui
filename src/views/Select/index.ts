import kSelect from './index.vue';
kSelect.install =(app:any) => {
    app.component(kSelect.name,kSelect);
};
export default kSelect;