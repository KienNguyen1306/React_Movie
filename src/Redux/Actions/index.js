import filmService from "../../services/filmService";
import userService from "../../services/userService";
import commentService from "../../services/commentService";
import * as types from "./../constants/ActionTypes";
import * as url from "./../constants/UrlApi";

export const actTogglebar = () => {
  return {
    type: types.TOGGLE_MENU_BAR,
  };
};

export const actToggleSearch = () => {
  return {
    type: types.TOGGLE_SEARCH,
  };
};

export const actToggleModal = () => {
  return {
    type: types.TOGGLE_MODAL,
  };
};

export const actToggleReplycoment = () => {
  return {
    type: types.TOGGLE_REPLYCOMMENT,
  };
};

export const actToggleFromComent = () => {
  return {
    type: types.TOGGLE_FROMREPLYCOMMENT,
  };
};

export const actSearch = (search) => {
  return {
    type: types.CHANGE_SEARCH,
    search,
  };
};

export const actMessage = (error) => {
  return {
    type: types.MESSAGE_FAILURE,
    payload: error,
  };
};

export const actToogleloading = (check) => {
  return {
    type: types.TOGGLE_LOADING,
    payload: check,
  };
};

// ================================= action api chung =====================

export const FILTER_FILM = (suscess) => {
  return {
    type: types.FILTER_FILM,
    payload: suscess,
  };
};

// ----------------------- fileter film--------------
export const actFilterFilm = (data) => {
  return (dispatch) => {
    fetch(url.URL_FILTER_FILM(data.genres, data.year, data.countries))
      .then((response) => response.json())
      .then((data) => {
        dispatch(FILTER_FILM(data));
      });
  };
};

export const getActComment = () => {
  return {};
};
/////////////////////////////////////////////////////////////////////////////////////
// setType
export const actSetType = (type) => {
  return {
    type: types.ACT_SET_TYPE,
    payload: type,
  };
};

// list film
export const actListFilmHome = (films, page, totalPages) => {
  return {
    type: types.ACT_LIST_FILM_HOME,
    payload: { films, page, totalPages },
  };
};

export function actListFilmHoneAsync(page = 1) {
  return async (dispatch) => {
    const response = await filmService.getListFilm(page);
    const films = response.data.results;
    let totalPages = response.data.total_pages;
    dispatch(actListFilmHome(films, page, totalPages));
  };
}

//trending
export const actListFilmTrending = (films) => {
  return {
    type: types.ACT_LIST_FILM_TRENDING,
    payload: films,
  };
};

export function actListFilmTrendingAsync() {
  return async (dispatch) => {
    const response = await filmService.getListFilmtrending();
    const films = response.data.results;
    dispatch(actListFilmTrending(films));
  };
}

//Generes
export const actListFilmGenres = (films, page, totalPage) => {
  return {
    type: types.ACT_LIST_FILM_GENRES,
    payload: { films, page, totalPage },
  };
};

export function actListFilmGenresAsync(genres, page = 1, type = 2, filter) {
  return async (dispatch) => {
    const response = await filmService.getFilmGenres(
      genres,
      page,
      type,
      filter
    );
    const films = response.data.results;
    let totalPages = response.data.total_pages;
    dispatch(actListFilmGenres(films, page, totalPages));
  };
}

//detail film
export const actDetailFilm = (film) => {
  return {
    type: types.ACT_DETAIL_FILM,
    payload: film,
  };
};

export function actDetailFilmAsync(idFilm) {
  return async (dispatch) => {
    const response = await filmService.getFilmDetail(idFilm);
    const film = response.data;
    dispatch(actDetailFilm(film));
  };
}

//upcoming
export const actListUpcoming = (films) => {
  return {
    type: types.ACT_UPCOMING,
    payload: films,
  };
};

export function actListFilmUpcomingAsync() {
  return async (dispatch) => {
    const response = await filmService.getListFilmUpcoming();
    const films = response.data.results;
    dispatch(actListUpcoming(films));
  };
}

//fiction
export const actListFiction = (films) => {
  return {
    type: types.ACT_LIST_FILM_FICTION,
    payload: films,
  };
};

export function actListFilmFictionAsync() {
  return async (dispatch) => {
    const response = await filmService.getListFilmFiction();
    const films = response.data.results;
    dispatch(actListFiction(films));
  };
}

//cinemo
export const actListCinemo = (films) => {
  return {
    type: types.ACT_LIST_FILM_CINEMO,
    payload: films,
  };
};

export function actListFilmCinemoAsync() {
  return async (dispatch) => {
    const response = await filmService.getListFilmCinemo();
    const films = response.data.results;
    dispatch(actListCinemo(films));
  };
}

//fiction
export const actListSimilar = (films) => {
  return {
    type: types.ACT_LIST_FILM_SIMILAR,
    payload: films,
  };
};

export function actListFilmSimilarAsync(idFilm) {
  return async (dispatch) => {
    const response = await filmService.getListFilmSimilar(idFilm);
    const films = response.data.results;
    dispatch(actListSimilar(films));
  };
}

// ---------------------------------------------------------------------------------------------
//login
export const actLogin = (token, user) => {
  return {
    type: types.ACT_LOGIN,
    payload: { token, user },
  };
};

export function actLoginAsync(infoUser) {
  return async (dispatch) => {
    try {
      const response = await userService.getToken(infoUser);
      const currentUser = await userService.getCurrentUser(
        response.data.access_token
      );
      dispatch(actLogin(response.data, currentUser.data));
      return 200;
    } catch (err) {
      return 400;
    }
  };
}

// login auto
export const actLoginAuto = (user) => {
  return {
    type: types.ACT_LOGIN_AUTO,
    payload: user,
  };
};

export function actLoginAutoAsync(access_token) {
  return async (dispatch) => {
    const currentUser = await userService.getCurrentUser(access_token);
    dispatch(actLoginAuto(currentUser.data));
  };
}

//logout
export const actLogOut = () => {
  return {
    type: types.ACT_LOGOUT,
  };
};

// register user
export function actRegisterUserAsync(data) {
  return async (dispatch) => {
    try {
      await userService.postRegisterUser(data);
      let infoUser = {
        username: data.username,
        password: data.password,
      };
      dispatch(actLoginAsync(infoUser));
    } catch (error) {
      return {
        code: 400,
        error: error.response.data,
      };
    }
  };
}

//get comment
export const actGetComments = (comment) => {
  return {
    type: types.ACT_GET_COMMENT,
    payload: comment,
  };
};

export function actGetCommentsAsync(idFilm) {
  return async (dispatch) => {
    const response = await commentService.getComment(idFilm);
    const comment = response.data;
    dispatch(actGetComments(comment));
  };
}

//post comment
export const actPostComments = (suscess, user) => {
  return {
    type: types.ACT_POST_COMMENT,
    payload: { suscess, user },
  };
};

export function actPostCommentsAsync(data, accessToken, user) {
  return async (dispatch) => {
    const response = await commentService.postComment(data, accessToken);
    const comment = response.data;
    dispatch(actGetComments(comment, user));
  };
}

//reply comment
export const actReplyComments = (suscess, user) => {
  return {
    type: types.ACT_REPLY_COMMENT,
    payload: { suscess, user },
  };
};

export function actReplyCommentsAsync(data, accessToken, user) {
  return async (dispatch) => {
    const response = await commentService.replyComment(data, accessToken);
    const comment = response.data;
    console.log(response);
    dispatch(actReplyComments(comment, user));
  };
}
