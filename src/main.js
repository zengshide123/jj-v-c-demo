import Vue from "vue";
import App from "./App.vue";
// 引入 bus
import bus from "./components/packages/bus";
Vue.use(bus);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
