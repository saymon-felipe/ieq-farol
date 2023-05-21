import Vue from 'vue'
import App from './App.vue'
import router from "../src/routes/router.js";
import $ from 'jquery';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

$("a.scroll-top").on("click", () => {
  console.log("entrou")
  scrollToTop();
})