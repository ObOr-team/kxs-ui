import kOptfile from './index.vue';
kOptfile.install =(app:any) => {
    app.component(kOptfile.name,kOptfile);
};
export default kOptfile;