// --------------------------- react ------------------------
import { useState } from "react";
//---------------------------- redux ------------------------
import { useDispatch } from "react-redux";
// --------------------------- action -----------------------
import { actSearch } from "../../../Redux/Actions";
// --------------------------- icon--------------------------
import { AiOutlineSearch } from "react-icons/ai";
// ------------------------------ css -----------------------
import "./Search.css";




function Search() {
  let [valueSearch, setValueInput] = useState("");
  const dispatch = useDispatch();
  function handleChangeSearch(event) {
    event.preventDefault();
    let inputValue = event.target.value;
    setValueInput(inputValue);
    dispatch(actSearch(inputValue));
  }

  function handleChangeBlur() {
    setValueInput("");
  }

  return (
    <div className="search-box">
      <input
        placeholder="search.."
        className="input"
        name="text"
        type="text"
        value={valueSearch}
        onChange={handleChangeSearch}
        onBlur={handleChangeBlur}
      />
      <button className="search-btn">
        <AiOutlineSearch className="icon-search" />
      </button>
    </div>
  );
}

export default Search;
