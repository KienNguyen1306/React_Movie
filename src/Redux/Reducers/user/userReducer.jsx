import * as types from "../../constants/ActionTypes.js";

const initialState = {
  accessToken: localStorage.getItem("accessToken") || null,
  refresh_token: localStorage.getItem("refresh_token") || null,
  user: null,
  isLoading: false,
  messageError: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ACT_LOGIN:
      localStorage.setItem("accessToken", action.payload.token.access_token);
      localStorage.setItem("refresh_token", action.payload.token.refresh_token);
      return {
        ...state,
        isLoading: true,
        user: action.payload.user,
        accessToken: action.payload.token.access_token,
        refresh_token: action.payload.token.refresh_token,
      };

    case types.ACT_LOGIN_AUTO:
      return {
        ...state,
        isLoading: true,
        user: action.payload,
      };
    case types.ACT_LOGOUT:
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refresh_token");
      return {
        ...state,
        accessToken: null,
        refresh_token: null,
        user: null,
        isLoading: false,
        messageError: {},
      };

    default:
      return state;
  }
};

export default reducer;
