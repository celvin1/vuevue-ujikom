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

function guardMyroute(to, from, next) {
  const isAuthenticated = localStorage.getItem('token');

  if (to.name !== 'login' && !isAuthenticated) {
    next('/login'); // Redirect to login page if not authenticated and not accessing login page
  } else {
    next(); // Continue to the requested route
  }
}


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
      beforeEnter: guardMyroute,
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

export default router;
