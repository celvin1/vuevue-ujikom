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
        <li class="md:mr-12"><a href="/home">home</a></li>
        <li class="md:mr-12"><a href="/prodact">prodact</a></li>
        <li class="md:mr-12"><a href="/kontak">contact</a></li>
        <li class="md:mr-12"><a href="/Gallery">gallery</a></li>
        <button class="bg-blue-500 text-white py-2 px-4 rounded"><a href="/login">Login</a></button>
      </ul>
    </nav>
  </header>
  <section class="">
  <div class="mx-auto max-w-md sm:max-w-lg md:max-w-screen-xl">
    <div class="px-4 py-8 md:px-6 md:py-12 lg:px-20">
      <h1 class="text-center text-3xl font-semibold text-gray-800 lg:text-4xl">Our Best Selling Collection</h1>

      <div class="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-3 lg:gap-8">
        
        <article class="bg-slate-50 p-8">
          <div class="">
            <h2 class="text-xl text-gray-600">Mens' Scotch</h2>
            <p class="mt-2 text-xl font-semibold text-gray-800"></p>
          </div>
          <div class="mt-8 flex items-center justify-center md:mt-24">
            <img class="" src="" alt="" />
          </div>
        </article>
        
        <article class="bg-slate-50 p-8">
          <div class="">
            <h2 class="text-xl text-gray-600">Mens' Red</h2>
            <p class="mt-2 text-xl font-semibold text-gray-800"></p>
          </div>
          <div class="mt-8 flex items-center justify-center md:mt-24">
            <img class="" src="" alt="" />
          </div>
        </article>
        
        <article class="bg-slate-50 p-8">
          <div class="">
            <h2 class="text-xl text-gray-600">Mens' Punk</h2>
            <p class="mt-2 text-xl font-semibold text-gray-800"></p>
          </div>
          <div class="mt-8 flex items-center justify-center md:mt-24">
            <img src="" alt="" />
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

  <footer class="relative mt-20 bg-gray-900 px-4 pt-20">
    <div class="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-x-1 border-4 border-sky-900 bg-white p-2"><img class="h-full object-contain" src="https://img.freepik.com/free-vector/gradient-car-service-logo-template_23-2149727267.jpg?t=st=1708938280~exp=1708941880~hmac=ee87b21c2a71a8eb222ed70d246b23351929fc1526cf327a052946a6d1fb693a&w=740" alt="" /></div>
    <nav aria-label="Footer Navigation" class="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left">
      <a href="#" class="font-medium text-white">Demo</a>
      <a href="#" class="font-medium text-white">Support</a>
      <a href="#" class="font-medium text-white">Privacy Policy</a>
      <a href="#" class="font-medium text-white">Terms & Conditions</a>
    </nav>
    <p class="py-10 text-center text-gray-300">© 2022 Boleno | All Rights Reserved</p>
  </footer>
  
  </template>
  