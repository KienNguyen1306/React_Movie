// ----------------------- react ----------------------
// import { useState } from "react";
// ----------------------- redux ---------------------
// import { useDispatch } from "react-redux";
// ----------------------- react router dom ----------
// import { useParams } from "react-router-dom";
// ----------------------- action --------------------
// import {
//   actListFilmGenresAsync,
//   actListFilmHoneAsync,
// } from "../../Redux/Actions";
// ----------------------- css -----------------------
import "./HomeListFilm.css";
// ----------------------- icon ---------------------

// ----------------------- components ---------------
import FilmItem from "../FilmItem/FilmItem";
import ItemLoading from "../Shared/ItemLoading/ItemLoading";

function HomeListFilm({ datas, loading }) {
  return (
    <div className="homeListFilm">
      {loading ? (
        <>
          {datas.slice(0, 12).map((item) => {
            return <FilmItem key={item.id} isPlay isSub isView data={item} />;
          })}
        </>
      ) : (
        <ItemLoading countItem={12} />
      )}
    </div>
  );
}

export default HomeListFilm;
