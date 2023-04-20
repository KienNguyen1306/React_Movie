// ------------------------ react -----------------------
import { useEffect } from "react";
// ---------------------- redux -------------------------
import { useSelector, useDispatch } from "react-redux";
import {
  actTogglebar,
  actToggleModal,
  actToggleSearch,
  actLoginAutoAsync,
  actLogOut,
} from "../../Redux/Actions";

// ----------------------- icon --------------------------
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
//------------------------ data -------------------------
import { menuData } from "../../Data/MenuData";
// ----------------------- css --------------------------
import "./Header.css";
// ----------------------- components -------------------
import Search from "../../Components/Shared/Search/Search";
import Menu from "../../Components/Shared/Menu/Menu";
import Logo from "../../Components/Shared/Logo/Logo";

function Header() {
  const isShow = useSelector((state) => state.ShowReducer);
  const { accessToken, user, isLoading } = useSelector(
    (state) => state.userReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken) {
      dispatch(actLoginAutoAsync(accessToken));
    }
  }, [accessToken, dispatch]);

  // toggo bar
  function handolShowbar() {
    dispatch(actTogglebar());
  }

  // show search
  function handolShowSearch() {
    dispatch(actToggleSearch());
  }

  // show modal
  function handolShowModel() {
    dispatch(actToggleModal());
  }

  //logout
  function handleLogOutUser() {
    dispatch(actLogOut());
  }
  return (
    <header className="header">
      <div className="container">
        <div className="body">
          <FaBars className="icon-bar" onClick={handolShowbar} />

          <Logo />
          <nav className={`nav ${isShow.isBar && "show"}`}>
            <Menu menuData={menuData} toggleBar={handolShowbar} />
          </nav>

          <div className="main-action">
            <div className={`mainSearch ${isShow.isSearch && "show"}`}>
              <Search />
            </div>
            <AiOutlineSearch
              className="icon-search-1"
              onClick={() => handolShowSearch()}
            />
            {!isLoading ? (
              <RxAvatar className="icon-avatar" onClick={handolShowModel} />
            ) : (
              <>
                <div className="avatar-user">
                  <img
                    className="image"
                    src={user && user.avatar}
                    alt="avatar"
                  />
                  <ul className="action-user">
                    <li>Tài Khoản</li>
                    <li onClick={handleLogOutUser}>Log out</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
