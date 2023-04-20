// ----------------------- react router dom ----------
import { Link } from "react-router-dom";
// ----------------------- css -----------------------
import "./TopSearch.css";
// ----------------------- redux ---------------------
import { useDispatch } from "react-redux";
// ----------------------- action --------------------
import { actSearch } from "../../Redux/Actions";
// -------------------------- data -------------------
import { dataSearch } from "../../Data/MenuData";
// ----------------------- components ----------------
import Heading from "../../Components/Shared/Heading/Heading";

function TopSearch() {
  let dispatch = useDispatch(); //useDispatch
  function handleOnchangSearch(str) {
    console.log(str);
    dispatch(actSearch(str));
    window.scrollTo(0, 0);
  }
  return (
    <div className="topsearch">
      <div className="container">
        <Heading title="Top search" isButton={false}/>
        <ul className="list">
          {dataSearch.map((item) => {
            return (
              <li key={item.id}>
                <Link href="#" onClick={() => handleOnchangSearch(item.title)}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TopSearch;
