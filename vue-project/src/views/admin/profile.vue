<template>
  <header class=" py-28 table-center"> <!-- Perubahan pada kelas pt-28 -->
    <div class="flex flex-col items-center justify-center " style="margin-top: -8rem;margin-left:20rem ;"> <!-- Perubahan pada kelas flex dan menambahkan flex-col -->
      <div class="max-w-sm w-screen mx-auto"> <!-- Perubahan pada kelas m-10 dan menambahkan mx-auto -->
        <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
          <div class="relative mx-auto w-36 rounded-full">
            <span class="absolute right-90 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
            <img class="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
          </div>
          <ul class="mx-auto mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow"> <!-- Perubahan pada kelas mt-3 -->
            <div class="flex flex-col mx-auto" v-if="user"> <!-- Perubahan pada kelas flex dan menambahkan mx-auto -->
              <h3 class="font-medium text-center">{{  user.name }}</h3>
              <h3 class="font-medium text-center">{{ user.email }}</h3>
              <h3 class="font-medium text-center">{{ user.role }}</h3>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>





<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('datauser', ['getCurrentUser']), // Mengambil getter getUserData dari datauser module
    user () {
      return this.getCurrentUser;
    },
  },
  created() {
    // Panggil metode untuk mengambil data pengguna saat komponen dibuat
    this.fetchCurrentUser();
  },
  methods: {
    ...mapActions('datauser', ['fetchCurrentUser']), // Mengambil action fetchUserData dari datauser module
    async getUserData() {
      // Ambil data pengguna dari state menggunakan getter
      const userData = this.getUserData;
      // Jika data pengguna tersedia
      if (userData) {
        // Setel nama pengguna dan email pengguna dari data yang diambil
        this.userName = userData.name;
        this.userEmail = userData.email;
      }
    },
  },
  }
</script>