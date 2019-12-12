import React from 'react'
import PropTypes from 'prop-types'
import './../App.css'

function getLeft(data, moviesList) {
    if(Object.keys(data.movies).length > 0) {
        return Object.keys(data.movies).map((hero) => {
            const movies = data.movies[hero];
            return (
                <div key={hero}>
                    <button className="button" onClick={() => moviesList(movies)}>{hero}</button>
                </div>
            )
        })
    }
    return (
        <h2 className="leftHeader">Loading...</h2>
    )
}

function getUrl(movie) {
    return "https://www.youtube.com/embed/" + movie
}

function getRight(data) {
    const movieName = data.movieName;
    const movies = Object.values(data.moviesList);
    if(movieName === "" || movieName === "ALL MOVIES") {
        if (movies.length > 0) {
            return movies.map((movie) => {
                return (
                    <iframe
                        allowfullscreen="allowfullscreen"
                        width="420"
                        height="145" src={getUrl(movie)}
                    >
                    </iframe>

                )
            })
        }
        return (
            <h1 className="text"><marquee height="85%" scrollamount="4" direction="up" loop={true}> please select a Hero
            </marquee></h1>
        )
    }
    if(movies.length > 0) {
        return (
            <iframe
                allowfullscreen="allowfullscreen"
                width="420"
                height="280" src={getUrl(data.moviesList[movieName])}>
            </iframe>
        )
    }
    return (
        <h1 className="text"><marquee height="85%" scrollamount="4" direction="up" loop={true}> please select a Hero
        </marquee></h1>
    )
}

function getFiltersDropDown(list, selectedMovie) {
    if(list.openFilters) {
    const array = Object.keys(list.moviesList);
    if(array.length > 0) {
        array.splice(0, 0, "ALL MOVIES")
    }
        return array.map((movieName) => {
            return (
                <div>
               <button onClick={() => selectedMovie(movieName)} className="filters">{movieName}</button>
                </div>
                    )
        })
    }
    return null;
}

class Movies extends React.Component {

    componentDidMount() {
        fetch("https://api.mlab.com/api/1/databases/gopidetails/collections/gopiDetails?apiKey=kIOuLscCmhbeSOoBEtJUYPV6vy1TMIaQ")
            .then(res => res.json())
            .then(movies => {
                this.props.getMovies(movies);
            })
    }
    render() {
        return (
            <div>
                <div className="splitLeft">
                    <div>
                        <h3 className="leftHeader">Select a Hero</h3>
                        {getLeft(this.props.data, this.props.moviesList)}
                    </div>
                </div>
                <div className="splitRight">
                    <div>
                        <div className="header">VIDEOS HUB</div>
                        <div className="splitLeftInRight">
                            <div className="filtersSection">
                                <button onClick={() => this.props.getFilters()} className="filterButton">Filter Movies</button>
                                <div>
                                    {getFiltersDropDown(this.props.data, this.props.selectedMovie)}
                                </div>
                            </div>
                        </div>
                        <div className="splitRightInRight">
                            <div className="centered">
                                {getRight(this.props.data)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

Movies.propTypes = {
    data:
        PropTypes.shape({}).isRequired,
    moviesList: PropTypes.func.isRequired
};
export default Movies
