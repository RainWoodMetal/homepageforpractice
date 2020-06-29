import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/Home-Page'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomePage
  },
]

const router = new VueRouter({
  routes
})

export default router
