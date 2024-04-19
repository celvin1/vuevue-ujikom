<template>
  <div class="h-screen">
    <div class="mx-auto mt-8 max-w-screen-lg px-2">
      <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
        <p class="flex-1 text-base font-bold text-gray-900">Latest Payments</p>
    
        <div class="mt-4 sm:mt-0">
          <div class="flex items-center justify-start sm:justify-end">
            <div class="flex items-center">
              <label for="" class="mr-2 flex-shrink-0 text-sm font-medium text-gray-900">Sort by:</label>
              <select name="" class="sm:mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm">
                <option class="whitespace-no-wrap text-sm">Recent</option>
              </select>
            </div>
    
            <button type="button" @click="showAddForm = true" class="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow mr-2">
              Tambah Data
            </button>
            
            <button type="button" class="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
              <svg class="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" class=""></path>
              </svg>
              Export to CSV
            </button>
          </div>
        </div>
      </div>
    
      <div class="mt-6 overflow-hidden rounded-xl border shadow">
        <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
          <thead class="hidden border-b lg:table-header-group">
            <tr class="">
              <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">nama produk</td>
              <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Deskripsi</td>
              <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">gambar</td>
              <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Actions</td>
            </tr>
          </thead>
    
          <tbody class="lg:border-gray-300">
            <tr v-for="(payment, index) in payments" :key="index" class="">
              <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">{{ payment.invoice }}
                <div class="mt-1 lg:hidden">
                  <p class="font-normal text-gray-500">{{ payment.date }}</p>
                </div>
              </td>
    
              <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">{{ payment.date }}</td>
    
              <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">{{ payment.amount }}</td>
    
              <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                <div :class="getStatusClass(payment.status)">{{ payment.status }}</div>
              </td>
    
              <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                <button @click="editPayment(payment)" class="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-1 px-2 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow mr-2">
                  Edit
                </button>
                <button @click="deletePayment(index)" class="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-1 px-2 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Form to add new payment -->
    <div v-if="showAddForm" class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div>
            <!-- Form to add new payment -->
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                Add New Payment
              </h3>
              <div class="mt-2">
                <!-- Your form inputs for new payment -->
                <!-- Example: -->
                <!-- <label for="invoice" class="block text-sm font-medium text-gray-700">Invoice</label> -->
                <!-- <input type="text" name="invoice" id="invoice" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"> -->
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <button @click="showAddForm = false" type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm">
              Cancel
            </button>
            <!-- <button type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm">
              Save
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payments: [
        { invoice: 'Basic Plan - Nov 2021', date: '14 November, 2021', amount: '$29.00', status: 'Pending' },
        { invoice: 'Basic Plan - Oct 2021', date: '15 October, 2021', amount: '$29.00', status: 'Complete' }
      ],
      showAddForm: false
    };
  },
  methods: {
    deletePayment(index) {
      this.payments.splice(index, 1);
    },
    editPayment(payment) {
      // Implement edit functionality here
      console.log('Edit payment:', payment);
    },
    getStatusClass(status) {
      return {
        'bg-blue-600 text-white': status === 'Complete',
        'bg-red-200 text-red-500': status === 'Canceled',
        'bg-blue-200 text-blue-500': status === 'Pending'
      };
    }
  }
};
</script>

<style>
  .bg-blue-600 {
    background-color: #3b82f6;
  }
  .text-white {
    color: #ffffff;
  }
  .bg-red-200 {
    background-color: #feb2b2;
  }
  .text-red-500 {
    color: #ef4444;
  }
  .bg-blue-200 {
    background-color: #93c5fd;
  }
  .text-blue-500 {
    color: #3b82f6;
  }
</style>