import { createApp } from "vue";
import App from "@/App.vue";
import mzlUi from "mzl-ui";
import "../node_modules/mzl-ui/dist/style.css";
const app = createApp(App);
app.use(mzlUi);
app.mount("#app");