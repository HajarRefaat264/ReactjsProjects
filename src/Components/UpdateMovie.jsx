// UpdateMovie.js
import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MoviesContext } from '../contexts/MoviesContext';
import { TextField, Button, Box, Typography } from '@mui/material';

const UpdateMovie = () => {
  const { id } = useParams();
  const { movies, updateMovie } = useContext(MoviesContext);
  const navigate = useNavigate();
  const [movie, setMovie] = useState({ title: '', description: '', img: '' });

  useEffect(() => {
    const selectedMovie = movies.find((movie) => movie.id === id);
    if (selectedMovie) {
      setMovie(selectedMovie);
    }
  }, [id, movies]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie(movie);
    navigate(`/details/${id}`);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 3 }}>
      <Typography variant="h5">Update Movie</Typography>
      <TextField
        fullWidth
        label="Title"
        name="title"
        value={movie.title}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Description"
        name="description"
        value={movie.description}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Image URL"
        name="img"
        value={movie.img}
        onChange={handleChange}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Update Movie
      </Button>
    </Box>
  );
};

export default UpdateMovie;
