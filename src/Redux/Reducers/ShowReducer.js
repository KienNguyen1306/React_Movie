import * as types from "../constants/ActionTypes.js";
const defaultState = {
  isBar: false,
  isSearch: false,
  isModal: false,
  isLoading: false,
  isReplycomnet: false,
  isFromReplyComent: false,
};

const isShows = (state = defaultState, action) => {
  let newObj;
  switch (action.type) {
    case types.TOGGLE_MENU_BAR:
      newObj = { ...state, isSearch: false, isBar: !state.isBar };
      return newObj;
    case types.TOGGLE_SEARCH:
      newObj = { ...state, isBar: false, isSearch: !state.isSearch };
      return newObj;
    case types.TOGGLE_MODAL:
      newObj = { ...state, isModal: !state.isModal };
      return newObj;
    case types.TOGGLE_LOADING:
      newObj = { ...state, isLoading: action.payload };
      return newObj;

    case types.TOGGLE_REPLYCOMMENT:
      newObj = { ...state, isReplycomnet: !state.isReplycomnet };
      return newObj;
    case types.TOGGLE_FROMREPLYCOMMENT:
      newObj = {
        ...state,
        isFromReplyComent: !state.isFromReplyComent,
        isReplycomnet: !state.isReplycomnet,
      };
      return newObj;
    default:
      return state;
  }
};

export default isShows;
