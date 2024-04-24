<template>
  <header class="text-slate-700 relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
       <a href="#" class="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
     <span class="mr-2 text-cyan-500">
       <img src="https://img.freepik.com/free-vector/gradient-car-service-logo-template_23-2149727267.jpg?t=st=1708938280~exp=1708941880~hmac=ee87b21c2a71a8eb222ed70d246b23351929fc1526cf327a052946a6d1fb693a&w=740" class="w-20 h-15" alt="...">
     </span>
     vinn
   </a>
     <input type="checkbox" class="peer hidden" id="navbar-open" />
     <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
       <span class="sr-only">Toggle Navigation</span>
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
         <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
       </svg>
     </label>
     <nav aria-label="Header Navigation" class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
       <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
         <li class="md:mr-12"><a href="/">home</a></li>
         <li class="md:mr-12"><a href="/prodact">prodact</a></li>
         <li class="md:mr-12"><a href="/kontak">contact</a></li>
         <button class="bg-blue-500 text-white py-2 px-4 rounded"><a href="/login">Login</a></button>
       </ul>
     </nav>
   </header>

  <aside aria-label="Related Articles" class="mx-auto mt-10 max-w-screen-xl py-20">
  
    <div class="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-2 md:grid-cols-4">
      <article class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg" v-for="item in produk?.slice(0, 4)" :key="item.id">
          <img :src="item.gambar" class="h-56 w-56 object-cover" alt="" />
          <div class="flex-auto px-6 py-5">
            <span class="mb-2 flex items-center text-sm font-semibold">
              {{ item.nama_produk }}</span >
       
            <p class=" text-base font-light">{{ item.description }}</p>
            
            <span class="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">Read Now</span>
          </div>
      </article>
    </div>
  </aside>
  <aside aria-label="Related Articles" class="mx-auto mt-10 max-w-screen-xl py-20">
  
  <div class="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-2 md:grid-cols-4">
    <article class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg" v-for="item in produk?.slice(4, 8)" :key="item.id">
        <img :src="item.gambar" class="h-56 w-56 object-cover" alt="" />
        <div class="flex-auto px-6 py-5">
          <span class="mb-2 flex items-center text-sm font-semibold">
            {{ item.nama_produk }}</span
          >
          <p class=" text-base font-light">{{ item.description }}</p>
          <span class="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">Read Now</span>
        </div>
    </article>
  </div>
  </aside>
  
  
  
  
  </template>
  

  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
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
      pesan(){
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