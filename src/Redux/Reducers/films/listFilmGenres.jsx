import * as types from "../../constants/ActionTypes.js";
const defaultState = {
  loading: false,
  curentPage: 0,
  totalPage: null,
  listFilmGenres: [],
  type: 2,
};

const FetchDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.ACT_LIST_FILM_GENRES:
      return {
        ...state,
        loading: true,
        curentPage: action.payload.page,
        totalPage: action.payload.totalPage,
        listFilmGenres: action.payload.films,
      };
    case types.ACT_SET_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};

export default FetchDataReducer;
