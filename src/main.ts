/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import { createHead } from "@unhead/vue";
import router from "./router";
const app = createApp(App);
const head = createHead();
registerPlugins(app);
app.use(head);
app.use(router);
app.mount("#app");
