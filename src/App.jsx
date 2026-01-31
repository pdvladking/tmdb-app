import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, [API_KEY]);

  const toggleFavorite = (movie) => {
    setFavorites((prev) =>
      prev.find((fav) => fav.id === movie.id)
        ? prev.filter((fav) => fav.id !== movie.id)
        : [...prev, movie]
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 flex justify-between items-center bg-gray-800">
        <h1 className="text-2xl font-bold">🎬 Movie App</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/favorites" className="hover:underline">Favorites</Link>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              movies={movies}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/favorites"
          element={<FavoritesPage favorites={favorites} toggleFavorite={toggleFavorite} />}
        />
      </Routes>
    </div>
  );
}

export default App;