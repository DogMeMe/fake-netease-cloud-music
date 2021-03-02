import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import util from "@/utils/common";
import "@/styles/index.scss";

const app = createApp(App);

app
  .use(store)
  .use(router)
  .use(util)
  .mount("#app");
