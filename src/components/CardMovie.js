import React from "react";

const CardMovie = ({ movie }) => {
  const { index, image, title } = movie;
  return (
    <div id={`card-${index}`} className="card">
      <img src={image} alt={image} />
      <div className="details">
        {title}
      </div>
    </div>
  );
};

export default CardMovie;
