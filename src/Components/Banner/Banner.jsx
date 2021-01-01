import React, { useState, useEffect } from "react";
import "./Banner.css";

import axios from "../../Store/axios";
import requests from "../../Store/requests";
function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomMovieIndex = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomMovieIndex]);
      return request;
    })();
  }, []);

  const truncate = (str, n = 125) => {
    if (!str) return;
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(to bottom, rgba(37, 37, 37, 0.52) 50%, #111 100%),
        url(https:///image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
    </header>
  );
}

export default Banner;
