import kOutfile from "./index.vue";
kOutfile.install =(app:any) => {
    app.component(kOutfile.name,kOutfile);
};
export default kOutfile;