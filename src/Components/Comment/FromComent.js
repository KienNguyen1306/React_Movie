// -------------------- react ------------------
import { useRef, useState } from "react";
// ----------------------- redux ---------------------
import { useSelector, useDispatch } from "react-redux";
// ----------------------- action ---------------
import {
  actPostCommentsAsync,
  actReplyCommentsAsync,
  actToggleModal,
} from "../../Redux/Actions";
// -------------------- react router dom -------
import { useParams } from "react-router-dom";

function FromComent({ isReplyCom, comment_id, onClick }) {
  let textAreaRef = useRef();
  const [fromValue, setFromValue] = useState("");

  let dispatch = useDispatch(); //useDispatch
  let { user, accessToken } = useSelector((state) => state.userReducer); //useSelector
  let { id } = useParams();

  function handelOnchangeValue(e) {
    setFromValue(e.target.value);
  }

  // post comment
  function handelSubmitComment() {
    if (!user) dispatch(actToggleModal());
    if (user) {
      let data = {
        user: user.id,
        video_id: +id,
        content: fromValue,
      };
      // dispatch(actPostComment(data, accessToken, user));
      dispatch(actPostCommentsAsync(data, accessToken, user));
      setFromValue("");
    }
  }

  //post reply comment
  function handelSubmitReplyComment() {
    if (!user) dispatch(actToggleModal());
    if (user) {
      let data = {
        user: user.id,
        comment: comment_id,
        content: fromValue,
      };

      dispatch(actReplyCommentsAsync(data, accessToken, user));
      setFromValue("");
    }
  }

  return (
    <div className="comment-form">
      <div className="comment-controll">
        <div className="comment-avatar">
          {user && <img src={user.avatar} alt="avatar" />}
        </div>
        <textarea
          name=""
          ref={textAreaRef}
          value={fromValue}
          onChange={handelOnchangeValue}
        ></textarea>
      </div>

      {!isReplyCom ? (
        <div className="submit">
          <button onClick={handelSubmitComment}>Commment</button>
        </div>
      ) : (
        <div className="submit">
          <button
            onClick={() => {
              handelSubmitReplyComment();
              onClick();
            }}
          >
            Trả lời
          </button>
        </div>
      )}
    </div>
  );
}

export default FromComent;
