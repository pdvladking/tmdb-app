import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-6xl font-extrabold text-white mb-6">
        Tailwind v3 Works!
      </h1>
      <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow hover:bg-gray-200">
        Test Button
      </button>
    </div>
  );
}

export default App;