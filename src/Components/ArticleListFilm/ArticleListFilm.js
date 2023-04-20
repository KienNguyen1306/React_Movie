// ----------------------- react ----------------------
import { useEffect, useState } from "react";
// ----------------------- redux ---------------------
import { useDispatch } from "react-redux";
// ----------------------- react router dom ----------
import { useParams } from "react-router-dom";
// ----------------------- action --------------------
import { actListFilmGenresAsync } from "../../Redux/Actions";
// ----------------------- css -----------------------
import "./ArticleListFilm.css";
// ----------------------- icon ---------------------
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
// ----------------------- library paginate----------
import ReactPaginate from "react-paginate";
// ----------------------- components ---------------
import FilmItem from "../FilmItem/FilmItem";
import ItemLoading from "../Shared/ItemLoading/ItemLoading";

function ArticleListFilm({
  datas,
  isloading,
  totalPage,
  curentPage,
  type,
  formFilter,
}) {
  const [actionPage, setActionPage] = useState(1);
  let { genres } = useParams(); // genres
  let dispatch = useDispatch();
  const handlePageClick = (event) => {
    const newOffset = event.selected + 1;
    setActionPage(newOffset);
    dispatch(actListFilmGenresAsync(genres, newOffset, type, formFilter));
  };

  useEffect(() => {
    setActionPage(1);
  }, [genres]);
  return (
    <div className="body">
      <section className="body_left">
        <div className="list">
          {isloading ? (
            <>
              {datas.map((item) => {
                return (
                  <FilmItem key={item.id} isPlay isSub isView data={item} />
                );
              })}
            </>
          ) : (
            <ItemLoading countItem={12} />
          )}
        </div>
        <div className="main-paginate">
          {datas.length !== 0 && (
            <ReactPaginate
              breakLabel="..."
              nextLabel={<GrFormNext className="icon-next" />}
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              pageCount={totalPage > 100 ? 100 : totalPage}
              previousLabel={<GrFormPrevious className="icon-prev" />}
              renderOnZeroPageCount={null}
              className="paginate-ul"
              pageClassName="pageClassName"
              activeClassName={curentPage === actionPage && "active"}
              pageLinkClassName="pageLinkClassName"
            />
          )}
        </div>
      </section>
    </div>
  );
}

export default ArticleListFilm;
