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
  <div class="sm:p-10 my-auto">
    <section class="mx-auto max-w-screen-xl md:rounded-md md:border md:shadow-lg">
      <div class="grid grid-cols-4 text-gray-800 lg:grid-cols-3">
        <div class="col-span-4 bg-gray-50 px-8 py-10 text-gray-800 md:col-span-2 md:border-r md:px-10 md:py-12 lg:col-span-1">
          <h2 class="mb-8 text-2xl font-black">Contact me</h2>
          <ul>
            <li class="mb-6 flex items-start text-left">
              <svg class="shrink-0 mr-6 text-2xl text-gray-500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z" /></svg>
              <div>
                <a class="cursor-pointer font-serif text-base md:text-lg" href="#">abraham@microsoft.com</a>
                <span class="block text-xs uppercase">email</span>
              </div>
            </li>
            <li class="my-6 flex items-center text-left">
              <svg class="shrink-0 mr-6 text-2xl text-gray-500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4c0 146.8-111.8 315.9-316.1 315.9c-63 0-121.4-18.3-170.6-49.8c9 1 17.6 1.4 26.8 1.4c52 0 99.8-17.6 137.9-47.4c-48.8-1-89.8-33-103.8-77c17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35c25.1-4.7 49.1-14.1 70.5-26.7c-8.3 25.7-25.7 47.4-48.8 61.1c22.4-2.4 44-8.6 64-17.3c-15.1 22.2-34 41.9-55.7 57.6z" /></svg>
              <div>
                <a class="cursor-pointer font-serif text-base md:text-lg" href="#">abrahama.real</a>
                <span class="block text-xs uppercase">twitter</span>
              </div>
            </li>
            <li class="my-6 flex items-center text-left">
              <svg class="shrink-0 mr-6 text-2xl text-gray-500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838Zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388Zm-5.5 10.403h3.208V9.25H4.208v10.54ZM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0Z" clip-rule="evenodd" /></svg>
              <div>
                <p class="font-serif text-base md:text-lg">abraham</p>
                <span class="block text-xs uppercase">LinkedIn</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="order-first col-span-4 max-w-screen-md px-8 py-10 md:order-last md:col-span-2 md:px-10 md:py-12">
          <h2 class="mb-8 text-2xl font-black">Get in touch</h2>
          <p class="mt-2 mb-4 font-sans text-sm tracking-normal">Don't be shy to ask me a question.</p>
          <form @submit.prevent="submitForm">
            <div class="md:col-gap-4 mb-5 grid md:grid-cols-2">
              <input v-model="formData.nama" class="col-span-1 w-full border-b py-3 text-sm outline-none focus:border-b-2 focus:border-black" type="text" placeholder="nama" nama="nama" />
              <input v-model="formData.email" class="col-span-1 w-full border-b py-3 text-sm outline-none focus:border-b-2 focus:border-black" type="email" placeholder="Email" nama="email" />
            </div>
            <textarea v-model="formData.description" class="mb-10 w-full resize-y whitespace-pre-wrap border-b py-3 text-sm outline-none focus:border-b-2 focus:border-black" id="" rows="6" placeholder="description" nama="description"></textarea>
            <button type="submit" class="group flex cursor-pointer items-center rounded-xl bg-blue-600 bg-none px-8 py-4 text-center font-semibold leading-tight text-white">
              Send
              <svg class="group-hover:ml-8 ml-4 transition-all" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.912 12H4L2.023 4.135A.662.662 0 0 1 2 3.995c-.022-.721.772-1.221 1.46-.891L22 12L3.46 20.896c-.68.327-1.464-.159-1.46-.867a.66.66 0 0 1 .033-.186L3.5 15" /></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nama: '',
        email: '',
        description: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Lakukan sesuatu dengan data formulir yang sudah diisi
      console.log(this.formData);
      // Panggil action untuk mengirim email dengan data formulir
      this.$store.dispatch('kontak/sendEmail', this.formData)
        .then(() => {
          // Handle jika pengiriman email berhasil
          console.log('Email has been sent successfully!');
          // Reset formulir setelah pengiriman email berhasil
          this.resetForm();
        })
        .catch(error => {
          // Handle jika terjadi error saat pengiriman email
          console.error('Error sending email:', error);
        });
    },
    resetForm() {
      // Reset nilai formulir
      this.formData = {
        name: '',
        email: '',
        description: ''
      };
    }
  }
};
</script>