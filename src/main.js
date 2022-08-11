import Vue from 'vue';
import App from './App.vue';

import router from './router/index.js';
import store from './store/index.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/commons/styles/var.scss';

Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');
