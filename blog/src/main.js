import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import GetData from './APIDealing/GetData.vue'
import PostData from './APIDealing/PostData.vue'
import FormHandling from './components/FormHandling.vue'
import ComponentA from './Providers/ComponentA.vue'

import Users from './components/Users.vue'
import Registration from './StateManagement/Registration.vue'
import Registrations from './StateManagement/Registrations.vue'
import Products from './APIDealing/Products.vue'
import Mens from './NodejsServer/Mens'
import Players from './NodejsServer/Players'


import VueRouter from 'vue-router'
import store from './store'
Vue.use(VueRouter)
const routes = [
  { path: '/FormHandling', component: FormHandling },
  { path: '/GetData', component: GetData },
  { path: '/PostData', component: PostData },
  { path: '/ComponentA', component: ComponentA },
 
  { path: '/Users/:userId', component: Users },
  { path: '/Registration', component: Registration },
  { path: '/Registrations', component: Registrations },
  { path: '/Products', component: Products },
  { path: '/Mens', component: Mens },
  { path: '/Players', component: Players },


  
]

const router =new VueRouter({routes})

Vue.config.productionTip = false
Vue.filter("Ucase",function(val){
  return val.toUpperCase();
})

Vue.filter("currencyConverter",function (val) {
  return val*2;
})
new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')
