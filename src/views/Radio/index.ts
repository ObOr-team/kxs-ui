import kRadio from './index.vue';
kRadio.install =(app:any) => {
    app.component(kRadio.name,kRadio);
};
export default kRadio;