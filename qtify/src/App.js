import Navbar from "./components/Navabar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import TopAlbums from "./components/TopAlbums/TopAlbums";
import NewAlbums from "./components/NewAlbums/NewAlbums";
import Songs from "./components/Songs/Songs";
import FAQs from "./components/FAQs/FAQs";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <TopAlbums />
      <NewAlbums />
      <hr style={{ border: "1px solid var(--color-primary)", width: "100%" }} />
      <Songs />
      <hr style={{ border: "1px solid var(--color-primary)", width: "100%" }} />
      <FAQs />
    </div>
  );
}
