import kInput from './index.vue';
kInput.install =(app:any) => {
    app.component(kInput.name,kInput);
};
export default kInput;