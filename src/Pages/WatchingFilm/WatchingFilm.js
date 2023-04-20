// ------------------------------ react -----------------------------
import { useState, useEffect } from "react";

// ------------------------------ redux -----------------------------
import { useSelector, useDispatch } from "react-redux";
// ------------------------------ react router dom  -----------------
import { useParams } from "react-router-dom";
// ------------------------------ icon ------------------------------
import { AiOutlineEye, AiFillLike } from "react-icons/ai";
// ------------------------------ css -------------------------------
import "./WatchingFilm.css";
// ------------------------------ compinent -------------------------
import Topfilm from "../../Components/TopFilm/Topfilm.js";
import Video from "../../Components/Video/Video";
import Comment from "../../Components/Comment/Comment";
import { actDetailFilmAsync } from "../../Redux/Actions";

function WatchingFilm() {
  const [showMore, setShowMore] = useState(false);
  const [linkVideo, setlinkVideo] = useState("");
  // -------------------- react router dom --------------------
  let { id } = useParams();
  let { detailFilm } = useSelector((state) => state.detailFilm);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(actDetailFilmAsync(id)).then(() => {
      // setlinkVideo(
      //   `https://2embed.org/embed/movie?imdb=${detailFilm.imdb_id}&language=vi`
      // );
    });
  }, [detailFilm.imdb_id, dispatch, id]);
  if (Object.keys(detailFilm).length === 0) {
    return <></>;
  }
  // -------------------- more text --------------------------
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  let description = detailFilm.overview;
  const trimmedDescription = description.substring(0, 500);

  return (
    <section className="watchingtv">
      <div className="container">
        <div className="body">
          <div className="left">
            <Video url={linkVideo} />
            <div className="action">
              <div className="left">
                <div className="sever">server</div>
                <div className="block view">
                  <AiOutlineEye className="icon-view" />
                  {detailFilm.vote_average}
                </div>
              </div>
              <div className="right">
                <div className="block like">
                  <AiFillLike />
                  {detailFilm.vote_count}
                </div>
                {/* <div className="block unlike">
                  <AiFillDislike />
                  336
                </div> */}
              </div>
            </div>
            <p className="name">Diễn viên : Đang cập nhập... </p>
            <p className="title">
              {showMore ? description : trimmedDescription}
              {description.length > 500 && (
                <span onClick={toggleShowMore} className="seemore">
                  {showMore ? "Thu gọn" : "Xem thêm"}
                </span>
              )}
            </p>
            <Comment />
          </div>
          <div className="right">
            <Topfilm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WatchingFilm;
