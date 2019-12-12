import { connect } from 'react-redux'
import { moviesList } from '../actions'
import { getFilters } from '../actions'
import { selectedMovie } from '../actions'
import { getMovies } from '../actions'
import Movies from '../components/Movies'
const getMoviesData = (data) => {
    return data;
};

function mapStateToProps(state) {
    return {
    data: getMoviesData(state.data)
}};
const mapDispatchToProps = dispatch => ({
    moviesList: id => dispatch(moviesList(id)),
    getFilters: () => dispatch(getFilters()),
    selectedMovie: (movie) => dispatch(selectedMovie(movie)),
    getMovies: (movies) => dispatch(getMovies(movies))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movies)
