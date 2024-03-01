import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/Login.vue'
import home from '../views/HomeView.vue'
import Dashbord from '../views/Dashbord.vue'
import Kontak from '../views/Kontak.vue'
import Prodact from '../views/Prodact.vue'
import  Gallery from '../views/Gallery.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/Dashbord',
      name: 'Dashbord',
      component: Dashbord,
    },
    {
      path: '/Kontak',
      name: 'Kontak',
      component: Kontak,
    },
    {
      path: '/Prodact',
      name: 'Prodact',
      component: Prodact,
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery,
    }
  ]
})

export default router
