import { createStore } from 'vuex';
import auth from './modules/auth';
import datauser from './modules/profile';
import kontak from './modules/kontak';

const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    auth,
    datauser,
    kontak,
  },
});

export default store;