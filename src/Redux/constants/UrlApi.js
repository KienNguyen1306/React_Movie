let api_key = "e2c32d467111c020ae1e2584fc532e39";
let endPoin = "https://api.themoviedb.org/3/";
export let URL = `${endPoin}movie/popular?api_key=${api_key}&language=vi&page=`;

export const API_TRENDING = `${endPoin}trending/all/week?api_key=${api_key}&language=vi&page=`;

export const API_DETAI_FILM = (id_film) => {
  return `${endPoin}movie/${id_film}?api_key=${api_key}&append_to_response=videos&language=vi`;
};

export const API_SEARCH = (search, page = 1) => {
  return `${endPoin}search/movie?api_key=${api_key}&language=vi&query=${search}&page=${page}&include_adult=false`;
};

export const API_FIML_CINEMO = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-03-15&primary_release_date.lte=2022-09-23&api_key=${api_key}&page=`;

export const API_FIML_REGION = (ios, page) =>
  `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&region=${ios}&page=${page}`;

export let URL_LOGIN = "https://kienpro674.pythonanywhere.com/o/token/";
export let URL_COMENT = "https://kienpro674.pythonanywhere.com/comment/";
export let URL_CURRENT_USER =
  "https://kienpro674.pythonanywhere.com/register/current-user";

export let URL_REGISTER = "https://kienpro674.pythonanywhere.com/register/";

export let URL_COMMENT = `https://kienpro674.pythonanywhere.com/comment/?video_id=`;

export let URL_POST_COMMENT = "https://kienpro674.pythonanywhere.com/comment/";
export let URL_POST_REPLY_COMMENT =
  "https://kienpro674.pythonanywhere.com/reply-comment/";

export let URL_FILTER_FILM = (genres, year, countries) => {
  let patGen = "";
  let patYear = "";
  let patcountries = "";
  if (genres !== "") patGen = `&with_genres=${genres}`;
  if (year !== "") patYear = `&primary_release_year=${year}`;
  if (countries !== "") patcountries = `&with_countries=${countries}`;

  return `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=vi&sort_by=popularity.desc&include_adult=false&include_video=false&page=1${patYear}${patGen}${patcountries}`;
};
