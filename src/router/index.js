import { createRouter, createWebHistory } from 'vue-router'
import CartView from '@/views/user/CartView.vue'
import CheckoutView from '@/views/user/CheckoutView.vue'
import HomeView from '@/views/user/HomeView.vue'
import ProfileView from '@/views/user/ProfileView.vue'
import SearchView from '@/views/user/SearchView.vue'
import StoreView from '@/views/user/StoreView.vue'
import SuccessView from '@/views/user/SuccessView.vue'
import RegisterView from '@/views/user/RegisterView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView,
    },
    {
      path: '/store',
      name: 'store',
      component: StoreView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },

    // Admin

  
    
  ],
})

export default router
