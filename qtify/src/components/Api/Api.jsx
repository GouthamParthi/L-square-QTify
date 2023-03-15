import axios from "axios";

const LandingBackendURL = "https://qtify-backend-labs.crio.do/albums/";
export async function fetchTopAlbums() {
  try {
    const songsResponse = await axios.get(`${LandingBackendURL}/top`);
    return songsResponse.data;
  } catch (e) {
    alert("You should check the backend is running");
  }
}
export async function fetchNewAlbums() {
  try {
    const songsResponse = await axios.get(`${LandingBackendURL}/new`);
    return songsResponse.data;
  } catch (e) {
    alert("You should check the backend is running");
  }
}
export async function fetchGenres() {
  try {
    const songsResponse = await axios.get(`${LandingBackendURL}/genres`);
    return songsResponse.data;
  } catch (e) {
    alert("You should check the backend is running");
  }
}
export async function fetchSongs() {
  try {
    const songsResponse = await axios.get(`${LandingBackendURL}/songs`);
    return songsResponse.data;
  } catch (e) {
    alert("You should check the backend is running");
  }
}
export async function fetchSlug(slug) {
  try {
    const songsResponse = await axios.get(`${LandingBackendURL}/${slug}`);
    return songsResponse.data;
  } catch (e) {
    alert("You should check the backend is running");
  }
}
