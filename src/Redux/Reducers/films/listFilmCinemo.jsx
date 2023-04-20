import * as types from "../../constants/ActionTypes.js";
const defaultState = {
  listFilmCinemo: [],
  loading: false,
};

const listFilmCinemo = (state = defaultState, action) => {
  switch (action.type) {
    case types.ACT_LIST_FILM_CINEMO:
      return {
        ...state,
        loading: true,
        listFilmCinemo: action.payload,
      };

    default:
      return state;
  }
};

export default listFilmCinemo;
