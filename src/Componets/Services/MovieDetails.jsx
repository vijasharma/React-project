import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './index.css'

export default function MovieDetails() {
  const { id } = useParams();
//   console.log(id);

  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=f17f3a87&i=${id}`)
      .then((response) => {
        setMovie(response?.data);
         console.log("data", response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div>
      <div className="movieData">
        <h1>___MOVIE DETAILS___</h1>
        <img src={movie.Poster} alt="My" />
        <p>Actor Name: {movie.Actors} </p>
        <p> Movie Award: {movie.Awards} </p>
        <p> Box-office:{movie.BoxOffice}</p>
        <p>Country: {movie.Country}</p>
        <p> Rate: {movie.Rated}</p>
        <p> Imdb: {movie.imdbRating} </p>
        <p>Writter:{movie.Writer} </p>
        <p>Title{movie.Title} </p>
      </div>
    </div>
  );
}
