import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/search',
        name: 'Search',
        component: () =>
            import(/* webpackChunkName: "search" */ '../views/Search.vue'),
    },
];

export default () => {
    return new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes,
    });
};
