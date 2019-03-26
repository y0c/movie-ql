import films from "./Film.json";

// movie json key trasnform lowercase
const transformObjectKey = obj => {
  const newObj = {};
  for (const a in obj) {
    newObj[a.toLowerCase()] = obj[a];
  }
  return newObj;
};

const mapGenerateId = (obj, i) => {
  obj.id = i;
  return obj;
};

let movies = films.map(transformObjectKey).map(mapGenerateId);

console.log(movies);

const getById = id => movies.find(v => v.id === id);

const removeMovie = id => {
  const filteredMovies = movies.filter(m => m.id !== id);
  if (movies.length > filteredMovies.length) {
    movies = filteredMovies;
    return true;
  } else {
    return false;
  }
};

const addMovie = (title, year, runtime) => {
  const newMovie = {
    id: movies.length + 1,
    title,
    year,
    runtime
  };
  movies.push(newMovie);
  return newMovie;
};

export { movies, getById, addMovie, removeMovie };
