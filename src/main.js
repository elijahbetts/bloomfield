import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import axios from 'axios';

Vue.use(VueRouter);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
