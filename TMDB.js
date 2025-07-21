import React, { useEffect, useState } from "react";

function TMDB() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=49c4858bf411c1add63586f611236d34`);
      const data = await res.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div className="tmdb">
      <h2>Popular Movies from TMDB</h2>
      <div className="movie-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.overview.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TMDB;
