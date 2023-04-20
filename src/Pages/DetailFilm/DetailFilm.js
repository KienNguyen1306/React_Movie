// ----------------------- react ---------------------
import { useState, useEffect } from "react";
// ----------------------- redux ---------------------
import { useSelector, useDispatch } from "react-redux";
// ----------------------- action --------------------
import {
  actDetailFilmAsync,
  actListFilmSimilarAsync,
} from "../../Redux/Actions";
//------------------------ react router dom ----------
import { useParams, useNavigate } from "react-router-dom";
//------------------------ css -----------------------
import "./DetailFilm.css";
// ----------------------- component -----------------
import Button from "../../Components/Shared/Button/Button";
import Heading from "../../Components/Shared/Heading/Heading";
import ModalTravel from "../../Components/Shared/ModalTravel/ModalTravel";
import Comment from "../../Components/Comment/Comment";
import MainSlider from "../../Components/Slider/Slider";

function DetailFilm() {
  const [showTravel, setShowtravel] = useState(false);
  const [loading, setLoading] = useState(true);

  let { detailFilm } = useSelector((state) => state.detailFilm); //useSelector
  let { listFilmSimilar } = useSelector((state) => state.listFilmSimilar); //listFilmSimilar
  let dispatch = useDispatch(); //useDispatch

  if (!detailFilm) <></>;
  const usenavigate = useNavigate(); //useNavigate

  let { id } = useParams(); //useParams

  // ---------------- call api detai -----------------------
  useEffect(() => {
    dispatch(actDetailFilmAsync(id)).then(() => {
      setLoading(false);
    });
    dispatch(actListFilmSimilarAsync(id));
  }, [dispatch, id]);

  // ------------------- scroll top -------------------------
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ------------------- next page watching film ------------
  function handolNextPage() {
    usenavigate(`/watchingfilm/${detailFilm.id}`);
  }

  // ------------------- show travel-------------------------
  function handleShowtravel() {
    if (detailFilm.videos.results.length !== 0) {
      setShowtravel(!showTravel);
    }
  }

  return (
    <div className="detai-film">
      <div className="container">
        {loading ? (
          "loading..."
        ) : (
          <div className="body">
            <div className="detai-haeding">phimhay.ord</div>
            <div className="body-main">
              <div className="image">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    detailFilm.backdrop_path || detailFilm.poster_path
                  }`}
                  alt="eorro"
                />
              </div>
              <div className="body-content">
                <div className="body-content-left">
                  <img
                    src={`https://image.tmdb.org/t/p/original${detailFilm.poster_path}`}
                    alt="error"
                  />
                </div>
                <div className="body-content-right">
                  <h2 className="body-content-right-haeding">
                    {detailFilm.title}
                  </h2>
                  <div className="action">
                    <Button
                      className="travel"
                      onClick={() => handleShowtravel()}
                    >
                      Travel
                    </Button>
                    <Button className="watch" onClick={() => handolNextPage()}>
                      Xem phim
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {detailFilm.season_number && (
              <div className="episode">
                <sapn className="episode-h">Tập phim :</sapn>
                <Button type="default" size="smoll">
                  Tập 1
                </Button>
                <Button type="default" size="smoll">
                  Tập 1
                </Button>
                <Button type="default" size="smoll">
                  Tập 1
                </Button>
                <Button type="default" size="smoll">
                  Tập 1
                </Button>
                <Button type="default" size="smoll">
                  Tập 1
                </Button>
              </div>
            )}

            <div className="detail-info">
              <div className="detail-info-main">
                <ul className="detail-info-list">
                  <li className="detail-info-list-item">
                    Đang phát:
                    {detailFilm.spoken_languages && (
                      <>
                        {detailFilm.spoken_languages.map((lg, index) => (
                          <span key={index}> {lg.english_name},</span>
                        ))}
                      </>
                    )}
                  </li>
                  <li className="detail-info-list-item">
                    Thể loại:
                    {detailFilm.genres && (
                      <>
                        {detailFilm.genres.map((item, index) => {
                          return <span key={index}>{item.name},</span>;
                        })}
                      </>
                    )}
                  </li>
                  <li className="detail-info-list-item">
                    Diễn viên :<span> Đang cập nhập...</span>
                  </li>
                </ul>
                <ul className="detail-info-list">
                  <li className="detail-info-list-item">
                    Năm Phát Hành:
                    <span> {detailFilm.release_date}</span>
                  </li>
                  <li className="detail-info-list-item">
                    Nhà phát hành :
                    {detailFilm.production_companies && (
                      <>
                        {detailFilm.production_companies.map((cou, index) => (
                          <span key={index}> {cou.name},</span>
                        ))}
                      </>
                    )}
                  </li>
                </ul>
                <ul className="detail-info-list">
                  <li className="detail-info-list-item">
                    Quốc gia:
                    <span>
                      {detailFilm.production_countries &&
                        detailFilm.production_countries.length > 0 &&
                        detailFilm.production_countries[0].name}
                    </span>
                  </li>
                  <li className="detail-info-list-item">
                    Thời lượng:
                    <span> {detailFilm.runtime} phút</span>
                  </li>
                </ul>
              </div>
              <div className="detail-info-bottom">
                <Heading
                  title="Nội dung phim"
                  addClassName="heDetai"
                  isButton={false}
                />
                <p className="detail-info-bottom-desc">
                  {detailFilm.overview
                    ? detailFilm.overview
                    : "Đang cập nhập..."}
                </p>
              </div>
              <Comment />
            </div>
          </div>
        )}

        {/* slider */}
        <div className="listFilmSimilar">
          <Heading title="CÓ THỂ BẠN CŨNG MUỐN XEM" isButton={false} />
          <MainSlider datas={listFilmSimilar} />
        </div>
      </div>

      {showTravel && (
        <div className="model-travel" onClick={handleShowtravel}>
          {detailFilm.videos.results.length !== 0 && (
            <ModalTravel url={detailFilm.videos.results[0].key} />
          )}
        </div>
      )}
    </div>
  );
}

export default DetailFilm;
