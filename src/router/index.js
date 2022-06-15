import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home/index.vue'),
    },
  ],
  base: '/',
  mode: 'history',
});
