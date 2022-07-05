import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";


app.use(createPinia());
app.use(router);
app.use(VueAwesomePaginate)
app.mount("#app");



