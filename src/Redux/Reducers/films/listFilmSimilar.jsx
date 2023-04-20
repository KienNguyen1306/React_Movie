import * as types from "../../constants/ActionTypes.js";
const defaultState = {
  listFilmSimilar: [],
  loading: false,
};

const listFilmSimilar = (state = defaultState, action) => {
  switch (action.type) {
    case types.ACT_LIST_FILM_SIMILAR:
      return {
        ...state,
        loading: true,
        listFilmSimilar: action.payload,
      };

    default:
      return state;
  }
};

export default listFilmSimilar;
