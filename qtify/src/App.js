import Navbar from "./components/Navabar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import { useEffect, useState } from "react";
import axios from "axios";
import Section from "./components/Section/Section";
export default function App() {
  const [listOfSongs, setListOfSongs] = useState([]);
  const fetchSongs = async () => {
    try {
      const songsResponse = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      console.log(songsResponse.data);
      setListOfSongs(songsResponse.data);
    } catch (e) {
      alert("You should check the backend is running");
    }
  };
  useEffect(() => {
    const handleFetch = async () => {
      await fetchSongs();
    };
    handleFetch();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      {listOfSongs ? (
        <Section title="Top Album" listOfSongs={listOfSongs} />
      ) : null}
    </div>
  );
}
