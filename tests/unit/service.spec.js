import api from '../../src/services/api';
import { showsData, showDetails, showThumbnails, searchResult } from './response';
import { getAllShows, getShowDetails, getShowThumbnails, getShowsBySearch } from '../../src/services/service';

// Mock module with Jest mock functions
jest.mock("@/services/api");

describe("TV shows app service", () => {
  
  it("api to be defined", () => {
    expect(api).toBeDefined();
  });

  it('getAllShows api should call and return result', () => {
    const tvshow = { shows: showsData };
    api.get.mockResolvedValue(tvshow);
    getAllShows().then(((result) => {
      expect(result).toEqual(tvshow);
    }));
  });

  it('getShowDetails api should call and return result', () => {
    api.get.mockResolvedValue(showDetails);
    getShowDetails(106).then(((result) => {
      expect(result).toEqual(showDetails);
    }));
  });

  it('getShowThumbnails api should call and return result', () => {
    api.get.mockResolvedValue(showThumbnails);
    getShowThumbnails(106).then(((result) => {
      expect(result).toEqual(showThumbnails);
    }));
  });

  it('getShowsBySearch api should call and return result', () => {
    api.get.mockResolvedValue(searchResult);
    getShowsBySearch('game of thrones').then(((result) => {
      expect(result).toEqual(searchResult);
    }));
  });

});
