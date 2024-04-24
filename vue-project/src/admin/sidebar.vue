<template>
  <div class="h-screen bg-gray-100">
    <div class="h-screen w-64 pb-10">
      <div class="flex h-full flex-grow flex-col overflow-y-auto rounded-br-lg rounded-tr-lg bg-white pt-5 shadow-md">
        <div class="flex mt-10 items-center px-4">
          <img class="h-12 w-auto max-w-full align-middle" src="" alt="" />
          <div class="flex ml-3 flex-col">
            <h3 class="font-medium">admin</h3>
          </div>
        </div>

        <span class="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">Analytics</span>

        <div class="flex mt-3 flex-1 flex-col">
          <nav class="flex-1">
            <ul>
              <li>
                <router-link to="/admin">
                  <a
                    class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                        </path>
                      </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                  </a>
                </router-link>
              </li>

              <li>
                <router-link
                  class="flex m-2 cursor-pointer border-l-rose-600 py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600"
                  to="/admin/kontak">
                  <span class="mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </span>
                  Pengguna
                </router-link>
              </li>
            </ul>
          </nav>

          <span class="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">Product Management</span>

          <nav class="flex-1">
            <ul>
              <li>
                <router-link
                  class="flex m-2 cursor-pointer border-l-rose-600 py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600"
                  to="/admin/produk">
                  <svg class="mr-4 h-5 w-5 align-middle" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" class=""></path>
                  </svg>
                  Products
                </router-link>
              </li>

              <li>
                <router-link
                  class="flex m-2 cursor-pointer border-l-rose-600 py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600"
                  to="/admin/profile">
                  <svg class="mr-4 h-5 w-5 align-middle" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Profile
                </router-link>
              </li>
            </ul>
          </nav>

          <button
            class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click="validateLogout">
            Logout
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  methods: {
    validateLogout() {
      // Menampilkan konfirmasi SweetAlert2
      Swal.fire({
        title: 'Apakah Anda yakin ingin logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Logout',
        cancelButtonText: 'Batal'
      }).then((result) => {
        if (result.isConfirmed) {
          this.logoutAndRedirect();
        }
      });
    },
    logoutAndRedirect() {
      // Lakukan proses logout di sini
      // Contoh: hapus token, bersihkan data pengguna dari local storage, dll.

      // Tampilkan notifikasi bahwa logout berhasil dengan SweetAlert2
      Swal.fire({
        title: 'Logout berhasil!',
        icon: 'success',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      });

      // Redirect ke halaman login
      // Ganti '/login' dengan path halaman login yang sesuai
      setTimeout(() => {
        window.location.href = '/login';
      }, 1500);
    }
  }
}
</script>
