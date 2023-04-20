import About from "../Pages/About/About.js";
import Home from "../Pages/Home/Home.js";

import WatchingFilm from "../Pages/WatchingFilm/WatchingFilm.js";
import DetailFilm from "../Pages/DetailFilm/DetailFilm.js";
import Film from "../Pages/Film/Film";
import Contact from "../Pages/Contact";
export const publicRouters = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/detailfilm/:id", component: DetailFilm },
  { path: "/watchingfilm/:id", component: WatchingFilm },
  { path: "/film/:genres", component: Film },
  { path: "/contact", component: Contact },
];
