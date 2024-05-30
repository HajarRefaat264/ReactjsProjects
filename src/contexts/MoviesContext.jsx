
import React, { createContext, useState, useEffect } from 'react';


const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  const addMovie = (movie) => {
    fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    })
      .then(response => response.json())
      .then(newMovie => setMovies([...movies, newMovie]));
  };

  const deleteMovie = (id) => {
    fetch(`http://localhost:3000/movies/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setMovies(movies.filter(movie => movie.id !== id));
    });
  };

  const updateMovie = (updatedMovie) => {
    fetch(`http://localhost:3000/movies/${updatedMovie.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedMovie),
    })
      .then(response => response.json())
      .then(() => {
        setMovies(movies.map(movie => (movie.id === updatedMovie.id ? updatedMovie : movie)));
      });
  };

  return (
    <MoviesContext.Provider value={{ movies, addMovie, deleteMovie, updateMovie }}>
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesContext, MoviesProvider };
