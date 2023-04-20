import * as types from "../../constants/ActionTypes.js";
const defaultState = {
  listFilmFiction: [],
  loading: false,
};

const listFilmFiction = (state = defaultState, action) => {
  switch (action.type) {
    case types.ACT_LIST_FILM_FICTION:
      return {
        ...state,
        loading: true,
        listFilmFiction: action.payload,
      };

    default:
      return state;
  }
};

export default listFilmFiction;
