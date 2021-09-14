import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import("@/views/home/home")
const Classify = ()=> import("@/views/classify/classify")
const Cart = ()=> import("@/views/cart/cart")
const Client = ()=> import("@/views/client/client")

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/client',
    component: Client
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
