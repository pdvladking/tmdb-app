function MovieCard({ movie, onToggleFavorite, isFavorite }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{movie.title}</h2>
        <p className="text-gray-400">{movie.year}</p>
        <button
          onClick={() => onToggleFavorite(movie)}
          className={`mt-3 px-4 py-2 rounded-lg font-medium ${
            isFavorite
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;