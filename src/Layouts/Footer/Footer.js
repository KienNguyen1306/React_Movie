// ------------------------------------ react dom -----------
import { Link } from "react-router-dom";
// ---------------------------------- data ------------------
import { menuData } from "../../Data/MenuData";
// -------------------------------- css ---------------------
import "./Footer.css";
// ---------------------------------- compnent --------------
import Logo from "../../Components/Shared/Logo/Logo";
function Footer() {
  function handleClickCaterogy() {
    window.scrollTo(0, 0);
  }
  return (
    <footer className="footer">
      <div className="container">
        <Logo />
        <p className="title">
          Chào mừng bạn đến với website xem phim trực tuyến hoàn toàn miễn phí
          PHIMHAY.ORG. Đến với chúng tôi bạn sẽ được xem nhiều phim với thể loại
          nội dung hấp dẫn mới lạ, chất lượng phim rõ nét. Trang web nói không
          với phim thể loại ấu dâm, bạo dâm, khuyến cáo không được tự ý làm theo
          những điều trong phim tránh vi phạm pháp luật.
        </p>
        <div className="body">
          <h2 className="heading">thể loại phim</h2>
          <ul>
            {menuData[0].children.map((item) => {
              return (
                <li key={item.id} onClick={handleClickCaterogy}>
                  <Link to={`/film/${item.id}`}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="Copyright">© Copyright 2023 NDK, All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
