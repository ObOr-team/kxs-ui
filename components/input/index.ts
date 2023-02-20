import kInput from './input.vue';
kInput.install =(app:any) => {
    app.component(kInput.name,kInput);
};
export default kInput;