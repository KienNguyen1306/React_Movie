import * as types from "../../constants/ActionTypes.js";
const defaultState = {
  detailFilm: {},
  loading: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.ACT_DETAIL_FILM:
      return {
        ...state,
        loading: true,
        detailFilm: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
