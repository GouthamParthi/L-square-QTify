import axios from "axios";

const AlbumBackendURL = "https://qtify-backend-labs.crio.do/albums";
const SongsBackendURL = "https://qtify-backend-labs.crio.do";
export async function fetchTopAlbums() {
  try {
    const songsResponse = await axios.get(`${AlbumBackendURL}/top`);
    return songsResponse.data;
  } catch (e) {
    alert("You should check the backend is running");
  }
}
export async function fetchNewAlbums() {
  try {
    const songsResponse = await axios.get(`${AlbumBackendURL}/new`);
    return songsResponse.data;
  } catch (e) {
    alert("You should check the backend is running");
  }
}
export async function fetchGenres() {
  try {
    const songsResponse = await axios.get(`${SongsBackendURL}/genres`);
    return songsResponse.data.data;
  } catch (e) {
    alert("You should check the backend is running");
  }
}
export async function fetchSongs() {
  try {
    const songsResponse = await axios.get(`${SongsBackendURL}/songs`);
    return songsResponse.data;
  } catch (e) {
    alert("You should check the backend is running");
  }
}
export async function fetchSlug(slug) {
  try {
    const songsResponse = await axios.get(`${AlbumBackendURL}/${slug}`);
    return songsResponse.data;
  } catch (e) {
    alert("You should check the backend is running");
  }
}
