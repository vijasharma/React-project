import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { Link } from "react-router-dom";
import { debounce } from "lodash";

function Service() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (s) => {
    axios
      .get(`http://www.omdbapi.com/?s=${s}&apikey=f17f3a87`)
      .then((response) => {
        setMovies(response?.data?.Search);
      });
    // console.log("Search term:", searchTerm);
  };

  // const originalFunction = () => {
  //   // Your original function logic goes here
  //   console.log('Debounced function called with input value:', searchTerm);
  // };
  const debouncedFunction = useMemo(() => debounce(handleSearch, 500), []);

  useEffect(() => {
    axios
      .get("http://www.omdbapi.com/?s=''&apikey=f17f3a87")
      .then((response) => {
        setMovies(response?.data?.Search);
        //  console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <input
          className="searchInput"
          type="text"
          placeholder="Please Search Movie....."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            debouncedFunction(e.target.value);
          }}
        />{" "}
        <button className="searchBtn" onClick={handleSearch}>
          {" "}
          Search
        </button>
      </div>
      <div className="cart">
        {movies?.map((item, index) => (
          <Link to={`/moviedetails/${item.imdbID}`}>
            <img key={index} src={item?.Poster} alt="movie name" />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Service;
// http://www.omdbapi.com/?i=tt3896198&apikey=f17f3a87
