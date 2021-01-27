import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    alias: '/welcome',
    name: 'welcome',
    component: () => import('../pages/IndexPage.vue')
  },

  {
    path: '*',
    name: 'not-found',
    component: () => import('../pages/404.vue')
  },
  {
    path: '/aboutMe',
    alias: '/aboutMe',
    name: 'aboutMe',
    component: () => import('../pages/aboutMe.vue')
  },
  {
    path: '/Resume',
    alias: '/Resume',
    name: 'Resume/CV',
    component: () => import('../pages/Resume.vue')
  },
  {
    path: '/websites',
    alias: '/websites',
    name: 'Website Links',
    component: () => import('../pages/Websites.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
