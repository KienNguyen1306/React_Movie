// --------- react ---------------------

// ----------redux----------------------
// ----------library slick--------------
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// ---------- css ----------------------
import "./Slider.css";
//-------------component ---------------
import FilmItem from "../FilmItem/FilmItem";
import ItemLoading from "../Shared/ItemLoading/ItemLoading";

function MainSlider({ datas }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (datas.length === 0) {
    return (
      <>
        <section className="mainslider">
          <div className="container">
            <Slider {...settings}>
              <ItemLoading />
              <ItemLoading />
              <ItemLoading />
              <ItemLoading />
              <ItemLoading />
            </Slider>
          </div>
        </section>
      </>
    );
  }
  return (
    <section className="mainslider">
      <div className="container">
        <Slider {...settings}>
          {datas.map((item) => {
            return <FilmItem key={item.id} data={item}></FilmItem>;
          })}
        </Slider>
      </div>
    </section>
  );
}

export default MainSlider;
