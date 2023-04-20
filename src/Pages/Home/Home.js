// ------------------------- react ----------------
import { useEffect } from "react";

// ------------------------- action ----------------
import { useSelector, useDispatch } from "react-redux";

import {
  actListFilmCinemoAsync,
  actListFilmFictionAsync,
  actListFilmHoneAsync,
  actListFilmTrendingAsync,
  actListFilmUpcomingAsync,
} from "../../Redux/Actions";
// ------------------------- component ----------------
import HomeListFilm from "../../Components/HomeListFilm/HomeListFilm";
import MainSlider from "../../Components/Slider/Slider";
import Heading from "../../Components/Shared/Heading/Heading";

function Home() {
  const { listFilmHome } = useSelector((state) => state.listFilmhome);
  const { listFilmUpcoming } = useSelector((state) => state.listFilmUpcoming);
  const { listFilmFiction } = useSelector((state) => state.listFilmFiction);
  const { listFilmCinemo } = useSelector((state) => state.listFilmCinemo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actListFilmHoneAsync());
    dispatch(actListFilmTrendingAsync());
    dispatch(actListFilmUpcomingAsync());
    dispatch(actListFilmFictionAsync());
    dispatch(actListFilmCinemoAsync());
  }, [dispatch]);

  // ------------------- scroll top -------------------------
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="film">
        <div className="container">
          <Heading title="Phim thịnh hành" isButton={false} />
          <MainSlider datas={listFilmUpcoming} />
          <div className="home_secsion">
            <Heading title="Phim mới cập nhập" />
            <HomeListFilm datas={listFilmHome} loading />
          </div>
          <div className="home_secsion">
            <Heading title="PHIM CHIẾU RẠP" />
            <HomeListFilm datas={listFilmCinemo} loading />
          </div>
          <div className="home_secsion">
            <Heading title="PHIM viễn tưỡng" />
            <HomeListFilm datas={listFilmFiction} loading />
          </div>
          <Heading title="phim sắp chiếu" isButton={false} />
          <MainSlider datas={listFilmUpcoming} />
        </div>
      </section>
    </>
  );
}

export default Home;
