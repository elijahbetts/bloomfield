import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import App from './App.vue';
import Home from './components/Home.vue';
import Review from './components/Review.vue';
import Whiskies from './components/Whiskies.vue';

Vue.use(VueRouter);
Vue.prototype.$http = Axios;
Vue.config.productionTip = false;

const router = new VueRouter({
	routes: [
		{ path: '/', name: 'Home', component: Home },
		{ path: '/whiskies', name: 'Whiskies', component: Whiskies },
		{ path: '/review/:id', name: 'Review', component: Review, props: true }
	]
});

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
