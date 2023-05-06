import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import homePage from "../pages/homePage.vue";

const routes = [
    {
        path: "/",
        component: homePage
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;