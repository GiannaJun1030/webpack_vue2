import Vue from 'vue';
import App from './App.vue';

import router from './router/index.js';
import store from './store/index.js';

export function hello(name) {
  console.log(`hello ${name}`);
}

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');
