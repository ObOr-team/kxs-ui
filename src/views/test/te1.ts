 import te1 from "./te1.vue";
te1.install =(app:any) => {
    app.component(te1.name,te1);
};


import te2 from "./te2.vue";
te1.install =(app:any) => {
    app.component(te2.name,te2);
};


export default [te1,te2];