import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../Css/Home.css'; 
import { MoviesContext } from '../contexts/MoviesContext'; 

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies, deleteMovie } = useContext(MoviesContext);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = movies.find((movie) => movie.id === id);
    setMovie(selectedMovie);
  }, [id, movies]);

  if (!movies.length) {
    return <div>Loading...</div>;
  }

  const handleDelete = () => {
    deleteMovie(id);
    navigate("/")

  };

  const handleUpdate = () => {
    navigate(`/update-movie/${id}`);
  };

  return (
    <div>
      {movie ? (
        <>
          <div className="card-container">
            <div className="card-wrapper">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt={movie.title}
                  height="140"
                  image={movie.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {movie.description}
                  </Typography>
                </CardContent>
                <Button onClick={handleDelete} color="error">Delete</Button>
                <Button onClick={handleUpdate} color="primary">Update</Button>
              </Card>
            </div>
          </div>
        </>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};

export default Details;
