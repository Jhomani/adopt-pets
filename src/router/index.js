import Vue from 'vue'
import VueRouter from 'vue-router'
import Cats from '../views/Cats.vue'
import Dogs from '../views/Dogs.vue'
import Pets from '../views/Pets.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cats',
    name: 'cats',
    component: Cats,
    alias: '/ct'
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: Dogs
  },
  {
    name: 'Pets',
    path: '/:names?',
    component: Pets,
    props (route) {
      const pets = route.params.names || ''

      return {
        names: pets !== '' ? pets.split(',') : []
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
