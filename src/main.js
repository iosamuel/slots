import { createApp, ref } from "vue";
import i18n from "./components/i18n.vue";
import App from "./App.vue";

const app = createApp(App);
app.component("i18n", i18n);

const locales = {
  en: {
    hello: "Hello ",
    welcome: "{name} welcome to {app}",
  },
  es: {
    hello: "Hola ",
    welcome: "{name} bienvenido a {app}",
  },
};
app.provide("currentLocale", ref("en"));
app.provide("locales", locales);

app.mount("#app");
