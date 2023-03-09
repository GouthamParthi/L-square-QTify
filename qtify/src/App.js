import Navbar from "./components/Navabar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Carousel from "./components/Carousal/Carousel";
import { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const [listOfSongs, setListOfSongs] = useState([]);
  const fetchSongs = async () => {
    try {
      const songsResponse = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=025e2d8b1a2b665ad499bc1179bb0d38"
      );
      console.log(songsResponse.data.results);
      setListOfSongs(songsResponse.data.results);
    } catch (e) {
      alert("You should check the backend is running");
    }
  };
  useEffect(() => {
    const handleFetch = async () => {
      await fetchSongs();
    };
    handleFetch();
    console.log(listOfSongs);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      {listOfSongs.length != 0 ? <Carousel listOfSongs={listOfSongs} /> : null}
    </div>
  );
}
