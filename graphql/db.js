import axios from "axios";

const getMovies = (limit, rating) => {
  const API_URL = "https://yts.am/api/v2/list_movies.json";
  return axios
    .get(API_URL, {
      params: {
        limit,
        minimum_rating: rating
      }
    })
    .then(res => res.data)
    .then(result => result.data.movies);
};

const getMovieById = movieId => {
  const API_URL = "https://yts.am/api/v2/movie_details.json";
  return axios
    .get(API_URL, {
      params: {
        movie_id: movieId
      }
    })
    .then(res => res.data)
    .then(result => result.data.movie);
};

const getSuggestion = movieId => {
  const API_URL = "https://yts.am/api/v2/movie_suggestions.json";
  return axios
    .get(API_URL, {
      params: {
        movie_id: movieId
      }
    })
    .then(res => res.data)
    .then(result => result.data.movies);
};

export { getMovies, getMovieById, getSuggestion };
