import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import { getAllShows, getShowDetails, getShowThumbnails, getShowsBySearch } from "@/services/service";
import { showsData, showDetails, showThumbnails, searchResult } from './response';

import { actions, mutations, sortByRating, getGenres } from '../../src/store';

// Mock module with Jest mock functions
jest.mock("@/services/service");

// create local vue instance
const localVue = createLocalVue();
localVue.use(Vuex);

describe('TV shows store', () => {
  let commit;
  let error;

  beforeEach(() => {
    commit = jest.fn();
    error = new Error({ message: 'Async / Test error' });
  });

  it('getShowslist should commits meals data returned by getAllShows Api with setShowslist commit', async () => {
    // Control mock to resolve with an array of objects
    getAllShows.mockResolvedValue(showsData);
    await actions.getShowslist({ commit });
    expect(commit).toHaveBeenCalledWith('setShowslist', sortByRating(showsData));
  });

  it('getShowslist should commits meals data returned by getAllShows Api throws error', async () => {
    getAllShows.mockRejectedValue(error);
    await actions.getShowslist({ commit });
    expect(commit).toHaveBeenCalledTimes(0);
  });

  it('getShowslist should commits shows data returned by getAllShows Api with setGenreslist commit', async () => {
    // Control mock to resolve with an array of objects
    getAllShows.mockResolvedValue(showsData);
    await actions.getShowslist({ commit });
    expect(commit).toHaveBeenCalledWith('setGenreslist', getGenres(showsData));
  });

  it('getShowDetails should commits shows data returned by getShowDetails Api with setShowDetails commit', async () => {
    // Control mock to resolve with an array of objects
    getShowDetails.mockResolvedValue(showDetails);
    await actions.getShowDetails({ commit }, 106);
    expect(commit).toHaveBeenCalledWith('setShowDetails', showDetails);
  });

  it('getShowDetails should commits meals data returned by getShowDetails Api throws error', async () => {
    getShowDetails.mockRejectedValue(error);
    await actions.getShowDetails({ commit });
    expect(commit).toHaveBeenCalledTimes(0);
  });

  it('getShowThumbnails should commits shows data returned by getShowThumbnails Api with setShowThumbnails commit', async () => {
    // Control mock to resolve with an array of objects
    getShowThumbnails.mockResolvedValue(showThumbnails);
    await actions.getShowThumbnails({ commit }, 106);
    expect(commit).toHaveBeenCalledWith('setShowThumbnails', showThumbnails);
  });

  it('getShowThumbnails should commits meals data returned by getShowThumbnails Api throws error', async () => {
    getShowThumbnails.mockRejectedValue(error);
    await actions.getShowThumbnails({ commit });
    expect(commit).toHaveBeenCalledTimes(0);
  });

  it('getShowsBySearch should commits shows data returned by getShowsBySearch Api with setShowThumbnails commit', async () => {
    // Control mock to resolve with an array of objects
    getShowsBySearch.mockResolvedValue(searchResult);
    await actions.getShowsBySearch({ commit }, 'Game of Thrones');
    let resultSet = searchResult.map(result => (result.show));
    expect(commit).toHaveBeenCalledWith('setShowslist', resultSet);
  });

  it('getShowsBySearch should commits meals data returned by getShowsBySearch Api throws error', async () => {
    getShowsBySearch.mockRejectedValue(error);
    await actions.getShowsBySearch({ commit });
    expect(commit).toHaveBeenCalledTimes(0);
  });

  it('getShowsBySearch should commits shows data returned by getShowsBySearch Api with setShowThumbnails commit', async () => {
    // Control mock to resolve with an array of objects
    getShowsBySearch.mockResolvedValue(searchResult);
    await actions.getShowsBySearch({ commit }), 'Game of Thrones';
    let resultSet = searchResult.map(result => (result.show));
    expect(commit).toHaveBeenCalledWith('setGenreslist', getGenres(resultSet));
  });

  it('setShowslist sets state.shows to showsData', () => {
    const state = {
      shows: [],
    };
    mutations.setShowslist(state, showsData);
    expect(state.shows).toBe(showsData);
  });

  it('setGenreslist sets state.genres to genres', () => {
    const genres = getGenres(showsData);
    const state = {
      genres: [],
    };
    mutations.setGenreslist(state, genres);
    expect(state.genres).toBe(genres);
  });

  it('setShowDetails sets state.showDetails to showDetails', () => {
    const state = {
      showDetails: [],
    };
    mutations.setShowDetails(state, showDetails);
    expect(state.showDetails).toBe(showDetails);
  });

  it('setShowThumbnails sets state.meal to meal', () => {
    const state = {
      showThumbnails: [],
    };
    mutations.setShowThumbnails(state, showThumbnails);
    expect(state.showThumbnails).toBe(showThumbnails);
  });

  it('setSearchbarStatus sets state.meal to meal', () => {
    const status = true;
    const state = {
      showSearchbar: {},
    };
    mutations.setSearchbarStatus(state, status);
    expect(state.showSearchbar).toBe(status);
  });
  
});
