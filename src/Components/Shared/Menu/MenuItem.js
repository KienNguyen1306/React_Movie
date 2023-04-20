// ------------------------- react ---------------------
import { useState } from "react";
// ------------------------- react router dom ----------
import { useNavigate } from "react-router-dom";
// ------------------------- redux --------------------
import { useDispatch } from "react-redux";
// ------------------------- action --------------------
import { actTogglebar, actSearch, actSetType } from "../../../Redux/Actions";
// ------------------------- icon ---------------------
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
// ------------------------- compoent ----------------
import SubMenu from "./SubMenu";

function MenuItem({ data, type }) {
  const [showMenu, setShowMenu] = useState(false); // status dropdowwn
  const usenavigate = useNavigate(); // useNavigate
  const dispatch = useDispatch(); //useDispatch

  //  hover dropdowwn
  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  //hover out
  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  // khi click showbar and next page film
  function handolShowbar(id) {
    if (!data.children.length > 0) {
      dispatch(actTogglebar());
      dispatch(actSearch(""));
      usenavigate(`/film/${id}`);
      dispatch(actSetType(data.type));
    }
  }

  return (
    <li
      className="menu-item "
      key={data.id}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      onClick={() => handolShowbar(data.id)}
    >
      <p className={type}>{data.title}</p>
      {data.children.length === 0 ? (
        ""
      ) : showMenu ? (
        <AiFillCaretUp />
      ) : (
        <AiFillCaretDown />
      )}
      {data.children.length > 0 && showMenu && <SubMenu item={data} />}
    </li>
  );
}

export default MenuItem;
