// ---------------------- react router dom ---------------
import { useNavigate } from "react-router-dom";
// ---------------------- icon ---------------------------
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlinePlayCircle, AiOutlineLike } from "react-icons/ai";
// ---------------------- css ----------------------------
import "./FilmItem.css";
// ------------------------- lidrary className -----------
import cls from "classnames";

function FilmItem(props) {
  let { type, isPlay, isView, isViewSub, cusClassName, data } = props;

  const usenavigate = useNavigate();
  function handolNextPage() {
    usenavigate(`/detailfilm/${data.id}`);
    window.scrollTo(0, 0);
  }

  let className = cls(
    "item",
    {
      "style-item": type === "style-item",
    },
    cusClassName
  );

  return (
    <div className={className} onClick={() => handolNextPage()}>
      {isView && (
        <div className="view-main">
          <AiOutlineEye className="icon-view" />
          {data.popularity}
        </div>
      )}
      {isPlay && (
        <div className="play">
          <AiOutlinePlayCircle className="icon-play" />
        </div>
      )}
      <div className="main-image">
        <img
          className="image"
          src={`https://image.tmdb.org/t/p/w400${data.poster_path}`}
          alt="error"
        />
      </div>

      <div className="title">
        <p className="line-camp">{data.title || data.name}</p>
        {isViewSub && (
          <div className="action">
            <div className="view">
              <AiOutlineEye className="icon-view" /> {data.vote_count}
            </div>
            <div className="like">
              <AiOutlineLike />
              {data.vote_average}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilmItem;
