import Favorites from "../components/Favorites";

function FavoritesPage({ favorites, toggleFavorite }) {
  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Your Favorites</h2>
      <Favorites favorites={favorites} onToggleFavorite={toggleFavorite} />
    </div>
  );
}

export default FavoritesPage;