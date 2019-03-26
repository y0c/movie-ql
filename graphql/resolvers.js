import { movies, getByTitle, addMovie, removeMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_, { id }) => getByTitle(id)
  },
  Mutation: {
    addMovie: (_, { title, year, runtime }) => addMovie(title, year, runtime),
    removeMovie: (_, { id }) => removeMovie(id)
  }
};

export default resolvers;
