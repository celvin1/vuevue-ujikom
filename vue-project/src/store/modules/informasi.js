import axios from 'axios';

const informasi = {
  namespaced: true,
  state: {
    informasis: [],
    currentInformasi: null,
  },
  getters: {
    getAllInformasis: (state) => state.informasis,
    getInformasiById: (state) => state.currentInformasi,
    getCurrentInformasi: (state) => state.currentInformasi,
  },
  actions: {
    async fetchInformasis({ commit }) {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/informasi");
        commit("SET_INFORMASIS", response.data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async fetchInformasiById({ commit }, informasiId) {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/informasi/${informasiId}`);
        commit("SET_CURRENT_INFORMASI", response.data);
      } catch (error) {
        console.error(error.response.message);
        throw error;
      }
    },
    async createInformasi({ commit }, informasiData) {
      try {
        const response = await axios.post("http://localhost:8080/api/v1/informasi", informasiData);
        commit("ADD_INFORMASI", response.data);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async updateInformasi({ commit }, informasiData) {
      try {
        const response = await axios.put(`http://localhost:8080/api/v1/informasi/${informasiData.id}`, informasiData);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async deleteInformasi({ commit }, informasiId) {
      try {
        const response = await axios.delete(`http://localhost:8080/api/v1/informasi/${informasiId}`);
        commit("DELETE_INFORMASI", informasiId);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    // actions lainnya ...
  },
  mutations: {
    SET_INFORMASIS(state, informasis) {
      state.informasis = informasis;
    },
    SET_CURRENT_INFORMASI(state, informasi) {
      state.currentInformasi = informasi;
    },
    ADD_INFORMASI(state, newInformasi) {
      state.informasis.push(newInformasi);
    },
    DELETE_INFORMASI(state, informasiId) {
      state.informasis = state.informasis.filter(informasi => informasi.id !== informasiId);
    },
  },
};

export default informasi;
