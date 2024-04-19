import { createStore } from 'vuex';
import auth from './modules/auth';
import datauser from './modules/profile';

const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    auth,
    datauser,
    
  },
});

export default store;