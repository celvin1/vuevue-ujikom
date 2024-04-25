import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/Login.vue'
import home from '../views/HomeView.vue'
import Kontak from '../views/Kontak.vue'
import Prodact from '../views/Prodact.vue'
import produk from '../views/admin/produk.vue' // Perbaikan: mengimpor produk
import detailmobil1 from '../views/detail/detailmobil1.vue';
import detailmobil2 from '../views/detail/detailmobil2.vue';
import detailmobil3 from '../views/detail/detailmobil3.vue';
import detailmobil4 from '../views/detail/detailmobil4.vue';
import detailmobil5 from '../views/detail/detailmobil5.vue';

import LayoutAdmin from '../layout/layout.vue'
import admin from '../views/admin/dashboard.vue';
import tabel from '../views/tabel/tabel_user.vue';
import profile from '../views/admin/profile.vue';
import kontak from '../views/tabel/tabel_kontak.vue';
import addProduk from '../views/admin/addProduk.vue';
import editproduk from '../views/admin/editproduk.vue';

import store from '@/store'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      beforeEnter: (to, from, next) => {
        const isAuthenticated = store.getters["auth/isAuthenticated"];
        if (isAuthenticated) {
          // Redirect user to the appropriate page based on their role
          const role = localStorage.getItem("role");
          if (role === "admin") {
            next("/admin");
          } else {
            next("/");
          }
        } else {
          // Show loading page for 1 second before entering the component
          setTimeout(() => {
            next();
          }, 1000);
        }
      },
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
      path: '/detailmobil1',
      name: 'detailmobil1',
      component: detailmobil1,
    },
    {
      path: '/detailmobil2',
      name: 'detailmobil2',
      component: detailmobil2,
    },
    {
      path: '/detailmobil3',
      name: 'detailmobil3',
      component: detailmobil3,
    },
    {
      path: '/detailmobil4',
      name: 'detailmobil4',
      component: detailmobil4,
    },
    {
      path: '/detailmobil5',
      name: 'detailmobil5',
      component: detailmobil5,
    },
    {
      path: '/admin',
      name: 'LayoutAdmin',
      component: LayoutAdmin,
      meta:{
        requiresAdmin: true,
        requiresAdmin: true,
      },
      children: [
        {
          path: '/admin',
          name: 'admin',
          component: admin,
          meta:{
            requiresAdmin: true,
            requiresAdmin: true,
          },  
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
          path: '/admin/kontak',
          name: 'AdminKontak',
          component: kontak,
        },
        {
          path: '/admin/produk',
          name: 'admin produk',
          component: produk, // Perbaikan: menggunakan produk
        },
        {
          path: '/admin/addProduk',
          name: 'addProduk',
          component: addProduk,
        },
        {
          path: '/admin/editProduk/:id',
          name: 'editProduk',
          component: editproduk,
        },
      ]
    },
  ]
});

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = store.getters["auth/isAuthenticated"];
  const role = localStorage.getItem("role");

  if (to.meta.requiresLogin && !isAuthenticated) {
    // Redirect to login page if login is required and user is not authenticated
    next("/login");
  } else if (to.meta.requiresAdmin && (!isAuthenticated || role !== "admin")) {
    // Redirect to login page or home page if admin access is required but user is not authenticated or not an admin
    next(isAuthenticated ? "/" : "/login");
  } else if (to.meta.requiresUser && !isAuthenticated) {
    // Redirect to home page if user access is required but user is not authenticated
    next("/");
  } else {
    // Continue with navigation
    next();
  }
});



export default router;
