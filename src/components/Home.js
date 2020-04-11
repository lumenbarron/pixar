import React from "react";
import MovieList from "./MovieList";

const Home = () => {
    return(
        <div>
<MovieList sliceFirst="0" sliceSecond = "9" />
<MovieList sliceFirst="10" sliceSecond = "18" />
        </div>
    )
};

export default Home;