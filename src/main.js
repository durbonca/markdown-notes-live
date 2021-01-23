import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "tailwindcss/tailwind.css";

//load json notes
import notes from "@/seed.json";
store.commit("setNotes", notes);
console.log(store);

createApp(App)
  .use(store)
  .mount("#app");
