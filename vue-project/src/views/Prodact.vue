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
     <h2 class="mb-8 text-center text-5xl font-bold text-gray-900">More Blogs</h2>
   
     <div class="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-8 md:grid-cols-3">
       <article class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
     <a href="#" class="flex flex-col h-full">
       <img src="https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXdhcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="h-56 w-full object-cover" alt="" />
       <div class="flex-auto px-6 py-5 flex flex-col justify-between">
         <div>
           <span class="mb-2 flex items-center text-sm font-semibold">
             <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
             </svg>
             Marketing</span
           >
           <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">Marketing is looking for untapped opportunities</h3>
           <p class="mb-4 text-base font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam tempore officiis. Lorem, ipsum dolor.</p>
         </div>
         <span class="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm self-center mt-4">Read Now</span>
       </div>
     </a>
   </article>
   
   <article class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
     <a href="#" class="flex flex-col h-full">
       <img src="https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXdhcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="h-56 w-full object-cover" alt="" />
       <div class="flex-auto px-6 py-5 flex flex-col justify-between">
         <div>
           <span class="mb-2 flex items-center text-sm font-semibold">
             <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
             </svg>
             Marketing</span
           >
           <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">Marketing is looking for untapped opportunities</h3>
           <p class="mb-4 text-base font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam tempore officiis. Lorem, ipsum dolor.</p>
         </div>
         <span class="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm self-center mt-4">Read Now</span>
       </div>
     </a>
   </article>
   
       <article class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
     <a href="#" class="flex flex-col h-full">
       <img src="https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXdhcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="h-56 w-full object-cover" alt="" />
       <div class="flex-auto px-6 py-5 flex flex-col justify-between">
         <div>
           <span class="mb-2 flex items-center text-sm font-semibold">
             <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
             </svg>
             Marketing</span
           >
           <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">Marketing is looking for untapped opportunities</h3>
           <p class="mb-4 text-base font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam tempore officiis. Lorem, ipsum dolor.</p>
         </div>
         <span class="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm self-center mt-4">Read Now</span>
       </div>
     </a>
   </article>
     </div>
   </aside>
   
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
   
   
   
   