import React, { Component } from "react";
//import ReactDOM from "react-dom";
import axios from "axios";
import ReactPlayer from "react-player";
import "./../styles/modal-video.css";
import "./../styles/movie.css";
// import { Link } from 'react-router-dom';

export default class Movie extends Component {
  state = {
    movie: "",
    showVideo: false,
    playing: false
  };

  componentDidMount() {
    let id = this.props.match.params.movie_id;
    console.log("id", id);
    axios
      .get("http://5dd02a32d5f1a500149a8463.mockapi.io/movies/movies/" + id)
      .then(res => {
        console.log(res.data);
        const movie = res.data;
        this.setState({ movie: movie });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  showVideo = () => {
    this.setState({ showVideo: true, playing: true });
  };

  hideVideo = () => {
    this.setState({ showVideo: false, playing: false });
    console.log(this.state);
  };

  render() {
    const { movie, showVideo } = this.state;
    console.log(this.state.movie);
    return (
      <div className="container margin-top">
        <div className="row">
          <div className="col s12 m6 l6">
            <img
              className="image-poster"
              src={movie.poster}
              alt={movie.title}
            />
          </div>
          <div className="col s12 m6 l6">
            <h4>{movie.title}</h4>
            <div className="card-content">
              <h6>Type : {movie.type}</h6>
              <p>Summary:</p>
              <p>{movie.summary}</p>

              <button
                type="button"
                onClick={this.showVideo}
                className="btn-small blue-grey"
              >
                Show Video
              </button>
              <ModalVideo
                showVideo={showVideo}
                handleClose={this.hideVideo}
                playVidep={this.playVideo}
              >
                <ReactPlayer url={movie.video} playing={this.state.playing} />
              </ModalVideo>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const ModalVideo = ({ handleClose, showVideo, children }) => {
  const showHideClassName = showVideo
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button onClick={handleClose} className="buttons-close">
          <i className="material-icons">close</i>
        </button>
        {children}
      </section>
    </div>
  );
};
