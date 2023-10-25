import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const instance = createApp(App);
instance.use(router).mount("#app");
