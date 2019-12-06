import React, { Component } from 'react';
import { MovieList, GenreList } from '../components/Main';
import { getGenres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
      currentPage: 1
    }
  }

  componentDidMount() {
    const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <GenreList
              genres={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={this.state.selectedGenre}
            />
          </div>
          <div className="col-9">
            <MovieList />
          </div>
        </div>
      </div>
    )
  }
}