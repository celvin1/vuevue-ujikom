import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/Login.vue'
import home from '../views/HomeView.vue'
import Kontak from '../views/Kontak.vue'
import Prodact from '../views/Prodact.vue'
import  Gallery from '../views/Gallery.vue'
import LayoutAdmin from '../layout/layout.vue'
import admin from '../views/admin/dashboard.vue';
import tabel from '../views/admin/tabel.vue';
import profile from '../views/admin/profile.vue';
import prodact from '@/views/admin/prodact.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/',
      name: 'home',
      component: home,
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
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/kontak',
      name: 'Kontak',
      component: Kontak,
    },
    {
      path: '/galery',
      name: 'Gallery',
      component: Gallery,
    },
    {
      path: '/admin',
      name: 'LayoutAdmin',  
      component: LayoutAdmin,
      children: [
        {
          path: '/admin',
          name: 'admin',
          component: admin,
        },
        {
          path: '/admin/tabel',
          name: 'tabel',
          component: tabel,
        },
        {
          path: '/admin/profile',
          name: 'profile',
          component: profile,
        },
        {
          path: '/admin/prodact',
          name: 'prodact',
          component: prodact,
        },
        // {
        //   path: '/admin/musik', 
        //   name: 'Musik',
        //   component: Musik
        // },
        // {
        //   path: '/admin/profile',
        //   name: 'profile',
        //   component: profile
        // },
        // {
        //   path: '/kategori',
        //   name: 'kategori',
        //   component: tabkat
        // },
      ]
    },
  ]
});

export default router



