import MovieCard from "./MovieCard";

function Favorites({ favorites, onToggleFavorite }) {
  if (favorites.length === 0) {
    return (
      <div className="p-6 text-center text-gray-400">
        No favorites yet. Add some movies!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {favorites.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onToggleFavorite={onToggleFavorite}
          isFavorite={true}
        />
      ))}
    </div>
  );
}

export default Favorites;