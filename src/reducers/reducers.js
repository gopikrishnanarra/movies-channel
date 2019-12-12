const defaultState = {
    movies: {},
    moviesList: {},
    openFilters: false,
    movieName: ""
};

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_FILTERS':
            return {
                ...state,
                openFilters: !state.openFilters
            };
        case 'MOVIES_LIST':
            return {
                ...state,
                moviesList: action.id,
                movieName: ""
            };
        case 'SELECTED_MOVIE':
        return {
            ...state,
            movieName: action.movie
        };
        case 'GET_MOVIES':
            return {
            ...state,
            movies: action.movies[0].movies
        };
        default:
            return state
    }
};
export default reducers
