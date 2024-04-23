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
      <div class="flex justify-center mt-4">
      <button class="bg-blue-500 text-white py-2 px-4 rounded"><a href="/login">Login</a></button>
</div>
    </ul>
  </nav>
</header>

<main>
  <article>
    <header class="mx-auto max-w-screen-xl pt-28 text-center">
      <h1 class="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">selamat datang di web</h1>
      <img class="sm:h-[34rem] mt-10 w-full object-contain" src="data:image/jpeg;base64,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" alt="Featured Image" />
      <h1 class="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">Ford Mustang 2022 </h1>
      <p class="mt-6 text-lg text-gray-700">Ford memperbarui jajaran Mustang 2022 dengan meluncurkan Shelby GT500 Heritage Edition dan Coastal Limited Edition untuk model empat silinder turbocharged.
Selain itu, GT500 juga menerima opsi warna baru yang cerah.
GT500 Heritage merupakan tribute untuk model orisinalnya dari 1967. Edisi khusus ini hadir secara eksklusif dengan eksterior Brittany Blue, dan ada dua pilihan strip.
Opsi pertama menambahkan strip vinil di atas fasia, kap mesin, atap, serta dek belakang. Ada juga garis lain di sepanjang sisi dengan logo GT500.</p>
    </header>
  </article>
</main>

<div class="w-fit mx-auto mt-10 flex space-x-2">
  <div class="h-0.5 w-2 bg-gray-600"></div>
  <div class="h-0.5 w-32 bg-gray-600"></div>
  <div class="h-0.5 w-2 bg-gray-600"></div>
</div>

<aside aria-label="Related Articles" class="mx-auto mt-10 max-w-screen-xl py-20">
  <h2 class="mb-8 text-center text-5xl font-bold text-gray-900">produk</h2>
  
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



  <h2 class="mb-8 text-center text-5xl font-bold text-gray-900">informasi</h2>
    <!-- /Heading -->
    <div class="grid gap-8  md:grid-cols-2 lg:grid-cols-4 ">
      <!-- Article -->
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://itstimeforeveryone.toyota.astra.co.id/storage/images/banners/TC%2030%20FEBRUARI%20-%20KENDARAAN%20ELEKTRIFIKASI%20TOYOTA%20DI%20IIMS%202024%20(UMUM).jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Presiden Jokowi Tertarik All New Yaris Cross HEV, Ini Daftar Kendaraan Elektrifikasi Toyota di IIMS 2024</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Toyota menghadirkan berbagai teknologi elektrifikasi di Indonesia International Motor Show (IIMS) 2024 di JIExpo Kemayoran Jakarta, 15–25 Februari 2024. Mulai dari Hybrid Electric Vehicle (HEV), Plug-in Hybrid Electric Vehicle (PHEV), Battery Electric Vehicle (BEV), bahkan Fuel Cell Electric Vehicle (FCEV). </p>
       
    </div>
</div>
      <!-- /Article -->
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://itstimeforeveryone.toyota.astra.co.id/storage/images/banners/TC%2029%20FEBRUARI%20-%20DAFTAR%20HARGA%20ALL%20NEW%20VELLFIRE%20DI%20IIMS%202024%20(UMUM).jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Daftar Harga All New Vellfire HEV yang Launching di IIMS 2024</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Hadirkan ever-better cars di Indonesia, PT Toyota-Astra Motor (TAM) sekali lagi menambah opsi xEV bagi pelanggan. Kali ini dengan teknologi hybrid pada All New Vellfire HEV di segmen Luxury MPV yang dipamerkan di ajang Indonesia International Motor Show (IIMS) 2024 di JIExpo Kemayoran Jakarta, 15–25 Februari 2024.</p>
      
    </div>
</div>

      <!-- /Article -->

      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://itstimeforeveryone.toyota.astra.co.id/storage/images/banners/TC%2020%20FEBRUARI%20-%20CARA%20SETOR%20SAMPAH%20KE%20TOYOTA%20WASTE%20STATION%20(UMUM).jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cara Pilah dan Setor Sampah ke Toyota Waste Station, Dapat Rewards dan Bantu Ciptakan Lingkungan yang Semakin Bersih</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Toyota ingin mengajak semua orang ikut berkontribusi menciptakan masa depan yang lebih baik. Dengan gerakan It’s Time For Everyone, siapa saja dapat berkontribusi untuk mewujudkan netralitas karbon bagi Indonesia dengan memulai tindakan kecil, seperti mengurangi dan mendaur ulang penggunaan plastik, kapan pun dan di mana pun.</p>
       
    </div>
</div>

      <!-- /Article -->
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://itstimeforeveryone.toyota.astra.co.id/storage/images/banners/TC%2019%20FEBRUARI%20-%20KONTRIBUTOR%20TERBAIK%20TOYOTA%20WASTE%20STATION%202023%20(UMUM).jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Instagram Toyota Indonesia Berikan Apresiasi kepada Kontributor Terbaik Toyota Waste Station 2023  </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Dengan gerakan It’s Time For Everyone, siapa saja dapat berkontribusi untuk mewujudkan netralitas karbon bagi Indonesia di waktu yang akan datang dengan memulai tindakan kecil, seperti mengurangi dan mendaur ulang penggunaan plastik, kapan pun dan di mana pun!</p>
    </div>
</div>
      <!-- /Article -->
    </div>
  

<footer class="relative mt-20 bg-gray-900 px-4 pt-20">
  <div class="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-sky-500 bg-white p-2"><img class="h-full object-contain" src="https://img.freepik.com/free-vector/gradient-car-service-logo-template_23-2149727267.jpg?t=st=1708938280~exp=1708941880~hmac=ee87b21c2a71a8eb222ed70d246b23351929fc1526cf327a052946a6d1fb693a&w=740" alt="" /></div>
  <nav aria-label="Footer Navigation" class="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left">
    <a href="#" class="font-medium text-white">Demo</a>
    <a href="#" class="font-medium text-white">Support</a>
    <a href="#" class="font-medium text-white">Privacy Policy</a>
    <a href="#" class="font-medium text-white">Terms & Conditions</a>
  </nav>
  <p class="py-10 text-center text-gray-300">© 2022 Boleno | All Rights Reserved</p>
</footer>

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
