import Vue from 'vue'
import App from './App.vue'
import Login from "@/components/Login";
import Index from "@/components/Index";
import VueRouter from 'vue-router'



Vue.config.productionTip = false
const routes = [
  {path: '/Login.vue', component: Login},
  {path: '/Index.vue',component: Index}


];
const router = new VueRouter({routes});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
