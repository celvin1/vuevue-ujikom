<template>
  <div class="-ml-28 w-screen flex justify-center">
    <div class="mt-8 max-w-screen-lg px-2">
      <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
        <p class="flex-1 text-base font-bold text-gray-900">Daftar Produk</p>
        <button @click="toAddProduk" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Tambah Produk
        </button>
      </div>

      <div class="mt-6 overflow-hidden rounded-xl border shadow">
        <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
          <thead class="hidden border-b lg:table-header-group">
            <tr>
              <th class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Nama Produk</th>
              <th class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Deskripsi</th>
              <th class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Gambar</th>
              <th class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Aksi</th>
            </tr>
          </thead>
          <tbody class="lg:border-gray-300">
            <tr v-for="product in getAllProducts?.data" :key="product.id">
              <td class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">{{ product.nama_produk }}</td>
              <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">{{ product.description }}</td>
              <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">
                <img :src="product.gambar" alt="Gambar Produk" class="h-16 w-16">
              </td>
              <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">
                <button @click="editProduct(product.id)" class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2">Edit</button>
                <button @click="confirmDeleteProduct(product.id)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

export default {
  computed: {
    ...mapGetters('produk', ['getAllProducts']),
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions('produk', ['fetchProducts', 'deleteProduct']),
    toAddProduk() {
      this.$router.push('/admin/addProduk');
    },
    editProduct(productId) {
      // Implement logic to navigate to edit product page with productId
      this.$router.push(`/admin/editProduk/${productId}`);
    },
    async confirmDeleteProduct(productId) {
      // Menggunakan SweetAlert untuk konfirmasi
      const result = await Swal.fire({
        title: 'Apakah Anda yakin ingin menghapus produk ini?',
        text: "Anda tidak akan bisa mengembalikan ini!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, hapus!',
        cancelButtonText: 'Batal'
      });
      
      // Jika pengguna mengonfirmasi penghapusan
      if (result.isConfirmed) {
        this.deleteProduct(productId);
      }
    },
    async deleteProduct(productId) {
      try {
        await this.$store.dispatch('produk/deleteProduct', productId);
        await this.fetchProducts(); // Fetch products again after deletion
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
  },
};
</script>
