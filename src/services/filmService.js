import API from "./api";
let api_key = "e2c32d467111c020ae1e2584fc532e39";
const filmService = {
  getALL: function (inputParam = {}, url = "/movie/popular") {
    return API.get(url, {
      params: {
        api_key: api_key,
        language: "vi",
        ...inputParam,
      },
    });
  },
  getListFilm: function (page = 1) {
    return this.getALL({ page: page });
  },

  getListFilmtrending: function () {
    return this.getALL({ page: 1 }, "/trending/all/week");
  },

  getListFilmSearch: function (search, page) {
    return this.getALL("search/movie", {
      query: search,
      page,
      include_adult: false,
    });
  },
  getListFilmUpcoming: function () {
    return this.getALL({}, "movie/upcoming");
  },
  getListFilmCinemo: function (page = 1) {
    return this.getALL(
      {
        "primary_release_date.gte": "2019-03-15",
        "primary_release_date.lte": "2022-09-23",
        page: page,
      },
      "movie/upcoming"
    );
  },

  getListFilmFiction: function () {
    return this.getALL({
      sort_by: "popularity.desc",
      include_adult: false,
      include_video: false,
      page: 1,
      with_genres: 878,
    });
  },
  getListFilmSimilar: function (idFilm) {
    return this.getALL({ page: 1 }, `/movie/${idFilm}/similar`);
  },

  getFilmDetail: function (filmId) {
    return this.getALL({ append_to_response: "videos" }, `/movie/${filmId}`);
  },

  getFilmGenres: function (genres, page = 1, type = 2, filter = {}) {
    if (type === 1) {
      return this.getALL({
        sort_by: "popularity.desc",
        include_adult: false,
        include_video: false,
        page: page,
        with_genres: genres,
      });
    }
    if (type === 2) {
      return this.getALL({
        sort_by: "popularity.desc",
        include_adult: false,
        include_video: false,
        page: page,
        with_countries: genres,
      });
    }
    if (type === 3) {
      return this.getALL({ page: page }, "movie/top_rated");
    }
    if (type === 4) {
      return this.getALL(
        {
          "primary_release_date.gte": "2019-03-15",
          "primary_release_date.lte": "2022-09-23",
          page: page,
        },
        "movie/upcoming"
      );
    }
    if (type === 6) {
      return this.getALL({
        sort_by: "popularity.desc",
        include_adult: false,
        include_video: false,
        page: page,
        ...filter,
      });
    }
  },
};

export default filmService;
