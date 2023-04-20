// ---------------------- react-router-dom ----
import { Link } from "react-router-dom";

// ---------------------- library moment -------
import moment from "moment/moment";
import "moment/locale/vi";
// ----------------------- redux ---------------------
// import { useSelector, useDispatch } from "react-redux";
//----------------------- cpmponent -----------
import ReplyComent from "./ReplyComent";

import FromComent from "./FromComent";
import { useState } from "react";

function CommentItem({ data, user }) {
  const [showFromComment, setshowFromComment] = useState(false);
  const [showReplyComment, setshowReplyComment] = useState(false);
  // show reply commnet
  function handelShowReplyCommnet() {
    setshowReplyComment(!showReplyComment);
  }
  // show reply commnet
  function handelShowReplyCommnet1() {
    setshowReplyComment(true);
  }
  // show from reply commnet
  function handelShowFromReply() {
    setshowFromComment(!showFromComment);
  }

  return (
    <>
      <li key={data.id} className="item">
        {/* ------------------ comment -------------- */}
        <div className="item-body">
          <div className="item-body-avatar">
            <img src={data.user.avatar} alt="avatar" />
          </div>
          <div className="item-body-comment">
            <Link href="#" className="comments__section--user">
              {data.user.username}
            </Link>
            <p className="comments__section--time">
              {moment(data.created_at).locale("vi").fromNow()}
            </p>
            <p className="comments__section--text">{data.content}</p>
          </div>
        </div>
        {/* -------------------action --------------- */}
        <div className="action">
          {data.replies && <span onClick={handelShowFromReply}>Trả lời</span>}

          {/* ---------------- xem câu trả lời ------ */}
          {data.replies && data.replies.length > 0 && (
            <>
              <span onClick={handelShowReplyCommnet}>
                {showReplyComment
                  ? "Ẩn câu trả lời"
                  : `Xem thêm ${data.replies.length} câu trả lời`}
              </span>
            </>
          )}
        </div>

        {/* ========= trả lời 1 */}
        {showReplyComment && (
          <ReplyComent data={data.replies || []} user={user} />
        )}
      </li>
      {/* --------- from reply comment ------------ */}
      {showFromComment && (
        <FromComent user={user} comment_id={data.id} isReplyCom onClick={handelShowReplyCommnet1}/>
      )}
    </>
  );
}

export default CommentItem;
