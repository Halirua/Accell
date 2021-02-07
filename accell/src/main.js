import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import SignupForm from './components/SignupForm.vue'
import Chat from './components/Chat.vue'
import TutorMap from './components/TutorMap.vue'
import Home from './components/Home.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
  {path:'/',
name: 'Home',
component: Home},
{path:'/login',
name: 'SignUpForm',
component: SignupForm},
{path:'/chat',
name: 'Chat',
component: Chat},
{path:'/map',
name: 'TutorMap',
component: TutorMap},
]

const router = new VueRouter({
  mode: 'history',
  routes,
  base: process.env.BASE_URL
})


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
