// -------------------------- react -------------------------
import { useState, useEffect } from "react";

// --------------------------  css --------------------------
import "./Topfilm.css";
// -------------------------- linkapi------------------------
import { API_TRENDING } from "../../fetdata";
// --------------------------  components--------------------

import Heading from "../Shared/Heading/Heading";
import FilmItem from "../FilmItem/FilmItem";

function Topfilm() {
  const [listFilms, setLisstFilm] = useState([]);

  useEffect(() => {
    fetch(API_TRENDING)
      .then((response) => response.json())
      .then((data) => setLisstFilm(data.results));
  }, []);
  return (
    <aside className="body-right">
      <Heading title="Phim top" isButton={false} />
      <div className="aside">
        {listFilms.slice(0, 10).map((item) => {
          return (
            <FilmItem key={item.id} type="style-item" isViewSub data={item} />
          );
        })}
        {/* <ItemLoading size="smoll" countItem={2} /> */}
      </div>
    </aside>
  );
}

export default Topfilm;
