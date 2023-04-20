// =============================== redux ================
import { useSelector } from "react-redux";

// =========================== components ===================
import ScrollTop from "../Components/Shared/ScrollTop/ScroollTop";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ModalLoginRegister from "./ModalLoginRegister/ModalLoginRegister";
import TopSearch from "./TopSearch/TopSearch";

function DefaultLayout({ children }) {
  const isShowModal = useSelector((state) => state.ShowReducer.isModal);
  return (
    <main>
      <Header />
      {children}
      <TopSearch />
      <Footer />
      <ScrollTop />
      {isShowModal && <ModalLoginRegister />}
    </main>
  );
}

export default DefaultLayout;
