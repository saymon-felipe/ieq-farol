import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import homePage from "../pages/homePage.vue";
import eventPage from "../pages/eventPage.vue";
import givePage from "../pages/givePage.vue";
import locationPage from "../pages/locationPage.vue";
import leadershipPage from "../pages/leadershipPage.vue";
import galleryPage from "../pages/galleryPage.vue";
import gmjPage from "../pages/gmjPage.vue";
import gmmPage from "../pages/gmmPage.vue";

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
    },
    {
        path: "/location",
        component: locationPage
    },
    {
        path: "/leadership",
        component: leadershipPage
    },
    {
        path: "/gallery",
        component: galleryPage
    },
    {
        path: "/ministries/gmj",
        component: gmjPage
    },
    {
        path: "/ministries/gmm",
        component: gmmPage
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;