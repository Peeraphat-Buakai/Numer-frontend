import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Lesson1.vue'
import page2 from '../views/lesson2.vue'
import page0 from '../views/lesson0.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/page2', component: page2 },
  { path: '/page0', component: page0 }


]

const router = new VueRouter({
  routes
})

export default router
