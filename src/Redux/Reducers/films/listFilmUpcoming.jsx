import * as types from "../../constants/ActionTypes.js";
const defaultState = {
  listFilmUpcoming: [],
  loading: false,
};

const listFilmUpcoming = (state = defaultState, action) => {
  switch (action.type) {
    case types.ACT_UPCOMING:
      return {
        ...state,
        loading: true,
        listFilmUpcoming: action.payload,
      };

    default:
      return state;
  }
};

export default listFilmUpcoming;
