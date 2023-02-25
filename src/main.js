import Vue from 'vue'
import App from './App.vue'
import router from "../src/router/router.js";
import $ from 'jquery';
import vuescroll from 'vuescroll';

Vue.config.productionTip = false;
Vue.component('vue-scroll', vuescroll);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

$(".navbar-nav a.nav-link").on("click", e => {
  e.preventDefault();

  let target = $(e.currentTarget.attributes.href.nodeValue);

  $(".__panel").animate({
    scrollTop: 0
  }, 1);

  setTimeout(() => {
    $(".__panel").animate({
      scrollTop: target.offset().top - 150
    }, "medium");
  }, 10)
});
