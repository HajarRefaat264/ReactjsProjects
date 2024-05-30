import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/homePage';
import DetailsPage from './Pages/detailsPage'
import AboutPage from './Pages/aboutPage';
import AddMoviePage from './Components/addMovie';
import ContactUsPage from './Pages/contactUsPage';
import { MoviesProvider } from './contexts/MoviesContext';
import UpdateMoviePage from './Components/UpdateMovie';
import NavbarPage from './Pages/navbarPage';
function App() {
  return (
    <MoviesProvider>
      <Router>
        <NavbarPage />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/add-movie" element={<AddMoviePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/update-movie/:id" element={<UpdateMoviePage />} />
        </Routes>
      </Router>
    </MoviesProvider>
  );
}

export default App;
