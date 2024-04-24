<template>
  <div class="m-10 grid gap-5 sm:grid-cols-4 mx-auto max-w-screen-lg space-x-6">

      <div class="px-4 py-4 shadow-lg shadow-blue-100 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 rounded-xl bg-rose-400 p-3 text-white"
          viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
        </svg>
        <p class="mt-3 font-medium text-sm">Users</p>
        <p class="mt-1 text-lg font-medium">
          {{ users?.length }}
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-4 w-4" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </p>
        <span class="text-xs text-gray-400">+4.9%</span>
      </div>
      <div class="px-4 py-4 shadow-lg shadow-blue-100 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 rounded-xl bg-green-400 p-3 text-white" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="mt-3 font-medium text-sm">Kontak</p>
        <p class="mt-1 text-lg font-medium">
               {{ kontak?.length }}
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-4 w-4" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </p>
        <span class="text-xs text-gray-400">+4.9%</span>
      </div>
      <div class="px-4 py-4 shadow-lg shadow-blue-100 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 rounded-xl bg-green-400 p-3 text-white" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="mt-3 font-medium text-sm">produk</p>
        <p class="mt-1 text-lg font-medium">
          {{ produk?.length }}
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-4 w-4" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </p>
        <span class="text-xs text-gray-400">+4.9%</span>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Kontak from '../Kontak.vue';

export default{
computed: {
  ...mapGetters('datauser', ['getDataUser']),
  ...mapGetters('produk', ['getAllProducts']),
  ...mapGetters('kontak', ['getDataKontak']),
  users(){
    return this.getDataUser;
   
  },
  produk(){
    return this.getAllProducts.data;
  },
  kontak(){
    return this.getDataKontak;
  }
},
methods:{
  ...mapActions('datauser', ['fetchDataUser']),
  ...mapActions('produk', ['fetchProducts']),
  ...mapActions('kontak', ['fetchDataKontak'])
},
mounted(){
  this.fetchDataUser();
  this.fetchProducts();
  this.fetchDataKontak();
}
}
</script>
