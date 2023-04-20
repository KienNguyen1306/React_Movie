import { combineReducers } from "redux";
import ShowReducer from "./ShowReducer";
import Search from "./Search";

import UserReducer from "./UserReducer";
import Commentreducer from "./Commentreducer";
import listFilmhome from "./films/listFilmHome";
import listFilmTrending from "./films/listFilmTrending";
import listFilmGenres from "./films/listFilmGenres";
import detailFilm from "./films/filmDetail";
import userReducer from "./user/userReducer";
import commentReducer from "./comment/comment";
import listFilmUpcoming from "./films/listFilmUpcoming";
import listFilmFiction from "./films/listFilmFiction";
import listFilmCinemo from "./films/listFilmCinemo";
import listFilmSimilar from "./films/listFilmSimilar";

const appReducers = combineReducers({
  ShowReducer,
  Search,
  UserReducer,
  Commentreducer,

  listFilmhome,
  listFilmTrending,
  listFilmGenres,
  detailFilm,
  userReducer,
  commentReducer,
  listFilmUpcoming,
  listFilmFiction,
  listFilmCinemo,
  listFilmSimilar,
});

export default appReducers;
