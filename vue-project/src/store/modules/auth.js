import axios from 'axios';

const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    role: localStorage.getItem('role') || '',
    loginError: null,
    dataAddress: []
  },
  getters: {
    isAuthenticated: (state) => !!state.token && !!state.role,
    getAddress: (state) => state.dataAddress
    
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(
          'http://localhost:8080/api/v1/Login',
          credentials
        );
        const token = response.data.token;
        const role = response.data.user.result.role;
    
        // Save token and role to localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
    
        commit('SET_TOKEN', token);
        commit('SET_ROLE', role);
    
        commit('SET_LOGIN_ERROR', null);
        console.log("token saved:", token);
        return true;
      } catch (error) {
        const errorMessage = error.response.data.message || "Login Failed";
        commit("SET_LOGIN_ERROR", errorMessage);
        console.error(error);
        return false;
      }
    },
    async signup({ commit }, credentials) {
      try {
        const response = await axios.post(
          'http://locallhost:8080/api/v1/Login',
          credentials
        );
        const token = response.data.access_token;
    

        
        localStorage.setItem('token', token);
   

        commit('SET_TOKEN', token);
        commit('SET_LOGIN_ERROR',null);
        console.log("token saved:", token);
        return true;
      } catch (error) {
        const errorMessage =error.response.data.message || "Login failed";
        commit("SET_LOGIN_ERROR",errorMessage);
        console.error(error);
        return false;
      }
    },

    async getUserAddress({state, commit}){
      try {
        const response = await axios.get(
          "http://locallhost:8080/api/v1/Login",
          {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          } 
        );
        commit('SET_ADDRESS', response.data)
        console.log(response);
        return response.data;
      }catch (error){
        console.error(error)
        return null;
      }
    },
    
    logout({ commit }) {
      // Remove token from localStorage
      const token = localStorage.getItem('token');
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      commit('SET_TOKEN', '');
      commit('SET_TOKEN', null);
      commit('SET_ROLE', null);
      //   Log Token removed
      console.log('Token Removed:', token);
      window.location.href = "/login";
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_ROLE(state, role) {
      state.role = role;
    },
    SET_LOGIN_ERROR(state,error){
      state.loginError = error;
    },
    SET_ADDRESS(state, address) {
      state.dataAddress = address
    }
  },
};

export default auth;