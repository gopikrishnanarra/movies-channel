export const moviesList = id => ({
    type: 'MOVIES_LIST',
    id
});
export const getFilters = () => ({
    type: 'GET_FILTERS',
});
export const selectedMovie = (movie) => ({
    type: 'SELECTED_MOVIE',
    movie: movie
});
export const getMovies = (movies) => ({
    type: 'GET_MOVIES',
    movies: movies
});
