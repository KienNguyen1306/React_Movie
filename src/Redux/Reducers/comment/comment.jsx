import * as types from "../../constants/ActionTypes";

const initialState = {
  comments: [],
  error: null,
};

const Commentreducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ACT_GET_COMMENT:
      return {
        ...state,
        comments: action.payload,
      };

    case types.ACT_POST_COMMENT:
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
    case types.ACT_REPLY_COMMENT:
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

    default:
      return state;
  }
};

export default Commentreducer;
