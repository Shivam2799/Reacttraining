import React, { useEffect, useState } from "react";
import MovieBox from "../MovieBox";
import "../index.css";
export default function Movie() {
  const [movieRating, setMovieRating] = useState(1);
  setTimeout(() => {
    setMovieRating(movieRating + 0.3);
  }, 5000);
  return (
    <div className={"mainConatiner"}>
      <MovieBox
        image="movie1.jpg"
        movieName={"the scam 1992"}
        releaseDate={"2 march"}
        rating={movieRating}
      />
      <MovieBox
        image="movie2.jpg"
        movieName={"Money heist"}
        releaseDate={"13 Sep"}
        rating={"9"}
      />
      <MovieBox
        image="movie3.jpg"
        movieName={"See"}
        releaseDate={"23 feb"}
        rating={"7"}
      />
      <MovieBox
        image="movie4.jpg"
        movieName={"Avengers endgame"}
        releaseDate={"1 June"}
        rating={"8"}
      />
    </div>
  );
}