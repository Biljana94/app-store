import Vue from 'vue'
import App from './App.vue'

import AppCustomers from './components/AppCustomers.vue';
import AppProducts from './components/AppProducts.vue';
import AddCustomer from './components/AddCustomer.vue';
import LatestPurchases from './components/LatestPurchases.vue';
import SellProduct from './components/SellProduct.vue';

import VueRouter from 'vue-router'; //importujemo vue-router koji smo instalirali u projektu 'npm install vue-router'



Vue.config.productionTip = false;

Vue.use(VueRouter); //ovde koristimo VueRouter


const routes = [
  {path: '/', redirect: '/products'},
  {path: '/products', component: AppProducts, name: 'products'}, //putanje - rute, po imenu ih pozivamo u router-link tagu kad nam zatreba
  {path: '/customers', component: AppCustomers, name:'customers'},
  {path: '/add-customer', component: AddCustomer, name: 'add-customer'},
  {path: '/customers/:id', component: LatestPurchases, name: 'latest-purchases'},
  {path: '/products/:id', component: SellProduct, name: 'sell-product'},
];


//instanciranje VueRouter i smestila rute u 'routes'
const router = new VueRouter({
  routes
});




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
