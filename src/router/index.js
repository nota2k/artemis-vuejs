import { createRouter, createWebHistory } from 'vue-router'
import HomeView from  '../views/HomeView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import JoinUsView from '../views/JoinUsView.vue'
import AdminView from '../views/admin/AdminView.vue'
import ConnexionView from '../components/Connect.vue'
import ShopView from '../views/shop/ShopView.vue'
import SingleProductView from '../views/shop/SingleProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: ConnexionView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUsView
    },
    {
      path: '/joinus',
      name: 'joinus',
      component: JoinUsView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/shop/product/:id',
      name: 'product',
      component: SingleProductView,
      props: true
    }
  ]
})

export default router
