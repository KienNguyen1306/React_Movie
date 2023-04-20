import * as types from "../constants/ActionTypes.js";

const initialState = {
  comments: [],
  error: null,
};

const Commentreducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COMMENT_REQUEST:
      return { ...state, isLoading: true };
    case types.COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.payload,
      };
    case types.COMMENT_FAILURE:
      return { ...state, error: action.payload, isLoading: false };

    case types.POST_COMMENT_REQUEST:
      return { ...state, isLoading: true };
    case types.POST_COMMENT_SUCCESS:
      let newComment = {
        content: action.payload.suscess.content,
        created_at: action.payload.suscess.created_at,
        id: action.payload.suscess.id,
        replies: [],
        video_id: action.payload.suscess.video_id,
        user: action.payload.user,
      };
      return {
        ...state,
        comments: [newComment, ...state.comments],
      };
    case types.POST_COMMENT_FAILURE:
      return { ...state };

    case types.POST_REPLY_COMMENT_REQUEST:
      return { ...state, isLoading: true };
    case types.POST_REPLY_COMMENT_SUCCESS:
      let resulfs = [...state.comments];
      let newReply = {
        comment: action.payload.suscess.comment,
        content: action.payload.suscess.content,
        created_at: action.payload.suscess.created_at,
        user: action.payload.user,
      };

      let FindComment = resulfs.find(
        (item) => item.id === action.payload.suscess.comment
      );

      FindComment.replies.push(newReply);
      return {
        ...state,
        comment: resulfs,
      };
    case types.POST_REPLY_COMMENT_FAILURE:
      return { ...state };

    default:
      return state;
  }
};

export default Commentreducer;
