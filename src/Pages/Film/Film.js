// ------------------------- react------------------
import { useState, useEffect } from "react";

// =========================== react router dom ==============
import { useParams } from "react-router-dom";

// ------------------------- css -------------------
import "./Film.css";
// ----------------------- redux ---------------------
import { useDispatch, useSelector } from "react-redux";
// ------------------------- data ------------------
import { genresData, dataYear } from "../../Data/MenuData";

// ------------------------- compnent --------------
import ArticleListFilm from "../../Components/ArticleListFilm/ArticleListFilm";
import Heading from "../../Components/Shared/Heading/Heading";

import { Select } from "antd";
import { Button } from "antd";
import { actListFilmGenresAsync, actSetType } from "../../Redux/Actions";
const { Option } = Select;

function Film() {
  const [isFilter, setIsFilter] = useState(false);
  const { listFilmGenres, loading, totalPage, curentPage, type } = useSelector(
    (state) => state.listFilmGenres
  );
  let { genres } = useParams(); // genres
  let dispatch = useDispatch();

  console.log("type", type);
  const [formFilter, setFromFilter] = useState({
    with_genres: "",
    with_countries: "",
    primary_release_year: "",
  });
  useEffect(() => {
    dispatch(actListFilmGenresAsync(genres, 1, type, formFilter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isFilter, genres, type]);

  const [title, setTitle] = useState("");

  // --------------set title -------------
  useEffect(() => {
    // if (genres === "topviews") {
    //   setTitle("TOPVIEW");
    // } else {
    //   let newTitle = genresData.find(
    //     (item) => item.id === genres * 1 || item.id === genres
    //   );
    //   setTitle(
    //     newTitle.title.includes("Phim")
    //       ? newTitle.title
    //       : `Phim ${newTitle.title}`
    //   );
    // }

    let newTitle = genresData.find(
      (item) => item.id === genres * 1 || item.id === genres
    );

    setTitle(newTitle.title);
  }, [genres]);

  // ------------------- scroll top -------------------------
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleChange(value, name) {
    setFromFilter({ ...formFilter, [name]: value });
  }

  function handelFilter() {
    console.log("formFilter", formFilter);
    dispatch(actSetType(6));
    setIsFilter(!isFilter);
  }

  return (
    <section className="film">
      <div className="container">
        <div className="filte_film">
          {/* ---------------- thể loại ------------- */}
          <Select
            fieldNames="kien"
            className="with_Select"
            defaultValue=""
            onChange={(value) => handleChange(value, "with_genres")}
            style={{ width: 150 }}
            popupClassName="popupClassName"
          >
            <Option value="">Thể loại</Option>
            {genresData.slice(0, 19).map((genre) => {
              return (
                <Option key={genre.id} value={genre.id}>
                  {genre.title}
                </Option>
              );
            })}
          </Select>
          {/* -------------------- quốc gia --------- */}
          <Select
            className="with_Select"
            defaultValue=""
            onChange={(value) => handleChange(value, "with_countries")}
            style={{ width: 150 }}
          >
            <Option value="">Quốc gia</Option>
            {genresData.slice(20, 30).map((countrie) => {
              return (
                <Option key={countrie.id} value={countrie.id}>
                  {countrie.title}
                </Option>
              );
            })}
          </Select>
          {/* -------------------- năm phát hành --------- */}
          <Select
            defaultValue=""
            onChange={(value) => handleChange(value, "primary_release_year")}
            style={{ width: 150 }}
          >
            <Option value="">Năm phát hành</Option>
            {dataYear.map((year) => {
              return (
                <Option key={year.id} value={year.id}>
                  {year.title}
                </Option>
              );
            })}
          </Select>

          <Button type="primary" danger onClick={handelFilter}>
            Tìm kiếm
          </Button>
        </div>
        <Heading title={title} isButton={false} />
        <ArticleListFilm
          datas={listFilmGenres}
          isloading={loading}
          totalPage={totalPage}
          curentPage={curentPage}
          type={type}
          formFilter={formFilter}
        />
      </div>
    </section>
  );
}

export default Film;
