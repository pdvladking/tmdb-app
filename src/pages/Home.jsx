import MovieCard from "../components/MovieCard";

function Home({ movies, favorites, toggleFavorite }) {
  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Popular Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={{
              id: movie.id,
              title: movie.title,
              year: movie.release_date?.split("-")[0],
              poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            onToggleFavorite={toggleFavorite}
            isFavorite={favorites.some((fav) => fav.id === movie.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;