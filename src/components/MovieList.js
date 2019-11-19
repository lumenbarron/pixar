import React, { Component } from "react";
import "./../styles/movie-list.css";
import axios from "axios";
import { Link } from "react-router-dom";
import CardMovie from "./CardMovie";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      show: false,
      movieOne: ""
    };
  }
  componentDidMount() {
    axios
      .get("http://5dd02a32d5f1a500149a8463.mockapi.io/movies/movies/")
      .then(res => {
        console.log(res.data);
        const movies = res.data;
        this.setState({
          movies,
          show: true,
          movieOne: movies[0]
        });
        console.log(this.state.movieOne);
      })
      .catch(err => {
        console.log(err);
      });
  }

  nextMovie = movies => {
    const newIndex = this.state.movieOne.index + 1;
    console.log("newIndex prev", newIndex);
    this.setState({
      movieOne: movies[newIndex]
    });
  };

  prevtMovie = movies => {
    const prevIndex = this.state.movieOne.index - 1;
    console.log("prevIndex prev", prevIndex);
    this.setState({
      movieOne: movies[prevIndex]
    });
  };

  render() {
    const { movies, movieOne, show } = this.state;
    return (
      <div>
        <div className="row">
          <button
            onClick={() => this.prevtMovie(movies)}
            disabled={movieOne.index === 0}
            className="buttons-carousel flex-center position-btn"
            style={{ left: 20 }}
          >
            <i className="material-icons">chevron_left</i>
          </button>
          {show ? (
            <div className="cards-slider">
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${movieOne.index *
                    (100 / movies.length)}%)`
                }}
              >
                {movies.map(movie => (
                  <Link key={movie.id} to={"/" + movie.id}>
                    <CardMovie key={movie.id} movie={movie} />
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="cont-load-page">
              <span className="center loading-page" />
              <h1 className="">Loading...</h1>
            </div>
          )}
          <button
            onClick={() => this.nextMovie(movies)}
            disabled={ movieOne.index === 4}
            id="buttons-carousel"
            className="buttons-carousel flex-center position-btn"
            style={{ right: 20 }}
          >
            <i className="material-icons">chevron_right</i>
          </button>
        </div>
      </div>
    );
  }
}
