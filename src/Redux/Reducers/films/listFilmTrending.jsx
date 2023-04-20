import * as types from "../../constants/ActionTypes.js";
const defaultState = {
 
  listFilmTrending: [],
};

const FetchDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.ACT_LIST_FILM_TRENDING:
      return {
        ...state,
        listFilmTrending: action.payload,
      };
    default:
      return state;
  }
};

export default FetchDataReducer;
