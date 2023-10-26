import "./App.css";
import OnePointSearch from "./components/onePointAPI/OnePointSearch";
import SpotifySearch from "./components/spotifyAPI/SpotifySearch";

function App() {
  return (
    <div className="content">
      <OnePointSearch />
      <SpotifySearch />
    </div>
  );
}

export default App;
