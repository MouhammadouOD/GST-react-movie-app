import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rating: 8.8,
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: 9.3,
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: 9.0,
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const handleFilterChange = (type, value) => {
    if (type === "title") {
      setFilterTitle(value);
    } else if (type === "rating") {
      setFilterRating(value);
    }
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating === "" || movie.rating >= parseFloat(filterRating))
    );
  });

  return (
      <Container className="mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="text-center mb-4">My Movie Collection</h1>
                <AddMovie onAddMovie={handleAddMovie} />
                <Filter
                  filterTitle={filterTitle}
                  filterRating={filterRating}
                  onFilterChange={handleFilterChange}
                />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </Container>
  );
};

export default App;
