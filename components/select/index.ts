import kSelect from './select.vue';
kSelect.install =(app:any) => {
    app.component(kSelect.name,kSelect);
};
export default kSelect;