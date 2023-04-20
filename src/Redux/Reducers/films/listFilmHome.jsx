import * as types from "../../constants/ActionTypes.js";
const defaultState = {
  listFilmHome: [],
  type: 1,
  curentPage: 0,
  totalPage: null,
  loading: false,
};

const FetchDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.ACT_LIST_FILM_HOME:
      return {
        ...state,
        loading: true,
        curentPage: action.payload.page,
        listFilmHome: action.payload.films,
        totalPage: action.payload.totalPages,
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
