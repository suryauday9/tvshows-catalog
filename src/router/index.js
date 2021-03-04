import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: 'ShowsCatalog',
    component: () => import('../views/ShowsCatalog.vue')
  },
  {
    path: '/show',
    name: 'show',
    component: () =>
      import('../views/ShowDetails.vue'),
    props: true,
  },
  {
    path: '/404',
    alias: '*',
    name: 'notFound',
    component: () =>
      import('../views/Page404.vue'),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
