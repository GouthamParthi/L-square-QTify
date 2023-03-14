import Navbar from "./components/Navabar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import TopAlbums from "./components/TopAlbums/TopAlbums";
import NewAlbums from "./components/NewAlbums/NewAlbums";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <TopAlbums />
      <NewAlbums />
    </div>
  );
}
