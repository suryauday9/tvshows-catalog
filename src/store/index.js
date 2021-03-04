import Vue from "vue";
import Vuex from "vuex";

import {
getAllShows,
getShowDetails,
getShowThumbnails,
getShowsBySearch
} from "../services/service";

Vue.use(Vuex);

const state = {
  shows: [],
  genres: [],
  showDetails: [],
  showThumbnails: [],
  showSearchbar: false
};

export const sortByRating = (response) => {
  return response.sort((prevValue, nextValue) =>
  prevValue.rating.average < nextValue.rating.average ? 1 : -1);
};

export const getGenres = (response) => {
  return response
  .reduce((result, show) => result.concat(show.genres), [])
  .filter((genre, index, self) => self.indexOf(genre) === index);
};

export const actions = {
  async getShowslist({ commit }) {
    getAllShows().then((response) => {
      commit('setShowslist', sortByRating(response));
      commit('setGenreslist', getGenres(response));
    })
    .catch((error) => {
      const errorNotification = {
        type: 'error',
        message: `There was a problem getting all shows: ${error.message}`,
      };
      console.log(errorNotification);
    });
  },
  async getShowDetails({ commit }, showId) {
    getShowDetails(showId).then((response) => {
      commit('setShowDetails', response);
    })
    .catch((error) => {
      const errorNotification = {
        type: 'error',
        message: `There was a problem getting show details: ${error.message}`,
      };
      console.log(errorNotification);
    });
  },
  async getShowThumbnails({ commit }, showId) {
    await getShowThumbnails(showId).then((response) => {
      commit('setShowThumbnails', response);
    })
    .catch((error) => {
      const errorNotification = {
        type: 'error',
        message: `There was a problem getting show thumbnails: ${error.message}`,
      };
      console.log(errorNotification);
    });
  },
  async getShowsBySearch({ commit }, searchTerm) {
    await getShowsBySearch(searchTerm).then((response) => {
      let resultSet = response.map(result => (result.show));
      commit('setShowslist', resultSet);
      commit('setGenreslist', getGenres(resultSet));
    })
    .catch((error) => {
      const errorNotification = {
        type: 'error',
        message: `There was a problem in show search: ${error.message}`,
      };
      console.log(errorNotification);
    });
  },
  getSearchbarStatus ({ commit }) {
    commit('setSearchbarStatus', !this.state.showSearchbar);
  }
};

export const mutations = {
  setShowslist(state, payload) {
    state.shows = payload;
  },
  setGenreslist(state, payload) {
      state.genres = payload;
  },
  setShowDetails(state, payload) {
    state.showDetails = payload;
  },
  setShowThumbnails(state, payload) {
    state.showThumbnails = payload;
  },
  setSearchbarStatus(state, payload) {
    state.showSearchbar = payload;
  }
};

export default new Vuex.Store({
  state: state,
  actions: actions,
  mutations: mutations,
  modules: {}
});
