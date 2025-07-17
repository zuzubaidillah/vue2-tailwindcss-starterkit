import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import stores from "./stores";
import './assets/tailwind.css' // ⬅️ Tambahkan ini

Vue.config.productionTip = false;

new Vue({
  router,
  store: stores,
  render: (h) => h(App),
}).$mount("#app");
