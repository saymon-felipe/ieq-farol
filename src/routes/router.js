import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import homePage from "../pages/homePage.vue";
import eventPage from "../pages/eventPage.vue";
import givePage from "../pages/givePage.vue";

const routes = [
    {
        path: "/",
        component: homePage
    },
    {
        path: "/events",
        component: eventPage
    },
    {
        path: "/give",
        component: givePage
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;