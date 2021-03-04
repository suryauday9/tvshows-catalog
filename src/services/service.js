import api from "./api";

const fetchUrl = "http://api.tvmaze.com";

// get all shows and genres data
const getAllShows = () => api.get(fetchUrl + '/shows', { useCache: true });

// get specific show details
const getShowDetails = (showId) => api.get(fetchUrl + '/shows/' + showId);

// get specific show thumbnails
const getShowThumbnails = (showId) => api.get(fetchUrl + '/shows/' + showId + '/images');

// Get Show Names by search term
const getShowsBySearch = (searchTerm) => api.get(fetchUrl + '/search/shows?q=' + searchTerm);

export { getAllShows, getShowDetails, getShowThumbnails, getShowsBySearch };
