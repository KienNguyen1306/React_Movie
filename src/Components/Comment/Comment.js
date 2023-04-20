// -------------------- react ------------------
import { useState, useEffect } from "react";
// ----------------------- redux ---------------------
import { useSelector, useDispatch } from "react-redux";
// -------------------- react router dom -------
import { useParams } from "react-router-dom";
// ----------------------- action ---------------
import { actGetCommentsAsync } from "../../Redux/Actions";
// ---------------------- library moment -------
import moment from "moment/moment";
import "moment/locale/vi";
// -------------------- css --------------------
import "./Comment.css";
import CommentItem from "./CommentItem";
import FromComent from "./FromComent";

function Comment() {
  moment.locale("vn");
  const [limit, setLimit] = useState(6);
  let { comments } = useSelector((state) => state.commentReducer); //useSelector
  let { id } = useParams();

  let { user } = useSelector((state) => state.UserReducer); //useSelector
  let dispatch = useDispatch(); //useDispatch

  //handel more comment
  function handelMoreComment() {
    setLimit(limit + 6);
  }
  // ---------------- call api comment ---------------------
  useEffect(() => {
    dispatch(actGetCommentsAsync(id));
  }, [dispatch, id]);

  return (
    <div id="comment">
      <FromComent user={user} />
      <p className="title">{comments.length} comment</p>
      <ul className="body-comment">
        {comments.slice(0, limit).map((comment) => {
          return <CommentItem key={comment.id} data={comment} user={user} />;
        })}
      </ul>
      {comments.slice(0, limit).length < comments.length && (
        <p className="More-Comment" onClick={handelMoreComment}>
          Xem Thêm
        </p>
      )}
    </div>
  );
}

export default Comment;
