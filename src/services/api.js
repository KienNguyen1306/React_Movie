import axios from "axios";

const API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export const API_2 = axios.create({
  baseURL: "https://kienpro674.pythonanywhere.com/",
});

export default API;
