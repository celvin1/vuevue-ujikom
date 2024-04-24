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
   
    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div class="md:pt-8 lg:flex lg:flex-col lg:justify-center">

        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">AVANZA</h1>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">Toyota Avanza adalah mobil MPV (Multi-Purpose Vehicle) yang diproduksi oleh Toyota, salah satu merek otomotif terkemuka di dunia. Avanza pertama kali diperkenalkan pada tahun 2003 dan sejak itu telah menjadi salah satu mobil paling populer di kelasnya, terutama di pasar Asia Tenggara.

</p>
      </div>
      <div>
        <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <img src="https://bursaotomotif.net/wp-content/uploads/2016/06/gambar-mobil-avanza-2016-1024x568.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
        </div>
      </div>
    </div>
  </div>
</div>

</template>