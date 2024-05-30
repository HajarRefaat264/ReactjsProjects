import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../Css/Home.css'; // Import CSS file for custom styling
import { MoviesContext } from '../contexts/MoviesContext'; // Import MoviesContext

const Home = () => {
  const { movies } = useContext(MoviesContext); // Use useContext to get movies from MoviesContext

  return (
    <div className="card-container">
      {movies.map((movie, index) => (
        <div key={movie.id} className="card-wrapper">
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
            <CardActions>
              <Button size="small"></Button>
              <Link to={`/details/${movie.id}`} style={{ textDecoration: 'none' }}>
                <Button size="small">View Details</Button>
              </Link>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Home;
