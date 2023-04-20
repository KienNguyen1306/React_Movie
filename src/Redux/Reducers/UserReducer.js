import * as types from "../constants/ActionTypes.js";

const initialState = {
  accessToken: localStorage.getItem("accessToken") || null,
  refresh_token: localStorage.getItem("refresh_token") || null,
  user: null,
  error: null,
  isLoading: false,
  messageError: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (types.LOGIN_REQUEST, types.REGISTER_REQUEST):
      return { ...state, isLoading: true };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
        error: null,
        isLoading: false,
      };
    case types.REFRESH_TOKEN:
      return {
        ...state,
        accessToken: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
        error: null,
        isLoading: false,
      };
    case types.LOGIN_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case types.FETCH_USER_REQUEST:
      return { ...state, isLoading: true };
    case types.FETCH_USER_SUCCESS:
      return { ...state, user: action.payload, error: null, isLoading: false };
    case types.FETCH_USER_FAILURE:
      return { ...state, error: action.payload, isLoading: false };

    case types.REGISTER_REQUEST:
      return { ...state, user: action.payload };
    case types.REGISTER_SUCCESS:
      return { ...state, user: action.payload };

    case types.MESSAGE_FAILURE:
      return { ...state, messageError: action.payload };

    case types.LOG_OUT_USER:
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refresh_token");
      return { ...state, accessToken: null, refresh_token: null, user: null };
    default:
      return state;
  }
};

export default reducer;
