import { getMovies, getMovieById, getSuggestion } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { movieId }) => getMovieById(movieId),
    suggestion: (_, { movieId }) => getSuggestion(movieId)
  }
};

export default resolvers;
