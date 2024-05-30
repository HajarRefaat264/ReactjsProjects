import React, { useState, useContext } from 'react';
import  {useNavigate} from 'react-router-dom';
import { MoviesContext } from '../contexts/MoviesContext';

const AddMovie = () => {
  const { addMovie } = useContext(MoviesContext);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title,
      description,
      img,
    };
    addMovie(newMovie);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h1 style={titleStyle}>Add Movie</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={inputStyle}
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={inputStyle}
        required
      />
      <input
        type="text"
        value={img}
        onChange={(e) => setImg(e.target.value)}
        placeholder="Image URL"
        style={inputStyle}
        required
      />
      <button type="submit" style={buttonStyle}>Add Movie</button>
    </form>
  );
};

// Styles
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '0 auto',
};
const titleStyle = {
  textAlign: 'center', // Center the text
};
const inputStyle = {
  margin: '10px 0',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};
const buttonStyle = {
  backgroundColor: '#1358d8',
  color: 'white',
  padding: '10px 20px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default AddMovie;
